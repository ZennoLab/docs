ссылки нет.

## Описание

## `IDroidScreenAPI`

Интерфейс `IDroidScreenAPI` предоставляет методы для анализа экрана устройства: поиск изображений, пикселей, получение скриншотов и управление захватом экрана.

## Методы:


- **`Rectangle FindImage(string imageHash, Rectangle[] rectangles, int confidenceInterval)`**  
    Выполняет поиск изображения по хэшу в указанных областях экрана.
    
    **Параметры:**
    - `imageHash` — хэш изображения, с которым производится сравнение;
    - `rectangles` — массив областей (`Rectangle`), в которых выполняется поиск;
    - `confidenceInterval` — точность совпадения (0–100, где больше — строже совпадение).
    
    **Возвращает:**  
    `Rectangle` — область найденного изображения.
    

---

- **`Rectangle FindImage(string imageHash, Rectangle[] rectangles, int confidenceInterval, int searchTime)`**  
    Выполняет поиск изображения с ограничением по времени.
    
    **Параметры:**
    - `imageHash` — хэш изображения;
    - `rectangles` — области поиска;
    - `confidenceInterval` — точность совпадения;
    - `searchTime` — максимальное время поиска в миллисекундах.
    
    **Возвращает:**  
    `Rectangle` — найденная область.
    

---

- **`Rectangle FindImage(string[] imageHashes, Rectangle[] rectangles, int confidenceInterval)`**  
    Выполняет поиск одного из нескольких изображений.
    
    **Параметры:**
    - `imageHashes` — массив хэшей изображений;
    - `rectangles` — области поиска;
    - `confidenceInterval` — точность совпадения.
    
    **Возвращает:**  
    `Rectangle` — область первого найденного изображения.
    

---

- **`Rectangle FindImage(string[] imageHashes, Rectangle[] rectangles, int confidenceInterval, int searchTime)`**  
    Поиск одного из нескольких изображений с ограничением времени.
    
    **Параметры:**
    - `imageHashes` — массив хэшей;
    - `rectangles` — области поиска;
    - `confidenceInterval` — точность совпадения;
    - `searchTime` — время поиска в миллисекундах.
    
    **Возвращает:**  
    `Rectangle` — найденная область.
    

---

- **`Point FindPixel(Color color, Rectangle[] rectangles, int variation)`**  
    Ищет пиксель заданного цвета.
    
    **Параметры:**
    - `color` — искомый цвет (`Color`);
    - `rectangles` — области поиска;
    - `variation` — допустимое отклонение цвета.
    
    **Возвращает:**  
    `Point` — координаты найденного пикселя.
    

---

- **`Point FindPixel(Color color, Rectangle[] rectangles, int variation, int searchTime)`**  
    Поиск пикселя с ограничением времени.
    
    **Параметры:**
    - `color` — цвет;
    - `rectangles` — области поиска;
    - `variation` — отклонение цвета;
    - `searchTime` — время поиска.
    
    **Возвращает:**  
    `Point` — координаты найденного пикселя.
    

---

- **`Point FindPixel(string htmlColor, Rectangle[] rectangles, int variation)`**  
    Ищет пиксель по цвету в HTML-формате.
    
    **Параметры:**
    - `htmlColor` — цвет в формате строки (например `#FF0000`);
    - `rectangles` — области поиска;
    - `variation` — допустимое отклонение.
    
    **Возвращает:**  
    `Point` — координаты найденного пикселя.
    

---

- **`Point FindPixel(string htmlColor, Rectangle[] rectangles, int variation, int searchTime)`**  
    Поиск HTML-цвета с таймаутом.
    
    **Параметры:**
    - `htmlColor` — цвет;
    - `rectangles` — области поиска;
    - `variation` — отклонение;
    - `searchTime` — время поиска.
    
    **Возвращает:**  
    `Point` — координаты найденного пикселя.
    

---

- **`Point FindPixels(Color[] colors, Rectangle[] rectangles, int variation)`**  
    Ищет пиксель из набора цветов.
    
    **Параметры:**
    - `colors` — массив цветов;
    - `rectangles` — области поиска;
    - `variation` — допустимое отклонение.
    
    **Возвращает:**  
    `Point` — координаты найденного пикселя.
    

---

- **`Point FindPixels(Color[] colors, Rectangle[] rectangles, int variation, int searchTime)`**  
    Поиск одного из цветов с ограничением времени.
    
    **Параметры:**
    - `colors` — массив цветов;
    - `rectangles` — области поиска;
    - `variation` — отклонение;
    - `searchTime` — время поиска.
    
    **Возвращает:**  
    `Point` — координаты найденного пикселя.
    

---

- **`Point FindPixels(string[] htmlColors, Rectangle[] rectangles, int variation)`**  
    Ищет пиксель из набора HTML-цветов.
    
    **Параметры:**
    - `htmlColors` — массив цветов в строковом формате;
    - `rectangles` — области поиска;
    - `variation` — отклонение.
    
    **Возвращает:**  
    `Point` — координаты найденного пикселя.
    

---

