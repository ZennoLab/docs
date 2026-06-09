https://docs.zennolab.com/zennodroid/API/FridaDevice

## Описание

## `IFridaDeviceAPI`

Интерфейс `IFridaDeviceAPI` предназначен для работы с инструментом динамического анализа **Frida** на Android-устройстве в среде ZennoDroid. Позволяет управлять Frida Server, подключаться к процессам, внедрять скрипты и контролировать их выполнение.

## Свойства

- **`string Id { get; }`**  
    Уникальный идентификатор устройства.
    
    **Возвращает:**  
    Строку с ID устройства (например, ADB serial).


---

- **`string Name { get; }`**  
    Имя устройства.
    
    **Возвращает:**  
    Человекочитаемое название устройства или эмулятора.

## Методы

- **`IFridaSessionAPI Attach(uint pid)`**  
    Подключается к уже запущенному процессу.
    
    **Параметры:**
    - `pid` — идентификатор процесса, к которому выполняется подключение.
    
    **Возвращает:**  
    Объект `IFridaSessionAPI`, представляющий активную сессию.
    

---

- **`void DetachAllSessions()`**  
    Отключает все активные Frida-сессии на устройстве.

---

- **`void DetachSessionByScriptName(string scriptName)`**  
    Отключает сессию, связанную с указанным скриптом.
    
    **Параметры:**
    - `scriptName` — имя скрипта, по которому производится поиск и отключение.

---

- **`void InstallAndRunServer()`**  
    Устанавливает (если необходимо) и запускает Frida Server на устройстве.

---

- **`void KillServer()`**  
    Останавливает Frida Server.

---

- **`void LoadScriptToApp(string packageName, string source)`**  
    Загружает и выполняет Frida-скрипт в указанном приложении.
    
    **Параметры:**
    - `packageName` — имя пакета приложения;
    - `source` — исходный код Frida-скрипта (JavaScript).

---

- **`void LoadScriptToFrontmost(string source)`**  
    Загружает и выполняет скрипт в текущем активном приложении.
    
    **Параметры:**
    - `source` — исходный код скрипта.

---

- **`uint Spawn(string packageName)`**  
    Запускает приложение в приостановленном состоянии (до выполнения `Resume`).
    
    **Параметры:**
    - `packageName` — имя пакета приложения.
    
    **Возвращает:**  
    `pid` созданного процесса.
    

---
- **`void Resume(uint pid)`**  
    Возобновляет выполнение ранее запущенного процесса.
    
    **Параметры:**
    - `pid` — идентификатор процесса.

---
### Пример.

```csharp
var source = project.Variables["script"].Value;
var device = instance.DroidInstance.FridaDevice;
device.InstallAndRunServer();
var pid = device.Spawn("com.android.settings");
var session = device.Attach(pid);

var script = session.CreateScript(source, "myScript");
script.Message += (o, e) => project.SendInfoToLog(e.Message);
script.Load();

device.Resume(pid);
```

Содержимое переменной `script` (выводит сообщение в лог):
```javascript
console.log('hello!')
```