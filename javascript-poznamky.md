# JavaScript Starterpack 🚀

> Frontend vs. Backend
- Frontend: časť, ktorú vidí používateľ (UI v prehliadači). Jazyky: HTML, CSS, JavaScript/TypeScript. Nástroje: React, Vue, Angular, Svelte.
- Backend: logika na serveri resp. to, čo užívateľ nevidí (API, databázy, autentifikácia). Jazyky: JavaScript/TypeScript (Node.js), Python (Django/Flask/FastAPI), PHP (Laravel), Java (Spring), C# (.NET), Ruby (Rails), Go. Databázy: SQL (PostgreSQL, MySQL), NoSQL (MongoDB).
- Full‑stack: vývojár, ktorý robí frontend aj backend a prepája ich.

---

## 1. Čo je JavaScript?

**JavaScript** je programovací jazyk, ktorý umožňuje vytvárať interaktívne webové stránky. Spúšťa sa v prehliadači a dokáže:
- Reagovať na akcie používateľa (kliknutia, písanie...)
- Meniť obsah stránky dynamicky
- Validovať formuláre
- Vytvárať animácie a efekty

---

## 2. Ako pridať JavaScript do HTML?

### Interný JavaScript (v HTML súbore)
```html
<!DOCTYPE html>
<html>
<head>
    <title>Moja stránka</title>
</head>
<body>
    <h1>Ahoj svet!</h1>
    
    <script>
        // Sem píšeme JavaScript kód
        console.log("Hello World!");
    </script>
</body>
</html>
```

### Externý JavaScript (oddelený súbor)
```html
<!DOCTYPE html>
<html>
<head>
    <title>Moja stránka</title>
</head>
<body>
    <h1>Ahoj svet!</h1>
    
    <script src="script.js"></script>
</body>
</html>
```

**Tip:** `<script>` tag dávame na koniec `<body>`, aby sa HTML najprv načítal.

---

## 3. Základné koncepty a termíny

### 3.1 Console (Konzola)

**Console** = Nástroj na výpis správ a ladenie kódu.

```javascript
console.log("Toto sa zobrazí v konzole");
console.error("Toto je chybová hláška");
console.warn("Toto je varovanie");
```

**Ako otvoriť konzolu:**
- Chrome/Edge: `F12` alebo `Ctrl + Shift + J`
- Firefox: `F12` alebo `Ctrl + Shift + K`

---

### 3.2 Premenné (Variables)

**Premenná** = Miesto v pamäti, kde ukladáme hodnoty.

```javascript
// let - premenná, ktorú môžeme zmeniť
let meno = "Janko";
let vek = 15;

meno = "Peter"; // môžeme zmeniť hodnotu

// const - konštanta, nemôžeme zmeniť
const PI = 3.14159;
const skola = "Gymnázium";

// PI = 3.14; // CHYBA! konštantu nemôžeme zmeniť

// var - starý spôsob (radšej nepoužívať)
var starySposob = "lepšie použiť let";
```

**Pravidlá pre názvy premenných:**
- Musia začínať písmenom, `_` alebo `$`
- Môžu obsahovať písmená, čísla, `_` a `$`
- Sú case-sensitive (`meno` ≠ `Meno`)
- Nemôžu byť rezervované slová (`let`, `if`, `function`...)

---

### 3.3 Dátové typy resp. údajové typy (Data Types)

#### Primitívne typy:

```javascript
// String (reťazec) - text
let meno = "Janko";
let priezvisko = 'Hraško';
let veta = `Volám sa ${meno}`; // template literal

// Number (číslo)
let vek = 15;
let pi = 3.14;
let zaporne = -10;

// Boolean (logická hodnota)
let jeStudent = true;
let maVodicak = false;

// Undefined (nedefinované)
let nieco;
console.log(nieco); // undefined

// Null (prázdna hodnota)
let prazdne = null;
```

**Zistenie typu premennej:**
```javascript
console.log(typeof "Ahoj"); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"
```

---

### 3.4 Operátory (Operators)

