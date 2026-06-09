## Описание

`IAppiumDriverAPI` предоставляет доступ к возможностям **Appium-драйвера** в ZennoDroid. Используется для поиска элементов интерфейса и взаимодействия с ними через стандартные механизмы автоматизации Android (UIAutomator, XPath и др.).
## Методы

- **`IAndroidElementAPI ActiveElement()`**  
    Возвращает текущий активный элемент.
    
    **Возвращает:**  
    Объект `IAndroidElementAPI`.
    

---

- **`IAndroidElementAPI FindElementByAccessibilityId(string id)`**  
    Находит элемент по Accessibility ID.
    
    **Параметры:**
    - `id` — значение `content-desc`.
    
    **Возвращает:**  
    Найденный элемент.
    

---

- **`IAndroidElementAPI FindElementByClassName(string className)`**  
    Находит элемент по имени класса.
    
    **Параметры:**
    - `className` — имя класса (например `android.widget.TextView`).
    
    **Возвращает:**  
    Элемент.
    

---

- **`IAndroidElementAPI FindElementById(string id)`**  
    Находит элемент по resource-id.
    
    **Параметры:**
    - `id` — идентификатор ресурса.
    
    **Возвращает:**  
    Элемент.
    

---

- **`IAndroidElementAPI FindElementByUiAutomator(string uiSelector)`**  
    Находит элемент через UIAutomator.
    
    **Параметры:**
    - `uiSelector` — строка селектора (например `new UiSelector().text("Login")`).
    
    **Возвращает:**  
    Элемент.
    

---

- **`IAndroidElementAPI FindElementByXPath(string xpath)`**  
    Находит элемент по XPath.
    
    **Параметры:**
    - `xpath` — XPath выражение.
    
    **Возвращает:**  
    Элемент.
    

---

- **`IAndroidElementAPI[] FindElementsByAccessibilityId(string id)`**  
    Находит все элементы по Accessibility ID.
    
    **Параметры:**
    - `id` — значение `content-desc`.
    
    **Возвращает:**  
    Массив элементов.
    

---

- **`IAndroidElementAPI[] FindElementsById(string id)`**  
    Находит все элементы по resource-id.
    
    **Параметры:**
    - `id` — идентификатор ресурса.
    
    **Возвращает:**  
    Массив элементов.
    

---

- **`IAndroidElementAPI[] FindElementsByClassName(string className)`**  
    Находит все элементы по классу.
    
    **Параметры:**
    - `className` — имя класса.
    
    **Возвращает:**  
    Массив элементов.
    

---

- **`IAndroidElementAPI[] FindElementsByUiAutomator(string uiSelector)`**  
    Находит элементы через UIAutomator.
    
    **Параметры:**
    - `uiSelector` — селектор.
    
    **Возвращает:**  
    Массив элементов.
    

---

- **`IAndroidElementAPI[] FindElementsByXPath(string xpath)`**  
    Находит элементы по XPath.
    
    **Параметры:**
    - `xpath` — XPath.
    
    **Возвращает:**  
    Массив элементов.
    

---

- **`void ScrollToElementByAccessibilityId(string id, int maxSwipes)`**  
    Прокручивает экран до элемента.
    
    **Параметры:**
    - `id` — Accessibility ID;
    - `maxSwipes` — максимальное количество свайпов.

---

- **`void ScrollToElementByClassName(string className, int maxSwipes)`**  
    Скролл до элемента по классу.
    
    **Параметры:**
    - `className` — класс;
    - `maxSwipes` — число свайпов.

---

- **`void ScrollToElementByUiAutomator(string uiSelector, int maxSwipes)`**  
    Скролл через UIAutomator.
    
    **Параметры:**
    - `uiSelector` — селектор;
    - `maxSwipes` — число свайпов.
___

- **`string GetScreenshot()`**  
    Делает скриншот текущего экрана устройства.  
    Возвращает изображение в виде строки (в формате Base64).

---
# **ПРОВЕРИТЬ!**
- **`void UpdateSettings(string key, object value)`**  
    Обновляет одно конкретное значение драйвера.
    
    **Параметры:**
    - `string key` — имя настройки (например, параметры Appium Settings API);
    - `object value` — новое значение настройки.

---
# **ПРОВЕРИТЬ!**
- **`void UpdateSettings(IEnumerable<KeyValuePair<string, object>> keyValuePairs)`**  
    Массовое обновление настроек драйвера.
    
    **Параметры:**
    - `keyValuePairs` — коллекция пар ключ-значение для обновления нескольких настроек за один вызов.