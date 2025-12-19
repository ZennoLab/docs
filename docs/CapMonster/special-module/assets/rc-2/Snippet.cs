// Основные параметры
 
// время ожидания
var waitTime = 1500;
// количество попыток распознать
var tryRecognize = 10;
// количество попыток выбирать изменяющиеся картинки
var dynamicImagesRecognizeAttempts = 20;
// количество попыток загрузить элемент
var tryLoadElement = 60;
// получать полный ответ
bool fullAnswer = false;
// показывать сообщения о прогрессе распознавания
var needShowMessages = false;
// проверять корректность распознанного ответа
var needToCheck = true;
 
// Вспомогательные переменные
 
// вкладка
Tab tab = instance.ActiveTab;
// поздравляем, вы не робот
var success = false;
// время вышло
var timeout = false;
// задание для рекапчи 2
string task = string.Empty;
// url изображения
var src = string.Empty;
// картинка в base64
var imageString = string.Empty;
// ответ на каптчу
string answer = string.Empty;
// капча изменилась
var changed = false;
// пустой ответ
bool answerIsEmpty = false;
// изменяемая каптча
bool dynamicCaptcha = false;
// ввод каптчи несколько раз
bool notOneEnter = false;
var coincidenceReCaptcha2Index = -1;
 
// Проверка прохождения защиты
Action CheckOK= () => 
{
tab.WaitDownloading();
for (int k = 0; k < tryLoadElement; k++)
{
System.Threading.Thread.Sleep(waitTime); // подождём загрузки элементов
var check = tab.FindElementByAttribute("div", "class", "recaptcha-checkbox-checkmark", "regexp", 0);
 
// проверка исчезновения формы
var loadedForm = tab.FindElementByAttribute("div", "class", "primary-controls", "regexp", 0);
if (loadedForm.IsVoid)
{
success = true;
break;
}
else
{
int xPrimaryControlsDisplaysment = loadedForm.DisplacementInTabWindow.X;
int yPrimaryControlsDisplaysment = loadedForm.DisplacementInTabWindow.Y;
 
if (xPrimaryControlsDisplaysment < 0 || yPrimaryControlsDisplaysment < 0) // there are no visible recaptcha
{
success = true;
break;
}
if (check.IsVoid)
break;
}
 
var more = tab.FindElementByAttribute("div", "class", "rc-imageselect-error-select-more", "regexp", 0);
var wrong = tab.FindElementByAttribute("div", "class", "rc-imageselect-incorrect-response", "regexp", 0);
if (!more.IsVoid && !wrong.IsVoid)
{
var isNotVisibleMore = more.GetAttribute("outerhtml").Replace(" ","").Contains("display:none");
var isNotVisibleWrong = wrong.GetAttribute("outerhtml").Replace(" ","").Contains("display:none");
if (isNotVisibleMore && isNotVisibleWrong)
{
if (!check.IsVoid)
{
if (check.OuterHtml.Contains("style=\"\"")) 
{
success = true;
break;
}
else break;
}
}
else break;
}
if (k == (tryLoadElement - 1)) timeout = true;
 
}
};
 
// Подтверждение ответа
Action VerifyAnswer= () =>
{
project.SendInfoToLog("Проверка правильности после ввода динамической капчи", needShowMessages);
 tab.WaitDownloading();
// поиск кнопки "Подтвердить"
HtmlElement apply = tab.FindElementById("recaptcha-verify-button");
if (!apply.IsVoid) apply.Click();
// проверка правильности ответа
CheckOK();
};
 
Action InputNotBotText= () =>
{
tab.WaitDownloading();
var inputField = tab.FindElementByAttribute("input:text", "id", "default-response", "text", 0);
if (!inputField.IsVoid)
{
inputField.SetValue("I am not robot", "Full");
VerifyAnswer();
}
};
 