#### Matematické operátory:
```javascript
let a = 10;
let b = 3;

console.log(a + b);  // 13 (sčítanie)
console.log(a - b);  // 7  (odčítanie)
console.log(a * b);  // 30 (násobenie)
console.log(a / b);  // 3.333... (delenie)
console.log(a % b);  // 1  (zvyšok po delení - modulo)
console.log(a ** b); // 1000 (mocnina: 10³)
```

#### Inkrementácia a dekrementácia (zvýš o jedna, zníž o jedna):
```javascript
let pocet = 5;
pocet++;  // pocet = pocet + 1 (teraz je 6)
pocet--;  // pocet = pocet - 1 (teraz je 5)
```

#### Priradenie:
```javascript
let x = 10;
x += 5;  // x = x + 5 (teraz je 15)
x -= 3;  // x = x - 3 (teraz je 12)
x *= 2;  // x = x * 2 (teraz je 24)
x /= 4;  // x = x / 4 (teraz je 6)
```

#### Porovnávacie operátory:
```javascript
console.log(5 == "5");   // true (porovná len hodnotu)
console.log(5 === "5");  // false (porovná hodnotu aj typ) ✅ ODPORÚČANÉ!

console.log(5 != "5");   // false
console.log(5 !== "5");  // true ✅ ODPORÚČANÉ!

console.log(10 > 5);     // true
console.log(10 < 5);     // false
console.log(10 >= 10);   // true
console.log(5 <= 3);     // false
```

**Dôležité:** Vždy používaj `===` a `!==` namiesto `==` a `!=`!

#### Logické operátory:
```javascript
let a = true;
let b = false;

console.log(a && b);  // false (AND - oba musia byť true)
console.log(a || b);  // true  (OR - aspoň jeden musí byť true)
console.log(!a);      // false (NOT - opačná hodnota)
```

---

### 3.5 Podmienky (Conditions)

#### If / Else:
```javascript
let vek = 16;

if (vek >= 18) {
    console.log("Si plnoletý");
} else if (vek >= 15) {
    console.log("Si teenager");
} else {
    console.log("Si dieťa");
}
```

#### Ternárny operátor (skrátený zápis):
```javascript
let vek = 20;
let status = vek >= 18 ? "dospely" : "mladistvý";
console.log(status); // "dospely"
```

#### Switch:
```javascript
let den = "pondelok";

switch (den) {
    case "pondelok":
        console.log("Začiatok týždňa");
        break;
    case "piatok":
        console.log("Koniec týždňa");
        break;
    case "sobota":
    case "nedeľa":
        console.log("Víkend!");
        break;
    default:
        console.log("Bežný deň");
}
```

---

### 3.6 Cykly (Loops)

#### For cyklus:
```javascript
// Vypíše čísla od 0 do 4
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// i++ znamená: i = i + 1
```

#### While cyklus:
```javascript
let pocet = 0;

while (pocet < 5) {
    console.log(pocet);
    pocet++;
}
```

#### Do-While cyklus:
```javascript
let x = 0;

do {
    console.log(x);
    x++;
} while (x < 5);
// Vykoná sa aspoň raz, potom kontroluje podmienku
```

---

### 3.7 Funkcie (Functions)

**Funkcia** = Blok kódu, ktorý môžeme opakovane spustiť.

#### Klasická funkcia:
```javascript
function pozdrav(meno) {
    console.log("Ahoj " + meno + "!");
}

pozdrav("Janko"); // "Ahoj Janko!"
pozdrav("Petra"); // "Ahoj Petra!"
```

#### Funkcia s návratovou hodnotou:
```javascript
function sucet(a, b) {
    return a + b;
}

let vysledok = sucet(5, 3);
console.log(vysledok); // 8
```

#### Arrow funkcia (moderný zápis):
```javascript
const nasobenie = (a, b) => {
    return a * b;
};

// Skrátený zápis (ak len return):
const nasobenie2 = (a, b) => a * b;

console.log(nasobenie(4, 5)); // 20
```

---

### 3.8 Polia (Arrays)

**Pole** = Zoznam hodnôt.

