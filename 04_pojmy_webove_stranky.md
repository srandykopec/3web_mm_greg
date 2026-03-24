# 📚 Základy internetu a webu 

## 🌐 Internet, WWW a stručná história

### Čo je internet?
**Internet** je globálna počítačová sieť sietí, ktoré spolu komunikujú podľa pravidiel nazývaných **protokoly**. Nie je to jeden počítač alebo jedna firma, ale vzájomne prepojené počítačové siete po celom svete, ktoré si rozumejú vďaka spoločným štandardom.

### História 
- **60. roky** – vznikol **ARPANET**, odolná akademicko‑vojenská sieť
  - Údaje sa posielajú v malých paketoch
  - Pri výpadku si vedia nájsť náhradnú cestu
- **80. roky** – presadili sa protokoly **TCP/IP**
  - Základ dnešného internetu
  - Umožnili prepojenie rôznych typov sietí
- **90. roky** – zlom: príchod **World Wide Web**
  - Tim Berners‑Lee v CERN‑e vytvoril WWW
  - Web je služba, ktorá beží na internete

### World Wide Web (WWW) – tri piliere webu
V roku 1991 Tim Berners‑Lee predstavil tri kľúčové technológie, ktoré umožnili prehliadať prepojené dokumenty:

- **HTML** (HyperText Markup Language) – jazyk na štruktúrovanie dokumentov
- **URL** (Uniform Resource Locator) – presná adresa každého zdroja na webe
- **HTTP** (HyperText Transfer Protocol) – spôsob prenosu medzi prehliadačom a serverom

### 💡 Základná idea
> **Internet** je infraštruktúra (globálna počítačová sieť).  
> **Web (WWW)** je jedna zo služieb, ktorá na internete beží (ako aj email, videohovory a iné).

### Služby internetu
Internet nie je len web – je to platforma pre mnoho rôznych služieb:

- **WWW** (World Wide Web) – prehliadanie webových stránok pomocou hypertextových odkazov (HTTP/HTTPS)
- **Email** – elektronická pošta cez protokoly ako SMTP, POP3, IMAP
- **FTP** (File Transfer Protocol) – prenos súborov medzi počítačmi
- **Cloud storage** – úložiská ako Google Drive, Dropbox, OneDrive
- **Streaming** – prenos videa a zvuku v reálnom čase (YouTube, Spotify, Netflix)
- **VoIP** – hlasové a video hovory cez internet (Zoom, Teams, Discord, Skype)
- **Správy v reánom čase** (Instant Messaging) – komunikácia v reálnom čase (Messenger, WhatsApp, Telegram)
- **Online gaming** – hranie hier cez internet s inými hráčmi
- **IoT** (Internet of Things) – komunikácia inteligentných zariadení (smart domácnosti, senzory)


Každá služba používa vlastné **protokoly** – dohodnuté pravidlá komunikácie, ktoré určujú, ako si zariadenia vymieňajú údaje.

---

## 🚀 Ako dať stránku na internet?

Máš hotové HTML, CSS a JavaScript súbory na svojom počítači. Aby ich mohli vidieť aj ostatní ľudia na svete, musíš prejsť týmto procesom:

### 1️⃣ Server – kde stránka bude žiť
**Server** je počítač pripojený 24/7 k internetu, na ktorom beží špeciálny softvér ktorý sprístupňuje webové stránky verejnosti. Bez servera by tvoje súbory zostali len na tvojom počítači.

### 2️⃣ Hosting – priestor na serveri
**Hosting** je služba prenájmu priestoru a výkonu na serveri. Pred výberom hostingu musíš vedieť, aký typ stránky vytváraš:

#### Statická vs. dynamická stránka – základné rozdiely