Action UpdateImage= () => 
{
project.SendInfoToLog("Обновление капчи", needShowMessages);
 
// Обновить капчу если необходимо
if (!changed) 
{
HtmlElement reload = tab.FindElementById("recaptcha-reload-button");
 
if (!reload.IsVoid)
{
reload.Click();
InputNotBotText();
}
else timeout = true;
}
changed = false;
 
for (int k = 0; k < tryLoadElement; k++)
{
System.Threading.Thread.Sleep(waitTime); // waiting for element load
// searching for the picture
var testImage = tab.FindElementByAttribute("img", "class", "rc-image-tile", "regexp", 0);
if (testImage.IsVoid) continue;
// get image url
var newSrc = testImage.GetAttribute("src");
// if the image has been changed, go out
if (newSrc != src) break;
if (k == (tryLoadElement - 1)) timeout = true;
}
};
 
Action VisibleIndexReCaptchaDefinition= () => {
tab.WaitDownloading();
var recaptchaElementsGroup = tab.FindElementsByAttribute("div", "class", "recaptcha-checkbox-checkmark", "regexp");
int length = recaptchaElementsGroup.Elements.Length;
if (length == 1)
{
coincidenceReCaptcha2Index = 0;
return;
}
 
for(int i = 0; i < length; i++)
{
var element = recaptchaElementsGroup.Elements[i];
if (!element.IsVoid)
{
int x = element.DisplacementInTabWindow.X;
int y = element.DisplacementInTabWindow.Y;
 
var suspectVisibleElement = tab.GetElementFromPoint(x, y).DisplacementInTabWindow;
if (x == suspectVisibleElement.X && y == suspectVisibleElement.Y && element.Width != 0 && element.Height != 0 && x != 0 && y != 0)
{
coincidenceReCaptcha2Index = i;
break;
}
}
}
};
 
// Поиск рекаптчи 2
Action SearchReCaptcha2= () => 
{
project.SendInfoToLog("Поиск рекапчи 2", needShowMessages);
 tab.WaitDownloading();
for (int k = 0; k < tryLoadElement; k++)
{
VisibleIndexReCaptchaDefinition();
if (coincidenceReCaptcha2Index < 0) coincidenceReCaptcha2Index = 0;
 
// поиск кнопки "Я не робот"
HtmlElement notRobot = tab.FindElementByAttribute("div", "class", "recaptcha-checkbox-checkmark", "regexp", coincidenceReCaptcha2Index);
 
// кнопка существует
if (!notRobot.IsVoid)
{
// клик по кнопке
notRobot.Click();
System.Threading.Thread.Sleep(waitTime); // pause
 
// если ввод капчи не требуется
var check = tab.FindElementByAttribute("div", "class", "recaptcha-checkbox-checkmark", "regexp", coincidenceReCaptcha2Index);
if (!check.IsVoid)
{
if (check.OuterHtml.Contains("style=\"\""))
{
success = true;
timeout = false;
break;
}
}
}
 
// форма существует
var loadedForm = tab.FindElementByAttribute("div", "class", "primary-controls", "regexp", 0);
if (!loadedForm.IsVoid)
break;
 
// подождем загрузки элементов
System.Threading.Thread.Sleep(waitTime);
if (k == (tryLoadElement - 1)) timeout = true;
}
};
 
// Поиск задания рекапчи 2
Action SearchTask= () => 
{
tab.WaitDownloading();
project.SendInfoToLog("Поиск задания", needShowMessages);
dynamicCaptcha = false;
notOneEnter = false;
answer = String.Empty;
 
for (int k = 0; k < tryLoadElement; k++)
{
HtmlElement taskHe = tab.FindElementByAttribute("div", "class", "rc-imageselect-desc-wrapper", "regexp", 0);
 
if (!taskHe.IsVoid)
{
task = taskHe.GetAttribute("innertext"); // получаем задание
string suspecttask = task.ToLower();
if (suspecttask.Contains("click verify once there are none left") || suspecttask.Contains("when images will be end") ||
suspecttask.Contains("когда изображения закончатся") ||
suspecttask.Contains("коли зображень уже не залишиться, натисніть \"підтвердити\"") ||
suspecttask.Contains("cliquez sur le bouton de validation") ||
suspecttask.Contains("klicken sie") ||
suspecttask.Contains("fai clic su verifica dopo averle selezionate tutte") ||
suspecttask.Contains("gdy wybierzesz wszystkie, kliknij weryfikuj"))
dynamicCaptcha = true;
 
if (suspecttask.Contains("if there are none, click skip") ||
suspecttask.Contains("if they do not exist, click \"skip\"") ||
suspecttask.Contains("wenn du keine siehst") ||
suspecttask.Contains("s'il n'y en a aucune, cliquez sur \"ignorer\"") ||
suspecttask.Contains("если их нет, нажмите \"пропустить\"") || suspecttask.Contains("якщо нічого немає") ||
suspecttask.Contains("ich nie ma, kliknij") ||
suspecttask.Contains("se non ne vedi, fai clic su salta"))
notOneEnter = true;
timeout = false;
break;
}
 
System.Threading.Thread.Sleep(waitTime); // подождём загрузки элемента
if (k == (tryLoadElement - 1)) timeout = true;
}
};
 
