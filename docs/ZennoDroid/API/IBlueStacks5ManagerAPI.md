## Описание

`IBlueStacks5ManagerAPI` предназначен для управления экземплярами (инстансами) эмулятора **BlueStacks 5** через менеджер. Позволяет создавать и удалять эмуляторы, управлять службой менеджера и работать с именами инстансов.

## Конструктор
- **`BlueStacks5ManagerA(string oem)`**  
    Инициализирует новый экземпляр менеджера для управления инстансами BlueStacks 5.
    
    **Параметры:**
    - `oem` — строка, идентифицирующая производителя/версию BlueStacks
        - nxt: стандартная версия
        - nxt_cn: версия BlueStacks5 для Китая
        - msi5: версия BlueStacks5 от MSI (MSI App Player 5)

### Пример.
```csharp
var name = new BlueStacks5Manager("nxt").Create("Rvc64", 
	cpus:2, 
	ram:2048,
	graphicEngine:"aga",
	graphicRenderer:"dx",
	deviceProfile:"xitp", 
	abiList:"x86,x64,arm,arm64");
```          
## Методы

- **`string Create(string imageName, int cpus, int ram, string graphicEngine, string graphicRenderer, string deviceProfile, string abiList)`**  
    Создаёт новый экземпляр эмулятора с заданными параметрами.
    
    **Параметры:**
    
    - `imageName` — базовый образ/шаблон эмулятора
        - Nougat32: Android 7.1(x86)
        - Nougat64: Android 7.1(x64)
        - Pie64: Android 9.0(x64)
        - Rvc64: Android 11.0(x64)
        - Tiramisu64: Android 13.0(x64)
    - `cpus` — количество выделенных CPU;
    - `ram` — объём оперативной памяти (в МБ);
    - `graphicEngine` — графический движок (Только для Android 7)
        - aga: Compatibility
        - pga: Performance     
    - `graphicRenderer` — тип рендера
        - gl: OpenGL
        - dx: DirectX
        - vlcn: Vulkan
    - `deviceProfile` — профиль устройства
        - rogt: Asus ROG 2
        - ptxg: Google Pixel 2XL
        - optp: OnePlus 10 Pro
        - opet: OnePlus 8T
        - anfg: Samsung Galaxy A90 5g
        - smtn: Samsung Galaxy S10
        - stfg: Samsung Galaxy S10 5g
        - stul: Samsung Galaxy S20 Ultra
        - stwp: Samsung Galaxy S20+
        - stou: Samsung Galaxy S21 Ultra
        - sstt: Samsung Galaxy S22 
        - sttu: Samsung Galaxy S22 Ultra
        - xitp: Xiaomi 11T Pro

    - `abiList` — список поддерживаемых ABI ("x86,x64,arm,arm64").
    
    **Возвращает:**  
    Имя созданного инстанса.

---

- **`void DeleteByName(string name)`**  
    Удаляет экземпляр эмулятора по имени.
    
    **Параметры:**
    - `name` — имя инстанса.

---

- **`void StartManager()`**  
    Запускает менеджер BlueStacks (службу управления инстансами).

---

- **`void StopManager()`**  
    Останавливает менеджер BlueStacks.

---

- **`string TitleToNameConverter(string title)`**  
    Преобразует отображаемое название (title) эмулятора в его системное имя.
    
    **Параметры:**
    - `title` — отображаемое имя (как в интерфейсе BlueStacks).
    
    **Возвращает:**  
    Внутреннее имя инстанса, используемое системой.

### Важные замечания

- Перед созданием/удалением инстансов рекомендуется, чтобы менеджер был запущен (`StartManager()`).
- Параметры `cpus` и `ram` должны соответствовать возможностям хоста.
- Некорректные значения графики могут привести к нестабильной работе.
- Используется совместно с `IBlueStacks5API` для полного цикла: создание → запуск → автоматизация → удаление.