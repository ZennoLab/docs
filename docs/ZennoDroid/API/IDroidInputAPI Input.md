https://docs.zennolab.com/zennodroid/API/Input

## Методы

- **`void LongTapAndSwipeCurved(int x1, int y1, int x2, int y2)`**  
    Выполняет долгий тап в точке `(x1, y1)` и свайп к `(x2, y2)` по кривой.

---

- **`void LongTapAndSwipeCurved(int x1, int y1, int x2, int y2, int duration)`**  
    То же самое, но с управлением длительностью жеста.
    
    **Параметры:**
    - `duration` — длительность свайпа в миллисекундах.

---

- **`void LongTapAndSwipeCurved(int x1, int y1, double bending, int x2, int y2)`**  
    Добавляет контроль степени кривизны траектории.
    
    **Параметры:**
    - `bending` — коэффициент изгиба (чем больше значение, тем сильнее отклонение от прямой).

---

- **`void LongTapAndSwipeCurved(int x1, int y1, double bending, int x2, int y2, int duration)`**  
    Добавляет контроль степени кривизны траектории с указанием длительности.
    
    **Параметры:**
    - `bending` — коэффициент изгиба (чем больше значение, тем сильнее отклонение от прямой).
    - `duration` — длительности.

---


- **`void LongTapAndSwipeCurved(int x1, int y1, int xPivot, int yPivot, int x2, int y2)`**  
    Выполняет свайп по кривой, проходящей через заданную промежуточную точку (pivot).
    
    **Параметры:**
    - `xPivot`, `yPivot` — координаты контрольной точки кривой.

---

- **`void LongTapAndSwipeCurved(int x1, int y1, int xPivot, int yPivot, int x2, int y2, int duration)`**  
    Выполняет свайп по кривой, проходящей через заданную промежуточную точку (pivot) с управлением длительностью.
    
    **Параметры:**
    - `xPivot`, `yPivot` — координаты контрольной точки кривой.
    - `duration` — длительности.

___

- **`string RootShell(string command)`**  
    Выполняет shell-команду с root-доступом.
    
    **Параметры:**
    - `command` — команда для выполнения (например: `pm list packages`, `ls /data/data`).
    
    **Возвращает:**  
    Результат выполнения команды (stdout) в виде строки.
    

---

- **`string RootShell(string command, int timeout)`**  
    Выполняет команду с ограничением по времени.
    
    **Параметры:**
    
    - `command` — команда;
    - `timeout` — максимальное время выполнения в миллисекундах.

---


- **`string RootShell(string command, int timeout, bool checkconnect)`**  
    Расширенный вариант с проверкой соединения с устройством.
    
    **Параметры:**
    
    - `command` — команда;
    - `timeout` — таймаут выполнения;
    - `checkconnect` — проверять ли подключение к устройству перед выполнением.

___

- **`void FingerDown(int x, int y)`**  
    Эмулирует касание экрана (палец опускается) в точке `(x, y)`.

---

- **`void FingerDown(int x, int y, int fingerId)`**  
    То же самое, но с указанием идентификатора пальца.
    
    **Параметры:**
    - `fingerId` — ID пальца (используется для мультитача).

---

- **`void FingerMove(int x, int y)`**  
    Перемещает активный палец в новую точку.

---

- **`void FingerMove(int x, int y, int fingerId)`**  
    Перемещает конкретный палец.
    
    **Параметры:**
    - `fingerId` — ID пальца (используется для мультитача).

---

- **`void FingerUp(int x, int y)`**  
    Убирает палец с экрана (завершает касание).

---

- **`void FingerUp(int x, int y, int fingerId)`**  
    Завершает касание для конкретного пальца.
    
    **Параметры:**
    - `fingerId` — ID пальца (используется для мультитача).

---

- **`void FreeMove(string json, double speed)`**  
    Выполняет пользовательский жест по заданной траектории.
    
    **Параметры:**
    - `json` — JSON-описание траектории движения (координаты, точки, возможно временные интервалы);
    - `speed` — скорость выполнения жеста.