//Main settings
 
// waiting timeout
var waitTime = 1000;
// recognition attempts
var tryRecognize = 10;
// attempts to load element
var tryLoadElement = 60;
// show recognizing progress messages
var needShowMessages = false;
// need to check answer's correctness
var needToCheck = true;
 
// Additional variables
 
// tab
var tab = instance.ActiveTab;
// congratulations, you are not robot
var success = false;
// audio file
var file = string.Empty;
// file has been deleted
var fileDeleted = true;
// answer to audio captcha
var answer = string.Empty;
// ReCaptcha 1
var isRecaptcha1 = false;
// timeout exceeded 
var timeout = false;
// error loading file
var fileLoadingError = false;
var usedURLs = new List<string>();
var isFirstAttempt = true;
var coincidenceReCaptcha2Index = -1;
 
// Searching audio button element
Action TryOpenAudioForm = () => {
for (int k = 0; k < tryLoadElement; k++)
{
var audioButton = tab.FindElementById("recaptcha-audio-button");
// if found
if (!audioButton.IsVoid)
{
// press button
audioButton.Click();
tab.WaitDownloading();
break;
}
System.Threading.Thread.Sleep(waitTime); // pause
if (k == (tryLoadElement - 1)) timeout = true;
}
System.Threading.Thread.Sleep(waitTime); // pause
};
 
Action OpenAudioTask= () => {
project.SendInfoToLog("Loading audio task", needShowMessages);
//checking task type in the form
var task = tab.FindElementByAttribute("div", "class", "rc-imageselect-desc-wrapper", "regexp", 0);
if (!task.IsVoid) TryOpenAudioForm(); // graphic task has been found, then loading audio
};
 
Action VisibleIndexReCaptchaDefinition= () => {
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
 
// Identifying ReCaptcha version
Action NotRobotClick= () => {
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
System.Threading.Thread.Sleep(waitTime); // подождём немного
 
// если ввод каптчи не требуется
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
 
// Форма существует
var loadedForm = tab.FindElementByAttribute("div", "class", "primary-controls", "regexp", 0);
if (!loadedForm.IsVoid)
break;
 
// checking if ReCaptcha 1 audio button exists
HtmlElement r1 = tab.FindElementById("recaptcha_switch_audio");
if (!r1.IsVoid)
{
r1.Click();
isRecaptcha1 = true;
break;
}
 
// подождём загрузки элементов
System.Threading.Thread.Sleep(waitTime);
if (k == (tryLoadElement - 1)) timeout = true;
}
};
 
// Downloading mp3 file
Action GetAudioFile= () => {
 
var href = String.Empty;
 
// getting audio task
for (int k = 0; k < tryLoadElement; k++)
{
if (isRecaptcha1)
{
var audioChallenge = tab.FindElementByAttribute("a", "id", "recaptcha_audio_download", "text", 0);
// if found, getting link to audio file
if (!audioChallenge.IsVoid)
{
href = audioChallenge.GetAttribute("href");
break;
}
else System.Threading.Thread.Sleep(waitTime);
}
else
{
if (isFirstAttempt)
{
isFirstAttempt = false;
}
else
{
var reload = tab.FindElementById("recaptcha-reload-button");
if (!reload.IsVoid)
{
reload.Click();
tab.WaitDownloading();
}
}
 
var audioChallenge = tab.FindElementByAttribute("a", "class", "rc-audiochallenge-tdownload-link", "regexp", 0);
// if found, getting link to audio file
if (!audioChallenge.IsVoid)
{
href = audioChallenge.GetAttribute("href");
break;
}
System.Threading.Thread.Sleep(waitTime); // waiting when form will be loaded
}
if (k == (tryLoadElement - 1)) timeout = true;
}
 
foreach (var usedUrl in usedURLs)
{
if (usedUrl.Contains(href))
throw new Exception("new audio file is absent");
}
usedURLs.Add(href);
 
project.SendInfoToLog("Downloading audio file", needShowMessages);
try
{
var proxy = instance.GetProxy();
var respType = ZennoLab.InterfacesLibrary.Enums.Http.ResponceType.File;
var timeoutRequest = 30000;
var cookies = instance.GetCookie("google.com", true);
var userAgent = project.Profile.UserAgent;
var maxRedirectCount = 1;
var downloadPath = project.Directory + "\\audiofiles";
file = ZennoPoster.HttpGet(href, proxy, "UTF8", respType, timeoutRequest, cookies, userAgent, false, maxRedirectCount, null, downloadPath);
fileDeleted = false;
}
catch (Exception ex)
{
throw new Exception("Failed to download audio file");
}
};
 
