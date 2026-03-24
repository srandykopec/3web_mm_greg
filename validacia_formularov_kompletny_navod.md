# Validácia formulárov - Kompletný návod

## 🎯 Čo je validácia?

**Validácia** = **Overenie** alebo **Kontrola správnosti** zadaných údajov.

Je to proces, ktorý zabezpečí, že používateľ zadal **správne a úplné** údaje pred tým, ako sa odošlú na server.

---

## 🤔 Prečo potrebujeme validáciu?

### 1. **Bezpečnosť**
- Chráni pred hackerskými útokmi (SQL injection, XSS...)
- Zabraňuje odoslaniu škodlivého kódu

### 2. **Kvalita dát**
- Zabezpečí, že v databáze budú správne údaje
- Email musí byť email, vek musí byť číslo...

### 3. **Používateľská skúsenosť (UX)**
- Okamžitá spätná väzba
- Užívateľ vie hneď, čo opraviť
- Nemusí čakať na odpoveď zo servera

### 4. **Úspora zdrojov**
- Menej zbytočných požiadaviek na server
- Menej chýb v databáze

---

## 🔄 Dva typy validácie

### 1. **Klientska validácia** (Client-side) - v prehliadači

**Kde:** JavaScript v prehliadači  
**Kedy:** Hneď po zadaní údajov

**Výhody:**
- ✅ Okamžitá odozva
- ✅ Lepšia UX
- ✅ Šetrí server

**Nevýhody:**
- ❌ Dá sa obísť (vypnutý JS, developer tools)
- ❌ Nie je bezpečná sama o sebe

```javascript
// Príklad klientskej validácie
const email = document.getElementById('email').value;

if (!email.includes('@')) {
    alert('Email musí obsahovať @');
}
```

---

### 2. **Serverová validácia** (Server-side) - na serveri

**Kde:** Backend (PHP, Node.js, Python...)  
**Kedy:** Po odoslaní formulára na server

**Výhody:**
- ✅ Bezpečná (užívateľ ju nemôže obísť)
- ✅ Overí dáta v databáze (napr. či email už existuje)

**Nevýhody:**
- ❌ Pomalšia (musí komunikovať so serverom)
- ❌ Horšia UX (užívateľ čaká)

```php
// Príklad serverovej validácie (PHP)
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Neplatný email";
}
```

---

## ⚖️ Kombinácia = najlepšia prax

**V praxi sa používajú OBE!**

1. **Klientska** - rýchla spätná väzba pre používateľa
2. **Serverová** - finálna bezpečná kontrola

```
Užívateľ vyplní formulár
    ↓
Klientska validácia (JS) ✅
    ↓
Odoslanie na server
    ↓
Serverová validácia (PHP/Node.js) ✅
    ↓
Uloženie do databázy
```

---

## 📝 HTML5 validácia (zabudovaná v prehliadači)

HTML5 má **vstavatnú validáciu** bez JavaScriptu!

### Základné atribúty:

#### 1. **`required`** - povinné pole
```html
<input type="text" id="meno" required>
<!-- Prehliadač sám zobrazí chybu, ak je prázdne -->
```

#### 2. **`type="email"`** - overí formát emailu
```html
<input type="email" id="email" required>
<!-- Musí obsahovať @ a bod -->
```

#### 3. **`type="number"`** - len čísla
```html
<input type="number" id="vek" min="18" max="100">
<!-- Min/max hodnota -->
```

#### 4. **`minlength` / `maxlength`** - dĺžka textu
```html
<input type="text" id="heslo" minlength="8" maxlength="20">
<!-- Minimum 8, maximum 20 znakov -->
```

#### 5. **`pattern`** - regulárny výraz
```html
<input type="text" id="telefon" pattern="[0-9]{10}">
<!-- Presne 10 číslic -->
```

#### 6. **`min` / `max`** - min/max hodnota
```html
<input type="number" id="vek" min="18" max="120">
```

---

### Príklad HTML5 validácie:

```html
<form>
    <!-- Meno - povinné, min 3 znaky -->
    <input type="text" id="meno" required minlength="3" 
           placeholder="Minimálne 3 znaky">
    
    <!-- Email - povinný, správny formát -->
    <input type="email" id="email" required 
           placeholder="vas@email.sk">
    
    <!-- Vek - číslo, min 18 -->
    <input type="number" id="vek" min="18" max="120" required>
    
    <!-- Telefón - presne 10 číslic -->
    <input type="tel" id="telefon" pattern="[0-9]{10}" 
           placeholder="0901234567">
    
    <button type="submit">Odoslať</button>
</form>
```

**Prehliadač automaticky:**
- Zobrazí červenú šípku pri chybe
- Zablokuje odoslanie
- Ukáže chybovú hlášku

---

## 💻 JavaScript validácia (vlastná kontrola)

Keď potrebuješ **viac kontroly** nad validáciou, použiješ JavaScript.

### 1. **Základná validácia**

```javascript
const form = document.getElementById('formular');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Zastav odoslanie
    
    const meno = document.getElementById('meno').value;
    const email = document.getElementById('email').value;
    
    // Kontrola prázdneho mena
    // .trim() - odstráni medzery na začiatku a na konci textu
    // Napr: "  Ján  " sa zmení na "Ján"
    // Prečo? Používateľ môže omylom dať medzeru pred menom
    if (meno.trim() === '') {
        alert('Meno je povinné!');
        return; // Zastav funkciu
    }
    
    // Kontrola emailu
    if (!email.includes('@')) {
        alert('Email musí obsahovať @');
        return;
    }
    
    // Všetko OK - môžeš odoslať
    console.log('Formulár je v poriadku!');
    // form.submit(); // Odošli formulár
});
```

---

### 2. **Validácia s vizuálnou spätnou väzbou**

**Čo to robí?**  
Táto funkcia sa spúšťa **pri odoslaní formulára** a kontroluje, či sú údaje správne. Ak nie sú, zobrazí chybovú hlášku a označí pole červeným rámčekom. Ak sú v poriadku, označí pole zeleným rámčekom.

**Prečo cez CSS triedy?**  
V profesionálnej praxi **neupravujeme CSS priamo v JavaScripte** (napr. `style.color = 'red'`). Namiesto toho pridávame/odoberáme **CSS triedy** - je to čistejšie, prehľadnejšie a ľahšie sa to spravuje.

```javascript
// Táto funkcia sa zavolá pri odoslaní formulára
function validujMeno() {
    const menoInput = document.getElementById('meno');
    const meno = menoInput.value;
    const chybaElement = document.getElementById('meno-chyba');
    
    // Kontrola 1: Je pole prázdne?
    if (meno.trim() === '') {
        // Zobraz chybovú hlášku
        chybaElement.textContent = '❌ Meno je povinné';
        
        // Pridaj CSS triedu pre chybu
        menoInput.classList.add('input-error');
        menoInput.classList.remove('input-success');
        
        chybaElement.classList.add('text-error');
        chybaElement.classList.remove('text-success');
        
        return false; // Validácia zlyhala
    }
    
    // Kontrola 2: Je meno príliš krátke?
    if (meno.length < 3) {
        chybaElement.textContent = '❌ Meno musí mať minimálne 3 znaky';
        
        menoInput.classList.add('input-error');
        menoInput.classList.remove('input-success');
        
        chybaElement.classList.add('text-error');
        chybaElement.classList.remove('text-success');
        
        return false;
    }
    
    // ✅ Všetko je OK!
    chybaElement.textContent = '✅ V poriadku';
    
    menoInput.classList.add('input-success');
    menoInput.classList.remove('input-error');
    
    chybaElement.classList.add('text-success');
    chybaElement.classList.remove('text-error');
    
    return true; // Validácia prešla
}

// Zavolaj validáciu pri odoslaní formulára
const form = document.getElementById('formular');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Validuj meno
    if (!validujMeno()) {
        return; // Ak validácia zlyhala, zastav odoslanie
    }
    
    // Tu pokračuj s odoslaním formulára...
    console.log('Formulár je v poriadku!');
});
```