**📄 Statická stránka:**
- Obsah je **vopred pripravený** a rovnaký pre všetkých návštevníkov
- Stránka sa skladá len z HTML, CSS a JavaScriptu
- **Nepotrebuje databázu** ani serverové programovanie (PHP, Python, Node.js...)
- **Rýchla** a jednoduchá na nasadenie
- **Príklady použitia:**
  - Portfólio, osobná vizitka
  - Firemná prezentácia (o firme, služby, kontakt)
  - Blog bez komentárov a prihlásenia
  - Dokumentácia projektu
  - Landing page (vstupná stránka kampane)

**⚙️ Dynamická stránka:**
- Obsah sa **vytvára na základe dát** – pre každého používateľa iný
- Potrebuje komunikovať so serverom cez jazyky PHP, Python, Node.js
- Používa **databázu** (MySQL, PostgreSQL, MongoDB...)
- Umožňuje **prihlásenie, registráciu, ukladanie dát**
- **Príklady použitia:**
  - E-shop (košík, objednávky, platby)
  - Sociálna síeť (profily, príspevky, správy)
  - Blog s komentármi a prihlásením
  - Online aplikácie (úlohy, projekty, tímy)
  - Systémy na správu obsahu (CMS)

#### Ako sa rozhodnúť?

**Potrebuješ statickú stránku, ak:**
- ✅ Obsah sa nemení často (raz za týždeň/mesiac)
- ✅ Všetci vidia to isté
- ✅ Nie je potrebné prihlásenie ani registrácia
- ✅ Nie je potrebné ukladať dáta od používateľov

**Potrebuješ dynamickú stránku, ak:**
- ✅ Každý používateľ vidí iný obsah (profil, košík, správy...)
- ✅ Umožňuješ prihlásenie a správu účtu
- ✅ Ukladáš dáta od používateľov (komentáre, objednávky, nastavenia)
- ✅ Obsah sa často mení alebo pridáva cez administráciu

### 3️⃣ Doména – ľuďom zapamätateľná adresa
**Doména je názov tvojho webu**, napríklad `mojaskola.sk` alebo `jannovak.com`. Bez domény by ľudia museli zadávať číselné IP adresy ako `185.25.116.47`, čo si nik nepamätá.

- Doménu **kupuješ u registrátora** (napríklad Websupport, Endora, Webnode)
- Platí sa ročný poplatok (približne 10-20 € za .sk alebo .com)

### 6️⃣ Prehliadač – čím ľudia stránku otvoria
**Prehliadač** je program (Chrome, Firefox, Edge, Safari), ktorý:
1. Pošle požiadavku na server cez HTTP/HTTPS
2. Stiahne HTML, CSS, JavaScript a obrázky
3. Vykreslí stránku na obrazovke používateľa


## 📡 Komunikácia klient-server: HTTP a HTTPS

### Čo je HTTP?
**HTTP** (HyperText Transfer Protocol) je dohodnutý spôsob, akým si **klient** (prehliadač) a **server** vymieňajú webový obsah.

### Ako funguje komunikácia?

**Klient** (prehliadač) → **Požiadavka (Request)** → **Server (kde je uložená webová stránka)**

**Server** → **Odpoveď (Response)** → **Klient** (prehliadač)


### HTTP a HTTPS 

Hlavný rozdiel medzi HTTP a HTTPS spočíva v bezpečnosti: HTTPS **(Hypertext Transfer Protocol Secure)** je šifrovaná a bezpečná verzia HTTP, ktorá využíva SSL/TLS certifikáty na ochranu dát prenášaných medzi prehliadačom a serverom. Zatiaľ čo HTTP posiela dáta v nezabezpečenom formáte (plain text), HTTPS chráni citlivé údaje pred odpočúvaním a útokmi. 

**Ako rozoznať HTTPS?**
- V adresnom riadku je **zámok** 🔒
- URL začína `https://` (nie `http://`)

### 💡 Zhrnutie
> **HTTP** = nešifrovaná komunikácia (nebezpečné pre citlivé dáta)  
> **HTTPS** = šifrovaná komunikácia (štandard pre každú modernú stránku)

---

## 🏠 Webové sídlo, štruktúra a navigácia

