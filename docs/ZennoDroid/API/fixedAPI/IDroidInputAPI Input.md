## Описание
`IDroidInputAPI` предназначен для эмуляции пользовательского ввода на Android-устройстве в ZennoDroid. Позволяет выполнять касания, свайпы, ввод текста, работу с буфером обмена и системными событиями.

## ## Методы

- **`void ClearText()`**  
    Очищает текст в текущем активном поле ввода.

---

- **`string GetClipboard()`**  
    Получает содержимое буфера обмена.
    
    **Возвращает:**  
    Строку из буфера обмена.
    

---

- **`void LongTap(int x, int y)`**  
    Выполняет долгое нажатие.
    
    **Параметры:**
    - `x` — координата по X;
    - `y` — координата по Y.

---

- **`void LongTapAndSwipe(int x1, int y1, int x2, int y2)`**  
    Долгое нажатие с последующим свайпом.
    
    **Параметры:**
    - `x1`, `y1` — начальная точка;
    - `x2`, `y2` — конечная точка.

---

- **`void LongTapAndSwipe(int x1, int y1, int x2, int y2, int duration)`**  
    Долгое нажатие с последующим свайпом и длительностью.
    
    **Параметры:**
    - `x1`, `y1` — старт;
    - `x2`, `y2` — конец;
    - `duration` — длительность в миллисекундах.

---

- **`void LongTapAndSwipeCurved(int x1, int y1, int x2, int y2)`**  
    Свайп по кривой.
    
    **Параметры:**
    - `x1`, `y1` — старт;
    - `x2`, `y2` — конец.

---

- **`void LongTapAndSwipeCurved(int x1, int y1, int x2, int y2, int duration)`**  
    Кривой свайп с длительностью.
    
    **Параметры:**
    - `x1`, `y1` — старт;
    - `x2`, `y2` — конец;
    - `duration` — длительность.

---

- **`void LongTapAndSwipeCurved(int x1, int y1, double bending, int x2, int y2)`**  
    Кривой свайп с коэффициентом изгиба.
    
    **Параметры:**
    - `x1`, `y1` — старт;
    - `bending` — степень изгиба;
    - `x2`, `y2` — конец.

---

- **`void LongTapAndSwipeCurved(int x1, int y1, double bending, int x2, int y2, int duration)`**  
    Кривой свайп с изгибом и длительностью.
    
    **Параметры:**
    - `x1`, `y1` — старт;
    - `bending` — изгиб;
    - `x2`, `y2` — конец;
    - `duration` — длительность.

---

- **`void LongTapAndSwipeCurved(int x1, int y1, int xPivot, int yPivot, int x2, int y2)`**  
    Кривой свайп через точку.
    
    **Параметры:**
    - `x1`, `y1` — старт;
    - `xPivot`, `yPivot` — промежуточная точка;
    - `x2`, `y2` — конец.

---

- **`void LongTapAndSwipeCurved(int x1, int y1, int xPivot, int yPivot, int x2, int y2, int duration)`**  
    Кривой свайп через точку с длительностью.
    
    **Параметры:**
    - `x1`, `y1` — старт;
    - `xPivot`, `yPivot` — промежуточная точка;
    - `x2`, `y2` — конец;
    - `duration` — длительность.

---

- **`void SendKeyCode(int keyCode)`**  
    Отправляет код клавиши.
    
    **Параметры:**
    - `keyCode` — числовой код клавиши.

---

- **`void SendKeyCode(KeyCode keyCode)`**  
    Отправляет клавишу через enum.
    
    **Параметры:**
    - `keyCode` — значение перечисления `KeyCode`.

---

- **`void SendSmsMessage(string phone, string message)`**  
    Эмуляция получения SMS на устройство.
    
    **Параметры:**
    - `phone` — номер телефона;
    - `message` — текст сообщения.

---

- **`void SendText(string text)`**  
    Вводит текст.
    
    **Параметры:**
    - `text` — строка для ввода.

---

- **`void SendText(string text, int latency)`**  
    Вводит текст с задержкой.
    
    **Параметры:**
    - `text` — текст;
    - `latency` — задержка между символами (мс).

---

- **`void SetClipboard(string text)`**  
    Устанавливает содержимое буфера обмена.
    
    **Параметры:**
    - `text` — строка.

___

