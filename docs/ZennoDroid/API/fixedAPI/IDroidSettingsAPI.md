## Описание

`IDroidSettingsAPI` предназначен для изменения системных настроек Android-устройства в ZennoDroid. Позволяет управлять геолокацией, временем, языком, базовой прошивкой (baseband), а также настройками LSPosed.

## Методы

- **`void ClearLSPosedSettings()`**  
    Очищает настройки LSPosed.

---

- **`string GenerateRandomLSPosedSettings(IDeviceFilter filter, IDeviceOptions options)`**  
    Генерирует случайные настройки LSPosed.
    
    **Параметры:**
    - `filter` — фильтр устройства (`IDeviceFilter`);
    - `options` — дополнительные параметры устройства (`IDeviceOptions`).
    
    **Возвращает:**  
    JSON-строку с настройками.
    

---

- **`void SetBaseband(string version)`**  
    Устанавливает версию baseband.
    
    **Параметры:**
    - `version` — версия модема/прошивки.

---

- **`void SetGeo(double longitude, double latitude)`**  
    Устанавливает геолокацию.
    
    **Параметры:**
    - `longitude` — долгота;
    - `latitude` — широта.

---

- **`void SetGeo(double longitude, double latitude, double altitude)`**  
    Устанавливает геолокацию с высотой.
    
    **Параметры:**
    - `longitude` — долгота;
    - `latitude` — широта;
    - `altitude` — высота.

---

- **`void SetGeo(double longitude, double latitude, double altitude, double bearing)`**  
    Устанавливает геолокацию с направлением.
    
    **Параметры:**
    - `longitude` — долгота;
    - `latitude` — широта;
    - `altitude` — высота;
    - `bearing` — направление движения (в градусах).

---

- **`void SetGeo(double longitude, double latitude, double altitude, double bearing, double speed)`**  
    Устанавливает геолокацию с полной телеметрией.
    
    **Параметры:**
    - `longitude` — долгота;
    - `latitude` — широта;
    - `altitude` — высота;
    - `bearing` — направление;
    - `speed` — скорость движения.

---

- **`void SetLanguage(string language)`**  
    Устанавливает язык системы.
    
    **Параметры:**
    - `language` — код языка (например: `en`, `ru`).

---

- **`void SetLSPosedSettings(string json)`**  
    Применяет настройки LSPosed.
    
    **Параметры:**
    - `json` — JSON с настройками.

---

- **`void SetRandomLSPosedSettings(IDeviceFilter filter, IDeviceOptions deviceOptions)`**  
    Устанавливает случайные настройки LSPosed.
    
    **Параметры:**
    - `filter` — фильтр устройства;
    - `deviceOptions` — параметры устройства.

---

- **`void SetTime(DateTime dateTime)`**  
    Устанавливает системное время.
    
    **Параметры:**
    - `dateTime` — объект `DateTime`.

---

- **`void SetTime(string dateTime)`**  
    Устанавливает время строкой.
    
    **Параметры:**
    - `dateTime` — строка (например: `2025-01-01 12:00:00`).

---

- **`void SetTimezone(string timezone)`**  
    Устанавливает часовой пояс.
    
    **Параметры:**
    - `timezone` — строка (например: `Europe/Moscow`).