```javascript
let ovocie = ["jablko", "hruška", "banán"];

// Prístup k prvkom (indexovanie od 0!)
console.log(ovocie[0]); // "jablko"
console.log(ovocie[1]); // "hruška"

// Dĺžka poľa
console.log(ovocie.length); // 3

// Pridanie prvku na koniec
ovocie.push("pomaranč");

// Odstránenie posledného prvku
ovocie.pop();

// Prechádzanie poľom
for (let i = 0; i < ovocie.length; i++) {
    console.log(ovocie[i]);
}

// Moderný spôsob (forEach)
ovocie.forEach(function(item) {
    console.log(item);
});

// Alebo s arrow funkciou
ovocie.forEach(item => console.log(item));
```

**Užitočné metódy polí:**
```javascript
let cisla = [1, 2, 3, 4, 5];

// map - transformuje každý prvok
let nasobky = cisla.map(x => x * 2);
console.log(nasobky); // [2, 4, 6, 8, 10]

// filter - vybiere prvky podľa podmienky
let parne = cisla.filter(x => x % 2 === 0);
console.log(parne); // [2, 4]

// find - nájde prvý prvok podľa podmienky
let prveParne = cisla.find(x => x % 2 === 0);
console.log(prveParne); // 2

// includes - zistí, či je prvok v poli
console.log(cisla.includes(3)); // true
```

---

### 3.9 Objekty (Objects)

**Objekt** = Kolekcia vlastností (key-value párov).

```javascript
let student = {
    meno: "Janko",
    priezvisko: "Hraško",
    vek: 16,
    trieda: "3.A",
    predmety: ["matematika", "fyzika", "slovenčina"]
};

// Prístup k vlastnostiam
console.log(student.meno);        // "Janko"
console.log(student["vek"]);      // 16

// Zmena hodnoty
student.vek = 17;

// Pridanie novej vlastnosti
student.skola = "Gymnázium";

// Metódy v objekte
let auto = {
    znacka: "Škoda",
    model: "Octavia",
    nastartuj: function() {
        console.log("Brum brum!");
    }
};

auto.nastartuj(); // "Brum brum!"
```

---

### 3.10 DOM Manipulácia

**DOM (Document Object Model)** = Stromová štruktúra HTML dokumentu, ktorú môžeme meniť JavaScriptom.

#### Výber elementov:
```javascript
// Podľa ID
let nadpis = document.getElementById("hlavnyNadpis");

// Podľa class (vráti prvý element)
let tlacitko = document.querySelector(".btn");

// Podľa class (vráti všetky)
let vsetkyTlacitka = document.querySelectorAll(".btn");

// Podľa tag name
let odseky = document.getElementsByTagName("p");
```

#### Zmena obsahu:
```javascript
let nadpis = document.getElementById("nadpis");

// Zmena textu
nadpis.textContent = "Nový text";

// Zmena HTML
nadpis.innerHTML = "<strong>Tučný text</strong>";
```

#### Zmena štýlov:
```javascript
let box = document.getElementById("box");

box.style.color = "red";
box.style.backgroundColor = "yellow";
box.style.fontSize = "20px";
```

#### Práca s class:
```javascript
let element = document.querySelector(".karta");

element.classList.add("aktivna");       // Pridá class
element.classList.remove("skryta");     // Odstráni class
element.classList.toggle("zvyraznena"); // Prepne class (ak je, odstráni, ak nie je, pridá)
element.classList.contains("aktivna");  // Skontroluje, či má class (vráti true/false)
```

#### Vytvorenie nového elementu:
```javascript
let novyOdsek = document.createElement("p");
novyOdsek.textContent = "Toto je nový odsek";
document.body.appendChild(novyOdsek);
```

---

### 3.11 Event Listeners (Udalosti)

**Event** = Niečo, co sa stane (kliknutie, pohyb myši, stlačenie klávesy...).

```javascript
let tlacitko = document.getElementById("mojeTlacitko");

// Pridanie event listenera
tlacitko.addEventListener("click", function() {
    console.log("Tlačítko bolo kliknuté!");
});

// S arrow funkciou
tlacitko.addEventListener("click", () => {
    console.log("Klik!");
});
```