- **`Point FindPixels(string[] htmlColors, Rectangle[] rectangles, int variation, int searchTime)`**  
    Поиск HTML-цветов с таймаутом.
    
    **Параметры:**
    - `htmlColors` — массив цветов;
    - `rectangles` — области поиска;
    - `variation` — отклонение;
    - `searchTime` — время поиска.
    
    **Возвращает:**  
    `Point` — координаты найденного пикселя.
    

---

- **`Rectangle FindImageBlackWhite(string imageHash, Rectangle[] rectangles, int confidenceInterval, int threshold)`**  
    Поиск изображения в чёрно-белом режиме.
    
    **Параметры:**
    - `imageHash` — хэш изображения;
    - `rectangles` — области поиска;
    - `confidenceInterval` — точность совпадения;
    - `threshold` — порог бинаризации.
    
    **Возвращает:**  
    `Rectangle` — область найденного изображения.
    

---

- **`Rectangle FindImageBlackWhite(string imageHash, Rectangle[] rectangles, int confidenceInterval, int threshold, int searchTime)`**  
    Ч/б поиск с таймаутом.
    
    **Параметры:**
    - `imageHash` — хэш;
    - `rectangles` — области;
    - `confidenceInterval` — точность;
    - `threshold` — порог;
    - `searchTime` — время поиска.
    
    **Возвращает:**  
    `Rectangle` — область найденного изображения.
    

---

- **`Rectangle FindImageBlackWhite(string[] imageHashes, Rectangle[] rectangles, int confidenceInterval, int threshold)`**  
    Поиск нескольких изображений в ч/б.
    
    **Параметры:**
    - `imageHashes` — массив хэшей;
    - `rectangles` — области;
    - `confidenceInterval` — точность;
    - `threshold` — порог.
    
    **Возвращает:**  
    `Rectangle` — область найденного изображения.
    

---

- **`Rectangle FindImageBlackWhite(string[] imageHashes, Rectangle[] rectangles, int confidenceInterval, int threshold, int searchTime)`**  
    Ч/б поиск нескольких изображений с таймаутом.
    
    **Параметры:**
    - `imageHashes` — массив;
    - `rectangles` — области;
    - `confidenceInterval` — точность;
    - `threshold` — порог;
    - `searchTime` — время.
    
    **Возвращает:**  
    `Rectangle` — область найденного изображения.
    

---

- **`Rectangle FindImageGrayscale(string imageHash, Rectangle[] rectangles, int confidenceInterval)`**  
    Поиск изображения в оттенках серого.
    
    **Параметры:**
    - `imageHash` — хэш;
    - `rectangles` — области;
    - `confidenceInterval` — точность.
    
    **Возвращает:**  
    `Rectangle` — область найденного изображения.
    

---

- **`Rectangle FindImageGrayscale(string imageHash, Rectangle[] rectangles, int confidenceInterval, int searchTime)`**  
    Поиск grayscale с таймаутом.
    
    **Параметры:**
    - `imageHash` — хэш;
    - `rectangles` — области;
    - `confidenceInterval` — точность;
    - `searchTime` — время.
    
    **Возвращает:**  
    `Rectangle` — область найденного изображения.
    

---

- **`Rectangle FindImageGrayscale(string[] imageHashes, Rectangle[] rectangles, int confidenceInterval)`**  
    Поиск нескольких изображений в grayscale.
    
    **Параметры:**
    - `imageHashes` — массив;
    - `rectangles` — области;
    - `confidenceInterval` — точность.
    
    **Возвращает:**  
    `Rectangle` — область найденного изображения.
    

---

- **`Rectangle FindImageGrayscale(string[] imageHashes, Rectangle[] rectangles, int confidenceInterval, int searchTime)`**  
    Поиск grayscale с таймаутом.
    
    **Параметры:**
    - `imageHashes` — массив;
    - `rectangles` — области;
    - `confidenceInterval` — точность;
    - `searchTime` — время.
    
    **Возвращает:**  
    `Rectangle` — область найденного изображения.
    

---

- **`byte[] ScreenshotAsArray()`**  
    Делает скриншот всего экрана.
    
    **Возвращает:**  
    Массив байтов изображения.
    

---

- **`byte[] ScreenshotAsArray(Rectangle area)`**  
    Делает скриншот указанной области.
    
    **Параметры:**
    - `area` — область экрана.
    
    **Возвращает:**  
    Массив байтов.
    

---

- **`string ScreenshotAsBase64String()`**  
    Делает скриншот экрана.
    
    **Возвращает:**  
    Строку Base64.
    

---

- **`string ScreenshotAsBase64String(Rectangle area)`**  
    Делает скриншот области.
    
    **Параметры:**
    - `area` — область экрана.
    
    **Возвращает:**  
    Base64 строку.
    

---

- **`void RefreshScreen()`**  
    Обновляет состояние экрана.

---
# ПРОВЕРИТЬ!
- **`void ResetScreen()`**  
    Сбрасывает кэш экрана.

---

- **`void SetCaptureScreenQuality(int quality)`**  
    Устанавливает качество захвата.
    
    **Параметры:**
    - `quality` — уровень качества (влияет на скорость и точность).