### Čo je webové sídlo?
**Webové sídlo** je logicky prepojená skupina stránok, ktoré patria k sebe a tvoria jeden celok.

**Príklad:** Osobné portfólio so sekciami:
- Domov
- O mne
- Portfólio (ukážky prác)
- Kontakt

### Štruktúra webového sídla
**Štruktúra** určuje, ako sú stránky usporiadané do **hierarchie**.

#### Príklad štruktúry:
```
mojportfolio/
├── index.html              (Domov)
├── o-mne.html              (O mne)
├── portfolio.html          (Portfólio)
├── kontakt.html            (Kontakt)
└── assets/
    ├── css/
    │   ├── style.css       (vlastné štýly)
    │   └── normalize.css   (reset CSS pre konzistenciu)
    └── js/
        └── script.js       (interaktivita)
```

#### Prečo záleží na štruktúre?
- ✅ **Používateľ** sa rýchlo orientuje a nájde, čo hľadá
- ✅ **Vyhľadávače** lepšie pochopia obsah stránky
- ✅ **Údržba** je jednoduchšia pri prehľadnej organizácii

---

## ♿ Prístupnosť a 📱 responzivita

### Prístupnosť (Accessibility)
**Prístupnosť** znamená, že stránka je použiteľná pre **každého**, vrátane ľudí s rôznymi obmedzeniami.

#### Kto potrebuje prístupné stránky?
- Ľudia s **poruchou zraku** (čítačky obrazovky, zväčšenie textu)
- Ľudia s **poruchou sluchu** (titulky k videám)
- Ľudia s **motorickými obmedzeniami** (ovládanie klávesnicou)
- Ľudia s **kognitívnymi obmedzeniami** (jasné návody, jednoduché rozloženie)
- Všetci v **náročných podmienkach** (svetlo, hluk, slabé pripojenie)

#### Ako dosiahnuť prístupnosť?

**Štruktúra a sémantika:**
- ✅ Používaj správne HTML elementy (`<nav>`, `<main>`, `<article>`...)
- ✅ Zmysluplná hierarchia nadpisov (`<h1>` → `<h2>` → `<h3>`)
- ✅ Odkazy s jasným textom (nie "tu" alebo "viac")

**Obrázky a multimédiá:**
- ✅ `alt` atribút pre obrázky (popis pre čítačky)
- ✅ Titulky a prepisy pre videá

**Farby a kontrast:**
- ✅ Dostatočný kontrast medzi textom a pozadím
- ✅ Informácia nie je len farbou (použij aj ikony, text)

**Ovládanie:**
- ✅ Všetko ovládateľné klávesnicou (Tab, Enter, šípky)
- ✅ Viditeľný focus (zvýraznenie aktívneho prvku)

### Responzivita (Responsive Design)
**Responzivita** znamená, že sa rozloženie a typografia prispôsobia **rôznym šírkam obrazoviek**.

#### Prečo je responzivita dôležitá?
- 📱 **Väčšina ľudí** prechádza web na mobile
- 💻 **Rôzne zariadenia** – od mobilu (320px) po 4K monitor (3840px)
- 🚀 **Google** zvýhodňuje mobilné verzie v hodnotení

#### Ako dosiahnuť responzivitu?

**1. Viewport meta tag** – v `<head>` každej stránky:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

**2. Flexibilné jednotky:**
- `%` – percento z rodiča
- `em` / `rem` – relatívne k veľkosti písma
- `vw` / `vh` – percento z šírky/výšky obrazovky

**3. Media queries** – CSS pravidlá pre rôzne šírky:
```css
/* Mobil (predvolené) */
.container { width: 100%; }

/* Tablet */
@media (min-width: 768px) {
  .container { width: 750px; }
}

/* Desktop */
@media (min-width: 1024px) {
  .container { width: 960px; }
}
```
---

## 🧰 Editor, DevTools a prehliadač

### Editor / IDE
**Editor** alebo **IDE** (Integrated Development Environment) je nástroj na písanie a organizáciu kódu.

