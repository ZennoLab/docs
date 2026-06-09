**IDroidActionEmulatorAPI: IDroidActionAPI**
ссылки нет.

## Описание
### `IDroidActionEmulatorAPI : IDroidActionAPI`

Интерфейс `IDroidActionEmulatorAPI` расширяет базовый `IDroidActionAPI` и предоставляет методы для управления эмуляторами **MEmu** и **LDPlayer** в ZennoDroid. Позволяет создавать, клонировать, импортировать, удалять и настраивать виртуальные устройства.

### Свойство

- **`IDroidActionAPI Action`**  
    Доступ к базовым действиям с устройством (унаследованный функционал через `IDroidActionAPI`).

### Методы

- **`int Clone()`**  
    Создаёт копию текущего эмулятора.  
    **Возвращает:** индекс нового эмулятора.

---

- **`int Create(string version)`**  
    Создаёт новый эмулятор с указанной версией Android.
    
    **Параметры:**
    - `version` — версия Android  
    Возможные значения для эмулятора MEmu:  
        - `"71" - Android 7.1(x86)`  
        - `"76" - Android 7.1(x64)`  
        - `"96" - Android 9.0(x64)`  
        - `"120" - Android 12.0(x64)`  
        
    LDPlayer всегда создает эмулятор с Android 9.
    
    **Возвращает:** индекс созданного эмулятора.
    
### Пример.
```csharp
var droid = instance.DroidInstance as IDroidInstanceEmulatorAPI;
var index = droid.Action.Create("96");
```

---

- **`int Import(string path)`**  
    Импортирует эмулятор из файла.
    
    **Параметры:**
    - `path` — путь к файлу/архиву эмулятора.
    
    **Возвращает:** индекс импортированного эмулятора.
    
    Формат файла бэкапа эмулятора: MEmu:`*.ova` LDPlayer:`*.ldbk`
---

- **`void Export(string path)`**  
    Экспортирует текущий эмулятор в файл.
    
    **Параметры:**
    - `path` — путь для сохранения.

    Формат файла бэкапа эмулятора: MEmu:`*.ova` LDPlayer:`*.ldbk`
---

- **`void DeleteByIndex(int index)`**  
    Удаляет эмулятор по индексу.

- **`void DeleteByName(string name)`**  
    Удаляет эмулятор по имени.

- **`void DeleteByTitle(string title)`**  
    Удаляет эмулятор по отображаемому названию.

---

- **`void FactoryReset(bool resetSystem)`**  
    Выполняет сброс эмулятора к заводским настройкам.
    
    **Параметры:**
    - `resetSystem` — если `true`, выполняется полный сброс с системными данными;  
        если `false` — сбрасываются только пользовательские данные.

---

- **`void Rename(int index, string title)`**  
    Переименовывает эмулятор по индексу.

- **`void Rename(string name, string title)`**  
    Переименовывает эмулятор по имени.

- **`void RenameTo(string title)`**  
    Переименовывает текущий эмулятор.