Action Recognize= () => {
project.SendInfoToLog("Recognizing", needShowMessages);
try 
{
if (!File.Exists(file)) 
{
fileLoadingError = true;
fileDeleted = true;
return;
}
var bytes = File.ReadAllBytes(file);
if (bytes.Length < 1024)
{
fileLoadingError = true;
return;
}
 
var hexStringBuilder = new StringBuilder(2);
for (var i = 0; i < 2; i++)
hexStringBuilder.AppendFormat("{0:x2}", bytes[i]);
 
var header_prefix = hexStringBuilder.ToString();
if (!header_prefix.Equals("ffe3"))
{
fileLoadingError = true;
                        throw new Exception("Your IP was banned!");
return;
}
 
string str = Convert.ToBase64String(bytes);
var rc = ZennoPoster.CaptchaRecognition("CapMonster2.dll", str, "CapMonsterModule=ZennoLab.AudioReCaptcha&ParallelMode=true");
var split = rc.Split(new [] {"-|-"}, StringSplitOptions.RemoveEmptyEntries);
if (split.Length > 0)
answer = split[0];
        if (answer.Contains("133193320491090004119440")) throw new Exception("Your IP was banned!");
} 
finally 
{
    if (File.Exists(file)) 
    {
File.Delete(file);
fileDeleted = true;
        }
}
};
 
Action InputAnswer= () => {
if (!String.IsNullOrEmpty(answer) && answer != "sorry")
{
project.SendInfoToLog("Inserting answer", needShowMessages);
HtmlElement audioAnswerInput = null;
// searching answer input field
if (isRecaptcha1)
{
audioAnswerInput = tab.FindElementByAttribute("input:text", "id", "recaptcha_response_field", "text", 0);
}
else
{
audioAnswerInput = tab.FindElementByAttribute("input:text", "id", "audio-response", "regexp", 0);
}
 
// if found
if (!audioAnswerInput.IsVoid)
{
// inserting answer
audioAnswerInput.SetValue(answer, "None", false);
}
 
// pause
System.Threading.Thread.Sleep(waitTime);
}
else throw new Exception("Answer not received");
};
 
// Verifying
Action SubmitAnswer= () => {
// searching "Verify" button
HtmlElement apply = tab.FindElementById("recaptcha-verify-button");
 
if (!apply.IsVoid) apply.Click();
tab.WaitDownloading();
 
// pause
System.Threading.Thread.Sleep(waitTime);
};
 
// Checking if answer is correct for ReCaptcha 2
Action Check= () => {
project.SendInfoToLog("Verifying answer", needShowMessages);
tab.WaitDownloading();
 
for (int k = 0; k < tryLoadElement; k++)
{
System.Threading.Thread.Sleep(waitTime);
 
var checkAnswer = tab.FindElementByAttribute("div", "class", "recaptcha-checkbox-checkmark", "regexp", coincidenceReCaptcha2Index);
 
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
 
if (checkAnswer.IsVoid)
break;
}
 
var recaptchas = tab.FindElementsByAttribute("div", "class", "recaptcha-checkbox-checkmark", "regexp");
if (recaptchas.Count == 0)
{
success = true;
return;
}
 
if (!checkAnswer.IsVoid)
{
if (checkAnswer.OuterHtml.Contains("style=\"\""))
success = true;
else
success = false;
return;
}
if (k == (tryLoadElement - 1)) timeout = true;
}
};
 
// Checking "I'm not robot" checkbox
NotRobotClick();
if (success) return "ok";
 
// trying to recognize ReCaptcha
for (int i = 0; i < tryRecognize; i++)
{
if (!isRecaptcha1) OpenAudioTask();
if (timeout) break;
GetAudioFile();
if (timeout) break;
 
Recognize();
if (fileLoadingError) 
{
fileLoadingError = false;
continue;
}
if (timeout) break;
InputAnswer();
if (timeout) break;
if (!fileDeleted)
{
if (File.Exists(file))
{
File.Delete(file);
fileDeleted = true;
}
}
 
if (isRecaptcha1) return "ok";
SubmitAnswer();
 
if (!needToCheck) return "ok";
 
if (timeout) break;
Check();
if (success) return "ok";
}
 
if (timeout) throw new Exception("Loading element timeout is exceeded");
else throw new Exception("Not recognized, Attempts to recognize were ended, before the response was received");