
## Описание
`IDroidAppAPI` предназначен для управления приложениями на Android-устройстве в ZennoDroid. Предоставляет методы для работы с данными приложений, аккаунтами, уведомлениями, cookies и состоянием приложений.

## Свойства

- **`string Top { get; }`**  
    Текущее активное приложение.
    
    **Возвращает:**  
    Имя пакета приложения на переднем плане.
    

---

- **`uint TopPid { get; }`**  
    PID текущего приложения.
    
    **Возвращает:**  
    Идентификатор процесса.


## Методы


- **`void Open(string packageName)`**  
    Запускает приложение.
    
    **Параметры:**
    - `packageName` — имя пакета.

---

- **`void Open(string packageName, string activityName)`**  
    Запускает приложение с указанием Activity.
    
    **Параметры:**
    - `packageName` — пакет;
    - `activityName` — Activity.

---

- **`void Open(string packageName, string activityName, string action)`**  
    Запускает с Activity и Intent Action.
    
    **Параметры:**
    - `packageName` — пакет;
    - `activityName` — Activity;
    - `action` — действие Intent.

- **`void OpenAsRoot(string packageName, string activityName)`**  
    Запускает приложение с правами root с указанием Activity.
    
    **Параметры:**
    - `packageName` — имя пакета;
    - `activityName` — имя Activity;

---

- **`void OpenAsRoot(string packageName, string activityName, string action)`**  
    Запускает приложение с правами root с указанием Activity и Intent Action.
    
    **Параметры:**
    - `packageName` — имя пакета;
    - `activityName` — имя Activity;
    - `action` — действие Intent (например: `android.intent.action.VIEW`).

___

- **`string AppDir(string packageName)`**  
    Возвращает путь к директории приложения на устройстве.
    
    **Параметры:**
    - `packageName` — имя пакета приложения (например: `com.android.chrome`).

---

- **`string DataDir(string packageName)`**  
    Возвращает директорию данных приложения.
    
    **Параметры:**
    - `packageName` — имя пакета.
    
    **Возвращает:**  
    Путь к каталогу данных (обычно `/data/data/...`).
    
___

- **`void BackupAppData(string packageName, string pathToBackup)`**  
    Создаёт резервную копию данных приложения.
    
    **Параметры:**
    - `packageName` — имя пакета приложения;
    - `pathToBackup` — путь для сохранения бэкапа.

---

- **`void BackupAppData(string packageName, string pathToBackup, bool savePermissions)`**  
    Создаёт резервную копию с возможностью сохранения разрешений приложения.
    
    **Параметры:**
    - `savePermissions` — сохранять ли текущие разрешения приложения.

---

- **`void BackupAppData(string packageName, string pathToBackup, bool savePermissions, string accountType)`**  
    Расширенное резервное копирование с учётом типа аккаунта.
    
    **Параметры:**
    - `savePermissions` — сохранять разрешения;
    - `accountType` — тип аккаунта (например, Google, Facebook и т.д.).

---


- **`void RestoreAppData(string packageName, string pathToBackup)`**  
    Восстанавливает данные приложения из резервной копии.
    
    **Параметры:**
    - `packageName` — имя пакета приложения;
    - `pathToBackup` — путь для сохранения бэкапа.

---

- **`void RestoreAppData(string packageName, string pathToBackup, bool restorePermissions)`**  
    Восстанавливает данные с возможностью восстановления разрешений.
    
    **Параметры:**
    - `restorePermissions` — восстанавливать ли разрешения приложения.

---

- **`void RestoreAppData(string packageName, string pathToBackup, bool restorePermissions, bool restoreAccount)`**  
    Расширенное восстановление с возможностью восстановления аккаунта.
    
    **Параметры:**
    - `restorePermissions` — восстанавливать разрешения;
    - `restoreAccount` — восстанавливать связанные аккаунты.

---

- **`void RestoreDetachedAppData(string packageName, string pathToBackup, bool restorePermissions, bool restoreAccount)`** 
    Восстанавливает данные приложения в "отсоединённом" режиме (без привязки к текущему состоянию устройства).
    
    **Параметры:**
    - `restorePermissions` — восстанавливать разрешения;
    - `restoreAccount` — восстанавливать связанные аккаунты.

___

- **`bool AddAccount(string name, string type, string password)`**  
    Добавляет аккаунт на устройство.
    
    **Параметры:**
    - `name` — имя аккаунта (например, email или логин);
    - `type` — тип аккаунта (например: `com.google`, `com.facebook.auth.login`);
    - `password` — пароль аккаунта.
    
    **Возвращает:**  
    `true`, если аккаунт успешно добавлен; иначе `false`.
    

---

- **`bool AddAccount(string name, string type, string password, string metadata)`**  
    Добавляет аккаунт с дополнительными метаданными.
    
    **Параметры:**
    - `name` — имя аккаунта;
    - `type` — тип аккаунта;
    - `password` — пароль;
    - `metadata` — дополнительные данные аккаунта (например, токены, параметры авторизации в JSON или строковом виде).
    
    **Возвращает:**  
    `true`, если аккаунт успешно добавлен; иначе `false`.

___

