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

```javascript
function validujMeno() {
    const menoInput = document.getElementById('meno');
    const meno = menoInput.value;
    const chyba = document.getElementById('meno-chyba');
    
    if (meno.trim() === '') {
        chyba.textContent = '❌ Meno je povinné';
        chyba.style.color = 'red';
        menoInput.style.borderColor = 'red';
        return false;
    }
    
    if (meno.length < 3) {
        chyba.textContent = '❌ Meno musí mať minimálne 3 znaky';
        chyba.style.color = 'red';
        menoInput.style.borderColor = 'red';
        return false;
    }
    
    // Všetko OK
    chyba.textContent = '✅ V poriadku';
    chyba.style.color = 'green';
    menoInput.style.borderColor = 'green';
    return true;
}

// Validuj pri zadávaní
document.getElementById('meno').addEventListener('input', validujMeno);
```

**HTML:**
```html
<input type="text" id="meno">
<span id="meno-chyba"></span>
```

---

### 3. **Validácia emailu**

```javascript
function validujEmail(email) {
    // Základná kontrola
    if (!email.includes('@')) {
        return false;
    }
    
    // Pokročilejšia kontrola (regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Použitie:
const email = 'test@email.sk';
if (validujEmail(email)) {
    console.log('Email je správny');
} else {
    console.log('Email nie je správny');
}
```

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

## 🎨 Moderný prístup - funkcia na zobrazenie správ

```javascript
function zobrazSpravu(text, typ) {
    const spravaElement = document.getElementById('sprava');
    
    // Vymaž staré správy
    spravaElement.innerHTML = '';
    
    // Vytvor novú správu
    const p = document.createElement('p');
    p.textContent = text;
    
    // Pridaj správnu triedu (error alebo success)
    spravaElement.className = 'sprava ' + typ;
    
    // Pridaj do stránky
    spravaElement.appendChild(p);
}

// Použitie:
zobrazSpravu('❌ Vyber aspoň 3 oblasti!', 'error');
zobrazSpravu('✅ Formulár bol úspešne odoslaný!', 'success');
```

**CSS:**
```css
.sprava {
    padding: 15px;
    margin: 20px 0;
    border-radius: 5px;
}

.sprava.error {
    background-color: #ffebee;
    color: #c62828;
    border-left: 4px solid #c62828;
}

.sprava.success {
    background-color: #e8f5e9;
    color: #2e7d32;
    border-left: 4px solid #2e7d32;
}
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

## 🔥 Moderné knihovne na validáciu

V reálnych projektoch sa často používajú **hotové knihovne**:

### 1. **Yup** (populárne pre React)
```javascript
import * as yup from 'yup';

const schema = yup.object().shape({
    meno: yup.string().min(3).required('Meno je povinné'),
    email: yup.string().email('Neplatný email').required(),
    vek: yup.number().min(18).max(120)
});

// Validácia
schema.validate({ meno: 'Ján', email: 'jan@email.sk', vek: 20 })
    .then(valid => console.log('OK'))
    .catch(err => console.log(err.message));
```

### 2. **Joi** (populárne pre Node.js/Backend)
```javascript
const Joi = require('joi');

const schema = Joi.object({
    meno: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    vek: Joi.number().integer().min(18).max(120)
});
```

### 3. **React Hook Form** (pre React formuláre)
```javascript
import { useForm } from 'react-hook-form';

function Formular() {
    const { register, handleSubmit, errors } = useForm();
    
    const onSubmit = (data) => {
        console.log(data);
    };
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("meno", { required: true, minLength: 3 })} />
            {errors.meno && <span>Meno je povinné</span>}
        </form>
    );
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

## 💡 Pre vašu hodinu - čo učiť

### **Začiatočníci:**
1. HTML5 atribúty (`required`, `type="email"`, `min`, `max`)
2. Základná JS validácia (`if (hodnota === '')`)
3. `alert()` pre chybové správy

### **Pokročilí:**
1. Vlastná funkcia na zobrazenie správ
2. Real-time validácia (počas písania)
3. Vizuálne označenie chýb (červený border)
4. Validácia checkboxov (min. počet)

### **Profesionálna úroveň:**
1. Regex validácia
2. Asynchrónna validácia (kontrola na serveri)
3. Použitie validačných knižníc

---

**Dôležité:** Validácia je **základ bezpečného a používateľsky príjemného webu**. V reálnych projektoch sa používa vždy! 🔒