// Поиск изображения
Action SearchImage= () => 
{
tab.WaitDownloading();
project.SendInfoToLog("Поиск изображения", needShowMessages);
 
for (int k = 0; k < tryLoadElement; k++)
{
HtmlElement image = null;
if (dynamicCaptcha) image = tab.FindElementByAttribute("table", "class", "rc-imageselect-table", "regexp", 0); 
else image = tab.FindElementByAttribute("img", "class", "rc-image-tile", "regexp", 0);
 
// если есть изображения
if (!image.IsVoid)
{
// получаем url изображения
if (!dynamicCaptcha) src = image.GetAttribute("src");
imageString = image.DrawToBitmap(!dynamicCaptcha);
timeout = false;
break;
}
 
System.Threading.Thread.Sleep(waitTime); // подождем загрузки элементов
if (k == (tryLoadElement - 1)) timeout = true;
}
};
 
// Распознавание
Action Recognize= () => {
project.SendInfoToLog("Распознавание", needShowMessages);
var answerString = ZennoPoster.CaptchaRecognition("CapMonster2.dll", imageString, String.Format("Task={0}&FullAnswer={1}&CapMonsterModule=ZennoLab.ReCaptcha2", task, fullAnswer));
var split = answerString.Split(new [] { "-|-" }, StringSplitOptions.RemoveEmptyEntries);
answer = split[0];
};
 
// Вводим ответ
Action InputAnswer= () => 
{
if (!String.IsNullOrEmpty(answer) && answer != "sorry")
{
        project.SendInfoToLog("Ввод ответа и проверка правильности", needShowMessages);
int count = 0;
 
        string[] answers;
if (answer.Contains(",")) 
answers = answer.Split(new [] { "," }, StringSplitOptions.RemoveEmptyEntries);
else 
{
answers = new string[answer.Length];
for (int i = 0; i < answer.Length; i++)
answers[i] = answer[i].ToString();
}
 
foreach (string c in answers)
{
if (fullAnswer)
if (count == 2) break;
 
int index = Convert.ToInt32(c) - 1;
HtmlElement he = tab.FindElementByAttribute("img", "class", "rc-image-tile", "regexp", index);
 
if (!he.IsVoid) 
{
he.Click(); //кликаем на картинку
System.Threading.Thread.Sleep(500);// подождем немного
}
if (fullAnswer) count++;
}
 
// ищем кнопку "Подтвердить"
HtmlElement apply = tab.FindElementById("recaptcha-verify-button");
if (!apply.IsVoid) apply.Click();
 
// проверим правильность ответа
CheckOK();
if (success) return;
 
// вводим оставшуюся часть ответа
if (fullAnswer)
{
for (int i = count; i < answer.Length; i++)
{
// снова ищем картинку
var testImage = tab.FindElementByAttribute("img", "class", "rc-image-tile", "regexp", 0);
if (testImage.IsVoid) break;
// получаем url изображения
var newSrc = testImage.GetAttribute("src");
// если изображение изменилось, то выходим
if (newSrc != src) break;
else changed = true;
// иначе продолжаем ввод
int index = Convert.ToInt32(answer[i].ToString()) - 1;
var he = tab.FindElementByAttribute("img", "class", "rc-image-tile", "regexp", index);
if (!he.IsVoid) 
{
he.Click();
System.Threading.Thread.Sleep(500); // подождем немного
if (!apply.IsVoid) apply.Click();
CheckOK();
if (success) return;
}
}
}
}
else answerIsEmpty = true;
};
 