**HTML:**
```html
<form id="formular">
    <input type="text" id="meno" placeholder="Tvoje meno">
    <span id="meno-chyba"></span>
    <button type="submit">Odoslať</button>
</form>
```

**CSS:**
```css
/* Červený rámček pri chybe */
.input-error {
    border: 2px solid #e74c3c;
    background-color: #ffebee;
}

/* Zelený rámček keď je OK */
.input-success {
    border: 2px solid #27ae60;
    background-color: #e8f5e9;
}

/* Červený text pri chybe */
.text-error {
    color: #e74c3c;
    font-weight: bold;
}

/* Zelený text keď je OK */
.text-success {
    color: #27ae60;
    font-weight: bold;
}
```

---

### 3. **Validácia emailu**

```javascript
function validujEmail(email) {
    // Základná kontrola - musí obsahovať @ a bodku
    if (!email.includes('@') || !email.includes('.')) {
        return false;
    }
    
    return true;
}

// Použitie:
const email = 'test@email.sk';
if (validujEmail(email)) {
    console.log('Email je správny');
} else {
    console.log('Email nie je správny');
}
```

**Poznámka:** Pre pokročilejšiu kontrolu emailu sa používajú **regulárne výrazy (regex)**, ktoré dokážu overiť presný formát emailovej adresy.

---

### 4. **Validácia checkboxov (minimálny počet)**

```javascript
function validujCheckboxy() {
    const checkboxy = document.querySelectorAll('input[type="checkbox"]:checked');
    
    if (checkboxy.length < 3) {
        alert('Musíš vybrať aspoň 3 možnosti!');
        return false;
    }
    
    return true;
}

// Pri odoslaní formulára
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    if (!validujCheckboxy()) {
        return; // Zastav odoslanie
    }
    
    console.log('Formulár je OK');
});
```

---

## 🏆 Reálny príklad - Kompletný validovaný formulár

```javascript
const form = document.getElementById('newsletterForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Získaj hodnoty
    const meno = document.getElementById('meno').value.trim();
    const email = document.getElementById('email').value.trim();
    const checkboxy = document.querySelectorAll('input[type="checkbox"]:checked');
    
    // VALIDÁCIA 1: Prázdne meno
    if (meno === '') {
        zobrazSpravu('❌ Meno je povinné!', 'error');
        return;
    }
    
    // VALIDÁCIA 2: Krátke meno
    if (meno.length < 3) {
        zobrazSpravu('❌ Meno musí mať minimálne 3 znaky!', 'error');
        return;
    }
    
    // VALIDÁCIA 3: Prázdny email
    if (email === '') {
        zobrazSpravu('❌ Email je povinný!', 'error');
        return;
    }
    
    // VALIDÁCIA 4: Nesprávny formát emailu
    if (!email.includes('@') || !email.includes('.')) {
        zobrazSpravu('❌ Email musí obsahovať @ a bodku!', 'error');
        return;
    }
    
    // VALIDÁCIA 5: Málo checkboxov
    if (checkboxy.length < 3) {
        zobrazSpravu('❌ Musíš vybrať aspoň 3 oblasti!', 'error');
        return;
    }
    
    // ✅ VŠETKO OK
    // Teraz potrebujeme z checkboxov vytiahnut len hodnoty (texty)
    // checkboxy = [<input>, <input>, <input>] - NodeList elementov
    // Array.from(checkboxy) = prevod NodeList na klasické pole
    // .map(cb => cb.value) = z každého checkboxu vyber hodnotu
    // Výsledok: oblasti = ["Video", "Web", "Fotografia"] - pole textov
    const oblasti = Array.from(checkboxy).map(cb => cb.value);
    
    zobrazSpravu(
        `✅ Ďakujeme ${meno}! Tvoje oblasti: ${oblasti.join(', ')}`,
        'success'
    );
});

function zobrazSpravu(text, typ) {
    const spravaElement = document.getElementById('sprava');
    spravaElement.innerHTML = '';
    
    const p = document.createElement('p');
    p.textContent = text;
    
    spravaElement.className = 'sprava ' + typ;
    spravaElement.appendChild(p);
}
```