#### Populárne editory:
- **Visual Studio Code** (VS Code) – bezplatný, rozšíriteľný, najpopulárnejší
- **WebStorm** – platený, pre JavaScript a webové technológie
- **Sublime Text** – rýchly, ľahký editor
- **Notepad++** – jednoduchý editor pre Windows

#### Prečo používať editor?
- ✅ **Syntax highlighting** – farebné zvýrazňovanie kódu
- ✅ **Autocomplete** – automatické dopĺňanie kódu
- ✅ **Intellisense** – návrhy a nápoveda
- ✅ **Linting** – upozornenia na chyby v kóde
- ✅ **Extensions** – rozšírenia pre rôzne technológie
- ✅ **Git integrácia** – správa verzií priamo v editore

### DevTools (Developer Tools)
**DevTools** sú **vývojárske nástroje zabudované v prehliadači**, (po kliknutím pravým tlačidlom myši na stránke - Preskúmať / Skontrolovať) ktoré umožňujú:



#### Základné možnosti.
 - Pozrieť sa do štruktúry stránky, meniť CSS v reálnom čase a vidieť zmeny okamžite
 - Spúšťať JavaScript kód, vidieť chybové hlásenia
 - Testovať stránku na rôznych šírkach obrazovky

### Prehliadač
**Prehliadač** je program, ktorý interpretuje a vykresluje webové stránky.

#### Populárne prehliadače:
- **Google Chrome** – najviac používaný, rýchly, veľa rozšírení
- **Mozilla Firefox** – open-source, rešpektuje súkromie
- **Microsoft Edge** – postavený na Chromium (rovnaký základ ako Chrome)
- **Safari** – predvolený na Mac a iOS
- **Opera** – postavený na Chromium, má VPN

---

## 🔎 SEO – Search Engine Optimization

### Čo je SEO?
**SEO** (Search Engine Optimization) je súbor postupov, vďaka ktorým **web lepšie nájdu vyhľadávače aj ľudia**. Ide o optimalizáciu obsahu, štruktúry a technických vlastností stránky tak, aby sa zobrazovala vyššie vo výsledkoch vyhľadávania.

### Cieľ SEO
> Aby sa človek rýchlo dostal k užitočnej informácii a mal príjemnú skúsenosť so stránkou.

### Čo zlepšuje výsledok vo vyhľadávaní?

1. **Zmysluplná štruktúra HTML** – jeden `<h1>`, logická hierarchia nadpisov, sémantické elementy
2. **Kvalitný obsah** – užitočný, originálny text s pravidelnou aktualizáciou
3. **Meta údaje** – výstižný `<title>`, popis stránky, alt text pre obrázky
4. **Zrozumiteľné URL** – `/o-mne` namiesto `strana.php?id=123`
5. **Rýchlosť a mobile** – optimalizované obrázky, funguje na mobile
6. **HTTPS** – bezpečné pripojenie

**Nástroj na kontrolu:** Lighthouse v DevTools

---

## 🔄 Systémy na správu verzií – Git a GitHub

### Čo je Git?
**Git** je systém, ktorý zaznamenáva históriu zmien v kóde. Funguje ako "cestovanie v čase" – môžeš sa vrátiť k staršej verzii projektu, vidieť kto čo zmenil a bezpečne spolupracovať s inými.

### Na čo to slúži?
- ✅ **Záloha** – nikdy nestratíš kód, všetko je v histórii
- ✅ **Spolupráca** – viacero ľudí pracuje na jednom projekte bez konfliktov
- ✅ **Experimentovanie** – môžeš skúšať zmeny bez rizika pokazenia fungujúceho kódu
- ✅ **História** – vieš, kto a kedy urobil zmenu

### Základné pojmy
- **Repository (repozitár)** – priečinok s projektom a celou jeho históriou
- **Commit** – "snímka" projektu v danom čase so správou o zmene
- **GitHub/GitLab** – cloudový priestor pre zálohu a spoluprácu + **GitHub Pages** (bezplatný hosting)

```