//Вводим ответ
Action InputDynamicAnswer= () => 
{
project.SendInfoToLog("Ввод ответа динамической каптчи", needShowMessages);
 
string[] answers;
if (answer.Contains(",")) 
answers = answer.Split(new [] { "," }, StringSplitOptions.RemoveEmptyEntries);
else 
{
answers = new string[answer.Length];
for (int i = 0; i < answer.Length; i++)
answers[i] = answer[i].ToString();
}
 
foreach (string number in answers)
{
int index = Convert.ToInt32(number) - 1;
HtmlElement he = tab.FindElementByAttribute("img", "class", "rc-image-tile", "regexp", index);
if (he.IsVoid) he = tab.FindElementByAttribute("div", "class", "rc-image-tile-wrapper", "regexp", index);
if (!he.IsVoid) 
{
//кликаем на картинку
he.Click();
// подождём немного
System.Threading.Thread.Sleep(500);
}
}
 
// подождём еще немного
System.Threading.Thread.Sleep(waitTime*2);
};
 
//Вводим ответ
Action InputDynamicAnswer2= () => 
{
project.SendInfoToLog("Ввод ответа динамической каптчи", needShowMessages);
 
string[] answers = answer.Split(new [] { "," }, StringSplitOptions.RemoveEmptyEntries);
foreach (string number in answers)
{
int index = Convert.ToInt32(number) - 1;
HtmlElement he = tab.FindElementByAttribute("img", "class", "rc-image-tile", "regexp", index);
if (!he.IsVoid) 
{
//кликаем на картинку
he.Click();
// подождём немного
System.Threading.Thread.Sleep(500);
}
}
 
// подождём еще немного
System.Threading.Thread.Sleep(waitTime*2);
};
 
SearchReCaptcha2();
if (success)
return "ok";
 
if (timeout) throw new Exception("Вышло время ожидания загрузки элемента");
 
for (int i = 0; i < tryRecognize; i++)
{
project.SendInfoToLog(String.Format("Попытка №:{0}", i+1), needShowMessages);
 
InputNotBotText();
SearchTask();
if (timeout) break;
 
// дополнительная проверка
CheckOK();
if (success) return "ok";
 
int count = 0;
 
// если капча изменяемая
if (dynamicCaptcha)
{
while (count < dynamicImagesRecognizeAttempts)
{
if (count > 0)
System.Threading.Thread.Sleep(waitTime * 3); // подождём загрузки исчезающих изображений
 
SearchImage();
if (timeout) break;
Recognize();
if (!String.IsNullOrEmpty(answer) && answer != "sorry") InputDynamicAnswer();
else 
{
VerifyAnswer();
CheckOK();
if (!success) answerIsEmpty = true;
break;
}
count++;
}
}
else
{
if (notOneEnter)
{
while (notOneEnter && !dynamicCaptcha && count < dynamicImagesRecognizeAttempts)
{
SearchImage();
if (timeout) break;
Recognize();
if (!String.IsNullOrEmpty(answer) && answer != "sorry") InputDynamicAnswer2();
VerifyAnswer();
timeout = false;
if (success) break;
SearchTask();
if (timeout) break;
count++;
}
}
else
{
SearchImage();
if (timeout) break;
Recognize();
InputAnswer();
}
}
if (timeout) break;
 
if (!needToCheck) return "ok";
 
if (answerIsEmpty)
{
answerIsEmpty = false;
UpdateImage();
continue;
}
 
if (success) return "ok";
 
if (i != (tryRecognize - 1)) UpdateImage();
if (timeout) break;
}
 
if (timeout) throw new Exception("Вышло время ожидания загрузки элемента");
else throw new Exception("Не распознано. Закончились попытки распознать, прежде чем ответ был засчитан");
 