---



## ✅ Best Practices (osvedčené postupy)

### 1. **Validuj na viacerých úrovniach**
- Klientska (JS) pre UX
- Serverová pre bezpečnosť

### 2. **Poskytni jasnú spätnú väzbu**
```javascript
// ❌ ZLE
alert('Chyba');

// ✅ DOBRE
zobrazSpravu('Email musí obsahovať @ a bodku. Napríklad: vas@email.sk', 'error');
```

### 3. **Validuj počas písania (real-time)**
```javascript
document.getElementById('email').addEventListener('input', function() {
    const email = this.value;
    if (!email.includes('@')) {
        // Zobraž chybu
    }
});
```

### 4. **Vizuálne označuj chyby**
- Červený border okolo inputu
- Červená ikonka ❌
- Červený text pod políčkom

### 5. **Neblokuj užívateľa zbytočne**
```javascript
// ❌ ZLE - validuj až pri submite
form.addEventListener('submit', ...);

// ✅ LEPŠIE - validuj aj počas písania
input.addEventListener('blur', ...); // Po opustení poľa
```

### 6. **Sanitizuj (vyčisti) vstupy**
```javascript
const meno = document.getElementById('meno').value.trim(); // Odstráň medzery
const email = email.toLowerCase(); // Malé písmená
```

---

## 🎓 Typy validácií podľa poľa

| **Pole** | **Čo kontrolovať** |
|----------|-------------------|
| Meno | Nie je prázdne, min. 2-3 znaky |
| Email | Obsahuje @, bod, správny formát |
| Heslo | Min. 8 znakov, veľké/malé písmená, číslo |
| Vek | Je číslo, min. 18, max. 120 |
| Telefón | 10 číslic, začína 0 |
| URL | Začína http:// alebo https:// |
| Checkbox | Min. počet vybraných |
| Dátum | Správny formát, nie v minulosti |
| Súbor | Správny typ (.jpg, .pdf), max. veľkosť |

---

## 📊 Príklady validačných pravidiel z praxe

### Gmail registrácia:
- Meno: 1-40 znakov
- Email: musí byť unikátny
- Heslo: min. 8 znakov
- Dátum narodenia: musíš mať 13+ rokov

### Facebook registrácia:
- Meno: 1-50 znakov
- Email/telefón: musí byť overený
- Heslo: min. 6 znakov
- Dátum narodenia: musíš mať 13+ rokov

### JavaScript validácia hesla:
```javascript
function validujHeslo(heslo) {
    if (heslo.length < 8) {
        return 'Heslo musí mať minimálne 8 znakov';
    }
    
    if (!/[A-Z]/.test(heslo)) {
        return 'Heslo musí obsahovať aspoň jedno veľké písmeno';
    }
    
    if (!/[a-z]/.test(heslo)) {
        return 'Heslo musí obsahovať aspoň jedno malé písmeno';
    }
    
    if (!/[0-9]/.test(heslo)) {
        return 'Heslo musí obsahovať aspoň jedno číslo';
    }
    
    return true; // Všetko OK
}
```

---

## 🎯 Zhrnutie

| **Čo** | **Kde** | **Kedy** |
|--------|---------|----------|
| HTML5 atribúty | Prehliadač | Automaticky při submite |
| JavaScript | Klient (prehliadač) | Pri zadávaní / submite |
| Backend (PHP/Node) | Server | Po odoslaní na server |

**Zlaté pravidlo:** 
> **NIKDY neveruj len klientskej validácii. Vždy validuj aj na serveri!**

---

**Dôležité:** Validácia je **základ bezpečného a používateľsky príjemného webu**. V reálnych projektoch sa používa vždy! 🔒