- **`string Shell(string command)`**  
    Выполняет shell-команду на устройстве.
    
    **Параметры:**
    - `command` — команда для выполнения.
    
    **Возвращает:**  
    Результат выполнения команды.


---

- **`string Shell(string command, int timeout)`**  
    Выполняет команду с таймаутом.
    
    **Параметры:**
    - `command` — команда;
    - `timeout` — время ожидания (мс).
    
    **Возвращает:**  
    Результат выполнения.
    

---

- **`string Shell(string command, int timeout, bool checkconnect)`**  
    Выполняет команду с проверкой соединения.
    
    **Параметры:**
    - `command` — команда;
    - `timeout` — таймаут;
    - `checkconnect` — проверять подключение.
    
    **Возвращает:**  
    Результат.
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

___

- **`void Swipe(int x1, int y1, int x2, int y2)`**  
    Выполняет свайп.
    
    **Параметры:**
    - `x1`, `y1` — начальная точка;
    - `x2`, `y2` — конечная точка.

---

- **`void Swipe(int x1, int y1, int x2, int y2, int duration)`**  
    Свайп с длительностью.
    
    **Параметры:**
    - `x1`, `y1` — старт;
    - `x2`, `y2` — конец;
    - `duration` — длительность (мс).

---

- **`void SwipeCurved(int x1, int y1, int x2, int y2)`**  
    Свайп по кривой.
    
    **Параметры:**
    - `x1`, `y1` — старт;
    - `x2`, `y2` — конец.

---

- **`void SwipeCurved(int x1, int y1, int x2, int y2, int duration)`**  
    Кривой свайп с длительностью.
    
    **Параметры:**
    - `x1`, `y1` — старт;
    - `x2`, `y2` — конец;
    - `duration` — длительность.

---

- **`void SwipeCurved(int x1, int y1, double bending, int x2, int y2)`**  
    Кривой свайп с изгибом.
    
    **Параметры:**
    - `x1`, `y1` — старт;
    - `bending` — коэффициент изгиба;
    - `x2`, `y2` — конец.

---

- **`void SwipeCurved(int x1, int y1, double bending, int x2, int y2, int duration)`**  
    Кривой свайп с изгибом и длительностью.
    
    **Параметры:**
    - `x1`, `y1` — старт;
    - `bending` — изгиб;
    - `x2`, `y2` — конец;
    - `duration` — длительность.

---

- **`void SwipeCurved(int x1, int y1, int xPivot, int yPivot, int x2, int y2)`**  
    Кривой свайп через точку.
    
    **Параметры:**
    - `x1`, `y1` — старт;
    - `xPivot`, `yPivot` — промежуточная точка;
    - `x2`, `y2` — конец.

---

- **`void SwipeCurved(int x1, int y1, int xPivot, int yPivot, int x2, int y2, int duration)`**  
    Кривой свайп через точку с длительностью.
    
    **Параметры:**
    - `x1`, `y1` — старт;
    - `xPivot`, `yPivot` — точка;
    - `x2`, `y2` — конец;
    - `duration` — длительность.

---

- **`void Tap(int x, int y)`**  
    Выполняет одиночный тап.
    
    **Параметры:**
    - `x`, `y` — координаты.

---

- **`void Tap(int x, int y, int duration)`**  
    Тап с длительностью.
    
    **Параметры:**
    - `x`, `y` — координаты;
    - `duration` — длительность нажатия.

---

- **`void Touch(int xMin, int yMin, int xMax, int yMax, bool longPress, string clickDistributionType)`**  
    Выполняет касание в области.
    
    **Параметры:**
    - `xMin`, `yMin` — верхний левый угол;
    - `xMax`, `yMax` — нижний правый угол;
    - `longPress` — использовать долгое нажатие;
    - `clickDistributionType` — тип распределения точки клика (например, случайный).

---

- **`void ZoomIn()`**  
    Выполняет увеличение (zoom in).

---

- **`void ZoomIn(int centerX, int centerY, double ratio)`**  
    Увеличение с параметрами.
    
    **Параметры:**
    - `centerX`, `centerY` — центр;
    - `ratio` — коэффициент увеличения.

---

- **`void ZoomOut()`**  
    Выполняет уменьшение (zoom out).

---

- **`void ZoomOut(int centerX, int centerY, double ratio)`**  
    Уменьшение с параметрами.
    
    **Параметры:**
    - `centerX`, `centerY` — центр;
    - `ratio` — коэффициент.