- **`string GetAccounts(string packageName)`**  
    Получает список аккаунтов приложения.
    
    **Параметры:**
    - `packageName` — имя пакета.
    
    **Возвращает:**  
    Строку с данными аккаунтов.
    

---

- **`string GetAccounts(string packageName, string type)`**  
    Получает аккаунты определённого типа.
    
    **Параметры:**
    - `packageName` — имя пакета;
    - `type` — тип аккаунта (например `com.google`).
    
    **Возвращает:**  
    Строку с аккаунтами.
    
___

- **`bool RemoveAccount(string name, string type)`**  
    Удаляет аккаунт.
    
    **Параметры:**
    - `name` — имя аккаунта;
    - `type` — тип.
    
    **Возвращает:**  
    `true`, если успешно удалён.

- **`void PatchFlutterLib(string packageName, string proxy)`**  
    Выполняет патч библиотеки Flutter (`libflutter.so`) для указанного приложения с целью перенаправления сетевого трафика через прокси.
    
    **Параметры:**
    - `packageName` — имя пакета приложения;
    - `proxy` — адрес прокси (например: `127.0.0.1:8888`).

---

- **`void RestoreFlutterLib(string packageName)`**  
    Восстанавливает оригинальную библиотеку Flutter (`libflutter.so`), отменяя ранее применённый патч.
    
    **Параметры:**
    - `packageName` — имя пакета приложения.

___

- **`string GetAllNotifications()`**  
    Получает все уведомления устройства.
    
    **Возвращает:**  
    Строку с информацией об уведомлениях.
    

---

- **`string GetAppNotifications(string packageName)`**  
    Получает уведомления конкретного приложения.
    
    **Параметры:**
    - `packageName` — имя пакета.
    
    **Возвращает:**  
    Строку с уведомлениями.
    

---

- **`string GetCookie(string packageName)`**  
    Получает cookies приложения.
    
    **Параметры:**
    - `packageName` — имя пакета.
    
    **Возвращает:**  
    Строку с cookies.
    

---

- **`string GetCookiePath(string packageName)`**  
    Возвращает путь к cookies приложения.
    
    **Параметры:**
    - `packageName` — имя пакета.
    
    **Возвращает:**  
    Путь к файлу cookies.
    

---

- **`string Uid(string packageName)`**  
    Получает UID приложения.
    
    **Параметры:**
    
    - `packageName` — имя пакета.
    
    **Возвращает:**  
    UID приложения.

___

- **`void Clean(string packageName)`**  
    Полностью очищает данные приложения.
    
    **Параметры:**
    - `packageName` — имя пакета.

---

- **`void CleanCache(string packageName)`**  
    Очищает только кэш приложения.
    
    **Параметры:**
    - `packageName` — имя пакета.

---

- **`void ClearAllNotifications()`**  
    Очищает все уведомления устройства.

---

- **`void ClearAppNotifications(string packageName)`**  
    Очищает уведомления конкретного приложения.
    
    **Параметры:**
    - `packageName` — имя пакета.

---

- **`void Close(string packageName)`**  
    Закрывает приложение.
    
    **Параметры:**
    - `packageName` — имя пакета.

---

- **`void CloseAll()`**  
    Закрывает все приложения.

___

- **`void Delete(string packageName)`**  
    Удаляет приложение с устройства.
    
    **Параметры:**
    - `packageName` — имя пакета приложения.

---

- **`void InjectScript(string packageName, string script)`**  
    Внедряет скрипт в приложение.
    
    **Параметры:**
    - `packageName` — имя пакета;
    - `script` — код скрипта.
    
    **Описание:**  
    Используется для модификации поведения приложения (аналогично Frida/Xposed).
    

---

- **`void InstallApk(string path)`**  
    Устанавливает APK-файл.
    
    **Параметры:**
    - `path` — путь к APK.

---

- **`void InstallApk(string path, bool useCache, bool useRoot)`**  
    Устанавливает APK с дополнительными параметрами.
    
    **Параметры:**
    - `path` — путь к APK;
    - `useCache` — использовать кэш при установке;
    - `useRoot` — использовать root-доступ.

---

- **`bool IsInstalled(string packageName)`**  
    Проверяет, установлено ли приложение.
    
    **Параметры:**
    - `packageName` — имя пакета.
    
    **Возвращает:**  
    `true`, если установлено; иначе `false`.
    

---

- **`string[] GetListPackages()`**  
    Возвращает список всех пакетов.
    
    **Возвращает:**  
    Массив имён пакетов.
    

---

- **`string[] GetListSystemPackages()`**  
    Возвращает список системных приложений.
    
    **Возвращает:**  
    Массив пакетов.
    

---

- **`string[] GetListUserPackages()`**  
    Возвращает список пользовательских приложений.
    
    **Возвращает:**  
    Массив пакетов.
    

---

- **`void OpenUrl(string url)`**  
    Открывает URL.
    
    **Параметры:**
    - `url` — ссылка.

---

- **`void OpenUrl(string url, string packageName)`**  
    Открывает URL через конкретное приложение.
    
    **Параметры:**
    - `url` — ссылка;
    - `packageName` — приложение.