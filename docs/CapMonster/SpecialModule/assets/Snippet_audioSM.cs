// Main settings
 
// waiting timeout
var waitTime = 1000;
// attempts to load captcha
var tryLoadElement = 60;
// show recognizing progress messages
var needShowMessages = true;
// folder for saving audio files
var mainAudiofolderName = "sm_audio";
 
// Additional variables
var tab = instance.ActiveTab;
var timeout = false;
var file = string.Empty;
var answer = string.Empty;
var fileLoadingError = false;
var audioFolder = string.Format("{0}\\{1}\\{2}", project.Directory, mainAudiofolderName, Guid.NewGuid().ToString());
 
Action CheckFileDeleting= () => {
if (File.Exists(file)) File.Delete(file);
if (Directory.Exists(audioFolder))
{
// check directory is empty
if ((Directory.GetDirectories(audioFolder).Length + Directory.GetFiles(audioFolder).Length) == 0)
Directory.Delete(audioFolder);
}
};
 
Action CheckMediaError= () => {
if (tab.URL.Contains("api.solvemedia.com/media/media-error.gif"))
throw new Exception("Error loading media");
};
 
Action CheckTimeOut= () => {
if (timeout) 
throw new Exception("Timeout of loading element has been exceeded");
};
 
Action OpenAudioForm = () => {
project.SendInfoToLog("Opening the form with audio task", needShowMessages);
for (int k = 0; k < tryLoadElement; k++)
{
var audioButton = tab.FindElementByAttribute("a", "id", "adcopy-link-audio", "text", 0);
if (!audioButton.IsVoid)
{
audioButton.Click();
break;
}
System.Threading.Thread.Sleep(waitTime);
CheckMediaError();
if (k == (tryLoadElement - 1)) timeout = true;
}
CheckTimeOut();
};
 
Action GetAudioFile= () => {
for (int k = 0; k < tryLoadElement; k++)
{
var audioButton = tab.FindElementByAttribute("a", "innerhtml", "Download mp3 file", "text", 0);
if (!audioButton.IsVoid)
{
project.SendInfoToLog("Downloading audio file", needShowMessages);
audioButton.Click();
break;
}
else System.Threading.Thread.Sleep(waitTime);
CheckMediaError();
if (k == (tryLoadElement - 1)) timeout = true;
}
CheckTimeOut();
};
 
Action Recognize= () => {
// waiting loading file
tab.WaitDownloading();
CheckMediaError();
file = audioFolder + "\\media.mp3";
for (int k = 0; k < tryLoadElement; k++)
{
if (File.Exists(file)) break;
else System.Threading.Thread.Sleep(waitTime);
if (k == (tryLoadElement - 1)) timeout = true;
}
CheckTimeOut();
 
// getting audio bytes
var bytes = File.ReadAllBytes(file);
if (bytes.Length < 1024) throw new Exception("Error loading file");
 
project.SendInfoToLog("Recognizing", needShowMessages);
string str = Convert.ToBase64String(bytes);
var rc = ZennoPoster.CaptchaRecognition("CapMonster2.dll", str, "CapMonsterModule=ZennoLab.AudioSolveMedia&ParallelMode=true");
answer = rc.Split(new [] {"-|-"}, StringSplitOptions.RemoveEmptyEntries)[0];
};
 
Action InputAnswer= () => {
if (!String.IsNullOrEmpty(answer) && answer != "sorry")
{
project.SendInfoToLog("Inserting answer", needShowMessages);
HtmlElement audioAnswerInput = tab.FindElementByAttribute("input:text", "id", "adcopy_response", "text", 0);
if (!audioAnswerInput.IsVoid)
{
audioAnswerInput.SetValue(answer, "None", false);
}
System.Threading.Thread.Sleep(waitTime);
}
else throw new Exception("Answer not received");
};
 
// Recognizing captcha
try
{
instance.DownloadsPath = audioFolder;
OpenAudioForm();
GetAudioFile();
Recognize();
InputAnswer();
return "ok";
}
finally
{
CheckFileDeleting();
}