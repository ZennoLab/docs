https://docs.zennolab.com/zennodroid/API/App

### Методы

- **`void Open(string packageName, string activityName, string action)`**  
    Запускает приложение с указанием Activity и Intent Action.
    
    **Параметры:**
    - `packageName` — имя пакета;
    - `activityName` — имя Activity;
    - `action` — действие Intent (например: `android.intent.action.VIEW`).


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