**Najpoužívanejšie eventy:**
```javascript
// Click (kliknutie)
element.addEventListener("click", () => {});

// Mouseover (prejdenie myšou)
element.addEventListener("mouseover", () => {});

// Mouseout (odídenie myšou)
element.addEventListener("mouseout", () => {});

// Input (zmena v input poli)
input.addEventListener("input", () => {});

// Submit (odoslanie formulára)
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Zabráni odoslaniu
});

// Keydown (stlačenie klávesy)
document.addEventListener("keydown", (e) => {
    console.log(e.key); // Vypíše, ktorá klávesa bola stlačená
});
```

**Event objekt:**
```javascript
tlacitko.addEventListener("click", function(event) {
    console.log(event.target);      // Element, na ktorý sa kliklo
    console.log(event.type);        // Typ eventu ("click")
    event.preventDefault();         // Zruší predvolené správanie
    event.stopPropagation();        // Zastaví šírenie eventu
});
```

---

## 4. Dôležité termíny - slovník

| Termín | Význam |
|--------|--------|
| **Variable** | Premenná - miesto na uloženie hodnoty |
| **Constant** | Konštanta - hodnota, ktorú nemôžeme zmeniť |
| **Function** | Funkcia - znovupoužiteľný blok kódu |
| **Parameter** | Parameter - hodnota, ktorú funkcia prijíma |
| **Argument** | Argument - konkrétna hodnota, ktorú posielame do funkcie |
| **Return** | Vrátiť - funkcia vráti hodnotu |
| **Array** | Pole - zoznam hodnôt |
| **Object** | Objekt - kolekcia vlastností |
| **Loop** | Cyklus - opakovanie kódu |
| **Condition** | Podmienka - rozhodovanie (if/else) |
| **Event** | Udalosť - niečo, čo sa stane (klik, pohyb myši...) |
| **DOM** | Document Object Model - štruktúra HTML dokumentu |
| **Method** | Metóda - funkcia, ktorá patrí objektu |
| **Property** | Vlastnosť - hodnota v objekte |
| **Element** | Element - HTML prvok (div, button, p...) |
| **Callback** | Callback funkcia - funkcia ako parameter inej funkcie |
| **Scope** | Rozsah platnosti - kde je premenná viditeľná |
| **String** | Reťazec - textová hodnota |
| **Boolean** | Logická hodnota - true alebo false |
| **Console** | Konzola - nástroj na ladenie a výpis správ |

---

## 5. Časté chyby začiatočníkov

### ❌ Chyba 1: Zabudnutie uvodzoviek pri stringoch
```javascript
let meno = Janko; // ❌ CHYBA!
let meno = "Janko"; // ✅ SPRÁVNE
```

### ❌ Chyba 2: Použitie = namiesto === pri porovnávaní
```javascript
if (vek = 18) { } // ❌ CHYBA! (priradenie, nie porovnanie)
if (vek === 18) { } // ✅ SPRÁVNE
```

### ❌ Chyba 3: Zabudnutie zátvoriek pri volaní funkcie
```javascript
pozdrav; // ❌ len odkaz na funkciu
pozdrav(); // ✅ volanie funkcie
```

### ❌ Chyba 4: Nesprávne indexovanie poľa (od 0!)
```javascript
let cisla = [10, 20, 30];
console.log(cisla[1]); // Vypíše 20, nie 10!
```

### ❌ Chyba 5: Zabudnutie document pri výbere elementu
```javascript
let tlacitko = getElementById("btn"); // ❌ CHYBA!
let tlacitko = document.getElementById("btn"); // ✅ SPRÁVNE
```

### ❌ Chyba 6: Case-sensitivity
```javascript
let meno = "Janko";
console.log(Meno); // ❌ CHYBA! (JavaScript rozlišuje veľké/malé písmená)
```

---

## 6. Ďalšie zdroje na učenie

### Online editory (na precvičovanie):
- [CodePen](https://codepen.io)
- [JSFiddle](https://jsfiddle.net)
- [JS Bin](https://jsbin.com)

### Interaktívne kurzy, dokumentácia:
- [freeCodeCamp](https://www.freecodecamp.org)
- [JavaScript.info](https://javascript.info)
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)



