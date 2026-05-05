https://docs.zennolab.com/zennodroid/API/AppiumDriver

## Методы

- **`string GetScreenshot()`**  
    Делает скриншот текущего экрана устройства.  
    Возвращает изображение в виде строки (в формате Base64).

---

- **`void UpdateSettings(string key, object value)`**  
    Обновляет одно конкретное значение драйвера.
    
    **Параметры:**
    - `string key` — имя настройки (например, параметры Appium Settings API);
    - `object value` — новое значение настройки.
### Пример.
```csharp
var driver = instance.DroidInstance.AppiumDriver;

driver.UpdateSettings("allowInvisibleElements", false);
```
---

- **`void UpdateSettings(IEnumerable<KeyValuePair<string, object>> keyValuePairs)`**  
    Массовое обновление настроек драйвера.
    
    **Параметры:**
    - `keyValuePairs` — коллекция пар ключ-значение для обновления нескольких настроек за один вызов.
### Пример.
```csharp
var driver = instance.DroidInstance.AppiumDriver;

var settings = new KeyValuePair<string, object>[]
{
	new KeyValuePair<string, object>("allowInvisibleViewport", true),
	new KeyValuePair<string, object>("allowInvisibleElements", false),
	new KeyValuePair<string, object>("ignoreUnimportantViews", false),
};

driver.UpdateSettings(settings);
```