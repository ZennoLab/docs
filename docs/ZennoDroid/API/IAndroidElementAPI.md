**[https://docs.zennolab.com/zennodroid/API/Element](https://docs.zennolab.com/zennodroid/API/Element)**

### Свойства

- **`string Id { get; }`**  
    Уникальный идентификатор элемента (GUID).
- **`string Text { get; }`**  
    Текстовое содержимое элемента.
- **`bool IsDisplayed { get; }`**  
    Указывает, отображается ли элемент на экране в данный момент.
- **`Rectangle Rectangle { get; }`**  
    Геометрия элемента (позиция и размер) в координатах экрана.

### Пример.
```csharp
var driver = instance.DroidInstance.AppiumDriver;

var de = driver.FindElementByXPath("//*[@text=\"Display\"]"); // Найти элемент по xPath
if (de == null)
   throw new Exception("Элемент не найден");

string id = de.Id; // Получить значение свойства Id
string text = de.Text; // Получить значение свойства Text
bool isDisplayed = de.IsDisplayed; // // Получить значение свойства IsDisplayed
Rectangle rectangle = de.Rectangle; // // Получить значение свойства Rectangle
```

## Методы

- **`string GetAttribute(string name)`**  
    Возвращает значение указанного атрибута элемента (например: `content-desc`, `class`, `checked` и др.).

- **`bool GetBooleanAttribute(string name)`**  
    Возвращает логическое значение атрибута (например: `enabled`, `clickable`, `checked`).

- **`string GetScreenshot()`**  
    Делает скриншот области, занимаемой элементом и возвращает его в виде строки Base64.