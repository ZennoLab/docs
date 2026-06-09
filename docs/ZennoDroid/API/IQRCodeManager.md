## Описание

`IQRCodeManager` предназначен для работы с QR-кодами в ZennoDroid. Позволяет управлять окном сканирования, отображать изображения (например, QR-коды) и взаимодействовать с интерфейсом камеры/сканера.

## Методы

- **`void CloseQRCodeScanWindow()`**  
    Закрывает окно сканирования QR-кода.

---

- **`void CloseViewfinderWindow()`**  
    Закрывает окно видоискателя (камеры).

---

- **`void DrawImage(byte[] image, Rectangle area, Rectangle background)`**  
    Отображает изображение на экране.
    
    **Параметры:**
    - `image` — массив байтов изображения;
    - `area` — область, в которой будет отображено изображение;
    - `background` — область фона (для позиционирования/отрисовки).

---

- **`void DrawImage(string fileName, Rectangle area, Rectangle background)`**  
    Отображает изображение из файла.
    
    **Параметры:**
    - `fileName` — путь к файлу изображения;
    - `area` — область отображения;
    - `background` — область фона.

---

- **`void PressQRCodeScanButton()`**  
    Нажимает кнопку запуска сканирования QR-кода.

### Пример.
```csharp
var qr = new QRCodeManager();
qr.PressQRCodeScanButton();
```
---

- **`void SetViewfinderPosition(Rectangle rect)`**  
    Устанавливает позицию окна видоискателя.
    
    **Параметры:**
    - `rect` — область расположения окна.