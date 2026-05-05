## Описание

`IDroidProxySettings` определяет настройки прокси и защиты от утечек сетевых данных на Android-устройстве в ZennoDroid. Используется для повышения анонимности и контроля сетевого трафика.

Имеет несколько реализаций (вариантов настройки), в зависимости от способа проксирования.

### `DroidProxySettings.Proxifier`

Базовые настройки прокси с использованием механизма проксирования трафика.

---

- **`bool? BlockWebRtcLeak { get; set; }`**  
    Включает или отключает защиту от утечек через WebRTC.
    
    **Описание:**  
    Предотвращает раскрытие реального IP-адреса через WebRTC (используется в браузерах и WebView).
    

---

- **`bool? BlockUDPLeak { get; set; }`**  
    Включает или отключает защиту от UDP-утечек.
    
    **Описание:**  
    Блокирует UDP-трафик, который может обходить прокси и раскрывать реальный IP.
    

---

### `DroidProxySettings.ProxifierViaPC`

Расширенные настройки прокси при использовании проксирования через ПК.

---

- **`bool? BlockWebRtcLeak { get; set; }`**  
    Управляет защитой от WebRTC-утечек.

---

- **`bool? BlockUDPLeak { get; set; }`**  
    Управляет блокировкой UDP-утечек.

---

- **`string DnsServers { get; set; }`**  
    Указывает DNS-серверы.
    
    **Описание:**  
    Позволяет задать пользовательские DNS (например: `8.8.8.8, 1.1.1.1`).
    

---

- **`string LocalIPv4Address { get; set; }`**  
    Локальный IPv4-адрес.
    
    **Описание:**  
    Используется для привязки прокси к конкретному сетевому интерфейсу ПК.

___

### `DroidProxySettings.Redsocks`

Настройки прокси через **Redsocks** (перенаправление TCP/UDP трафика через прокси).

---

- **`string DnsServers { get; set; }`**  
    DNS-серверы.
    
    **Описание:**  
    Указывает список DNS (например: `8.8.8.8, 1.1.1.1`).
    

---

- **`bool? UseDnsTcp { get; set; }`**  
    Использовать DNS через TCP.
    
    **Описание:**  
    Перенаправляет DNS-запросы по TCP вместо UDP.
    

---

- **`bool? UseDnsUdp { get; set; }`**  
    Использовать DNS через UDP.
    
    **Описание:**  
    Управляет использованием UDP для DNS-запросов.
    

---

- **`bool? BlockWebRtcLeak { get; set; }`**  
    Блокировка WebRTC-утечек.

---

- **`bool? BlockUDPLeak { get; set; }`**  
    Блокировка UDP-утечек.

---

- **`string WebRtcLeakAddresses { get; set; }`**  
    Адреса для обработки WebRTC.
    
    **Описание:**  
    Список IP/адресов, используемых для контроля или подмены WebRTC-трафика.
    

---

- **`string WebUdpLeakAddresses { get; set; }`**  
    Адреса для обработки UDP-утечек.
    
    **Описание:**  
    Список IP/адресов для контроля UDP-трафика.
    

---

### `DroidProxySettings.RedsocksViaPC`

Расширенные настройки Redsocks при проксировании через ПК.

---

- **`string DnsServers { get; set; }`**  
    DNS-серверы.

---

- **`bool? UseDnsTcp { get; set; }`**  
    Использовать DNS через TCP.

---

- **`bool? UseDnsUdp { get; set; }`**  
    Использовать DNS через UDP.

---

- **`bool? BlockWebRtcLeak { get; set; }`**  
    Блокировка WebRTC-утечек.

---

- **`bool? BlockUDPLeak { get; set; }`**  
    Блокировка UDP-утечек.

---

- **`string WebRtcLeakAddresses { get; set; }`**  
    Адреса для WebRTC.

---

- **`string WebUdpLeakAddresses { get; set; }`**  
    Адреса для UDP.

---

- **`string LocalIPv4Address { get; set; }`**  
    Локальный IPv4-адрес.
    
    **Описание:**  
    Используется для привязки проксирования к сетевому интерфейсу ПК.

___

### `DroidProxySettings.Clash`

Настройки прокси через **Clash** — продвинутый прокси-клиент с поддержкой правил маршрутизации трафика.

---

- **`string DnsServers { get; set; }`**  
    DNS-серверы.
    
    **Описание:**  
    Указывает список DNS (например: `8.8.8.8, 1.1.1.1`).
    

---

- **`string LocalIPv4Address { get; set; }`**  
    Локальный IPv4-адрес.
    
    **Описание:**  
    Используется для привязки сетевого интерфейса.
    

---

- **`string LocalIPv6Address { get; set; }`**  
    Локальный IPv6-адрес.
    
    **Описание:**  
    Позволяет работать с IPv6-трафиком.
    

---

- **`string WhiteList { get; set; }`**  
    Белый список.
    
    **Описание:**  
    Список адресов/доменов, для которых трафик проходит напрямую (без прокси).
    

---

- **`string BlackList { get; set; }`**  
    Чёрный список.
    
    **Описание:**  
    Список адресов/доменов, для которых принудительно используется прокси.
    

---

- **`string NetworkMode { get; set; }`**  
    Режим работы сети.
    
    **Описание:**  
    Определяет стратегию маршрутизации (например: global, rule, direct).
    

---

- **`string Rules { get; set; }`**  
    Правила маршрутизации.
    
    **Описание:**  
    Набор правил (обычно в формате Clash), определяющих, какой трафик куда направлять.
    

---

### `DroidProxySettings.ClashViaPC`

Настройки Clash при проксировании через ПК.

---

- **`string DnsServers { get; set; }`**  
    DNS-серверы.

---

- **`string LocalIPv4Address { get; set; }`**  
    Локальный IPv4-адрес ПК.

---

- **`string LocalIPv6Address { get; set; }`**  
    Локальный IPv6-адрес.

---

- **`string WhiteList { get; set; }`**  
    Белый список.

---

- **`string BlackList { get; set; }`**  
    Чёрный список.

---

- **`string NetworkMode { get; set; }`**  
    Режим сети.

---

- **`string Rules { get; set; }`**  
    Правила маршрутизации.