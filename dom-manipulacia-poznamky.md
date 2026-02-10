# DOM Manipulácia s elementami HTML pomocou JavaScriptu 🎯

> **DOM (Document Object Model)** = Stromová štruktúra HTML dokumentu, ktorú môžeme čítať a meniť pomocou JavaScriptu.

---

## 🤔 Na čo je DOM dobrý?

**DOM = most medzi HTML a JavaScriptom.** Umožňuje meniť stránku bez obnovenia.

| Čo dokážeme | JavaScript príklad | Použitie v praxi |
|-------------|-------------------|------------------|
| **Reagovať na akcie** | `button.addEventListener('click', ...)` | Lajkovanie, rozbaľovacie menu, dark mode |
| **Meniť obsah** | `element.textContent = 'Nový text'` | Počítadlo lajkov, aktualizácia košíka |
| **Pridávať elementy** | `parent.appendChild(newElement)` | Nový komentár, správa v chate |
| **Odstraňovať** | `element.remove()` | Zmazať komentár, zavrieť okno |
| **Validovať vstupy** | `if (!input.value) {...}` | Kontrola formulárov, prihlásenie |
| **Získať dáta** | `const text = input.value` | Vyhľadávanie, chat |
| **Zmeniť štýly** | `element.classList.toggle('active')` | Animácie, notifikácie |

**Zhrnutie:** Bez DOM = statická stránka. S DOM = interaktívna aplikácia! 🎯

---

## 🌳 Ako vyzerá DOM strom?

**HTML kód:**
```html
<body>
  <h1 id="nadpis">Ahoj!</h1>
  <ul id="zoznam">
    <li>Položka 1</li>
    <li>Položka 2</li>
  </ul>
</body>
```

**DOM strom:**
```
body
├── h1 (#nadpis)
│   └── "Ahoj!"
└── ul (#zoznam)
    ├── li → "Položka 1"
    └── li → "Položka 2"
```

**Podstata:** Každý HTML element = uzol v strome. JavaScript "chodí" po tomto strome a mení ho.

---

## 🔧 Princíp manipulácie (Todo aplikácia)

**Pred kliknutím:**
```html
<ul id="taskList">
  <li>Úloha 1</li>
</ul>
```

**JavaScript:**
```javascript
// 1. Vyhľadaj element v DOM strome
const taskList = document.getElementById('taskList');

// 2. Vytvor nový element (zatiaľ len v pamäti)
const newLi = document.createElement('li');
newLi.textContent = 'Úloha 2'; //Naplň element v premnnej newLi textom "Úloha 2"

// 3. Pridaj do stromu (teraz sa zobrazí na stránke)
taskList.appendChild(newLi);
```

**Po vykonaní:**
```html
<ul id="taskList">
  <li>Úloha 1</li>
  <li>Úloha 2</li> ← NOVÉ!
</ul>
```

**Proces:** HTML → DOM strom → JS nájde element → JS upraví → prehliadač prekreslí ✅

**💡 Kľúčové:** JavaScript pracuje s DOM stromom v pamäti, nie priamo s HTML súborom!

---

## 1. Výber elementov z HTML

Predtým, než môžeme s elementom niečo urobiť, musíme ho **vybrať** (vytiahnuť z HTML do JS).

### 1.1 `getElementById()` - výber podľa ID

**Najčastejší spôsob!** Vráti **jeden konkrétny element**.

```html
<!-- HTML -->
<button id="addButton">Pridať</button>
<input type="text" id="taskInput">
```

```javascript
// JavaScript
const addButton = document.getElementById('addButton'); //do premennej addButton vytiahni html element s id addButton
const taskInput = document.getElementById('taskInput');

console.log(addButton); // <button id="addButton">Pridať</button>
```

**⚠️ Pozor:** 
- ID musí byť **bez `#`** (len `"addButton"`, nie `"#addButton"`)
- Ak element neexistuje, vráti `null`

---

### 1.2 `querySelector()` - výber pomocou CSS selektoru

Vráti **LEN PRVÝ element**, ktorý nájde. Ak existuje viac elementov s rovnakým selektorom, zoberie prvý a ostatné ignoruje.

```html
<!-- HTML -->
<button class="btn">Tlačidlo 1</button>
<button class="btn">Tlačidlo 2</button>
<button class="btn">Tlačidlo 3</button>
```

```javascript
// Vyberie LEN prvé tlačidlo s class="btn"
const tlacitko = document.querySelector('.btn'); 
console.log(tlacitko); // <button class="btn">Tlačidlo 1</button>

// Druhé a tretie tlačidlo sa ignorujú!

// Výber podľa ID (s #)
const addButton = document.querySelector('#addButton');

// Výber podľa tagu - vyberie prvý <li>
const prvaPolozka = document.querySelector('li');
```

**💡 Rozdiel oproti `getElementById`:**
- `getElementById('id')` - BEZ #, len pre ID
- `querySelector('#id')` - S #, môžeš použiť akýkoľvek CSS selektor (.class, tag, #id...)

**Kedy použiť:**
- Keď chceme vybrať element podľa **class**
- Keď chceme **len prvý** z viacerých rovnakých elementov

---

### 1.3 `querySelectorAll()` - výber viacerých elementov (nepoužívali sme)

Vráti **NodeList** (podobné ako pole) so **VŠETKÝMI** elementmi, ktoré vyhovujú selektoru.

```html
<!-- HTML -->
<button class="btn">Tlačidlo 1</button>
<button class="btn">Tlačidlo 2</button>
<button class="btn">Tlačidlo 3</button>
```

```javascript
// Vyberie VŠETKY tlačidlá s class="btn"
const vsetkyTlacidla = document.querySelectorAll('.btn');
console.log(vsetkyTlacidla.length); // 3

// Vyberie všetky li elementy
const vsetkyUlohy = document.querySelectorAll('li');

// Vyberie všetky elementy s class="task-item"
const vsetkyPolozky = document.querySelectorAll('.task-item');

// Prechádzanie cez všetky prvky
vsetkyTlacidla.forEach((tlacidlo, index) => {
  console.log(`Tlačidlo ${index + 1}:`, tlacidlo);
});
// Vypíše:
// Tlačidlo 1: <button class="btn">Tlačidlo 1</button>
// Tlačidlo 2: <button class="btn">Tlačidlo 2</button>
// Tlačidlo 3: <button class="btn">Tlačidlo 3</button>
```

**🤔 Je NodeList pole?**

**Nie úplne!** NodeList vyzerá ako pole, ale **nie je to klasické pole (Array)**.

```javascript
const vsetkyTlacidla = document.querySelectorAll('.btn');

// ✅ Toto funguje:
console.log(vsetkyTlacidla.length);     // 3
console.log(vsetkyTlacidla[0]);         // prvý element
vsetkyTlacidla.forEach((btn) => {...}); // forEach funguje

// ❌ Toto NEFUNGUJE (pole metódy):
vsetkyTlacidla.map((btn) => {...});     // ❌ CHYBA!
vsetkyTlacidla.filter((btn) => {...});  // ❌ CHYBA!
vsetkyTlacidla.push(novyElement);       // ❌ CHYBA!
```

**💡 Ak potrebuješ pole, preveď NodeList na Array:**
```javascript
const vsetkyTlacidla = document.querySelectorAll('.btn');

// Prevod na klasické pole
const poleTlacidiel = Array.from(vsetkyTlacidla);
// alebo
const poleTlacidiel2 = [...vsetkyTlacidla]; // spread operátor

// Teraz funguje všetko:
poleTlacidiel.map((btn) => btn.textContent); // ✅ funguje
```

---

## 📊 Porovnanie metód výberu

| Metóda | Čo vráti | Syntax v HTML | Príklad |
|--------|----------|---------------|---------|
| `getElementById()` | **1 element** alebo null | BEZ # | `document.getElementById('addButton')` |
| `querySelector()` | **1 element** (prvý) alebo null | S CSS selektorom | `document.querySelector('.btn')` |
| `querySelectorAll()` | **NodeList** (všetky) | S CSS selektorom | `document.querySelectorAll('.btn')` |

**Ktorú použiť?**
- Máš ID? → `getElementById('id')` ✅ (najrýchlejšia)
- Chceš prvý element s class? → `querySelector('.class')` ✅
- Chceš všetky elementy? → `querySelectorAll('.class')` ✅

---

## 2. Čítanie a zmena obsahu elementov

### 2.1 `.textContent` - čistý text

**Na čo je to dobré?** 
`.textContent` je ako **"okienko" do elementu**, cez ktoré vidíš jeho textový obsah a môžeš ho meniť.

**Predstav si to takto:**
- Element je ako **krabica** 📦
- `.textContent` je **nálepka na krabici**, kde je napísaný text
- Môžeš **prečítať**, čo je na nálepke
- Môžeš **prepísať** nálepku novým textom

```html
<span id="farba-text">červená</span>
<!-- Element = škatuľka, "červená" = nálepka s textom -->
```

```javascript
const farbaText = document.getElementById("farba-text");

// ČÍTANIE - pozrieš sa na nálepku, čo tam je
console.log(farbaText.textContent); // "červená"

// ZMENA - prelepíš nálepku novým textom
farbaText.textContent = "modrá";
// Teraz v HTML je: <span id="farba-text">modrá</span>
```

**Prečo je to užitočné?**
- Dynamicky meniť texty na stránke (bez obnovenia)
- Reagovať na akcie užívateľa (napr. kliknutie zmení text)
- Aktualizovať počítadlá, správy, stav aplikácie

```

**💡 Príklad z praxe:**
```javascript
// Predstav si tlačidlo s počítadlom lajkov:
const lajky = document.getElementById('pocet-lajkov');
console.log(lajky.textContent); // "42" - pozrieš sa, koľko je lajkov

// Užívateľ klikne na lajk:
let pocet = Number(lajky.textContent); // preveď na číslo
pocet++; // zvýš o 1
lajky.textContent = pocet; // prepíš nálepku na nový počet

// Výsledok: Z "42" sa stalo "43" na obrazovke!
```

---

### 2.2 `.innerHTML` - HTML kód

**Základný princíp:**
`.innerHTML` = písanie HTML kódu cez JavaScript (akoby si písal HTML, len v JS)

**Rozdiel:**
- `.textContent` = len text (HTML tagy ignoruje)
- `.innerHTML` = HTML kód (tagy sa vykreslia)

```html
<div id="container">Ahoj</div>
```

```javascript
const container = document.getElementById("container");

// INNERHTML - napíšeš HTML ako v HTML súbore
container.innerHTML = "<strong>Tučné</strong>";
// do elementu, ktorý je uložený v premennej container vloží nový html element <strong>

```

**Praktický príklad:**
```javascript
// Je to akoby si priamo v HTML súbore napísal:
// <div id="container"><strong>Tučné</strong></div>
// Len to robíš cez JavaScript!
```

**Kedy čo použiť:**
- Obyčajný text? → `.textContent` ✅
- Potrebuješ HTML tagy (`<strong>`, `<em>`)? → `.innerHTML` ✅
- Text od užívateľa (input)? → `.textContent` ✅ (bezpečné!)
---

### 2.3 `.value` - hodnota formulárových polí

**Základný princíp:**
`.value` = získanie alebo nastavenie obsahu formulárových prvkov (`<input>`, `<textarea>`, `<select>`)

```html
<input type="text" id="taskInput" placeholder="Napíš text...">
<textarea id="poznamka"></textarea>
<select id="farba">
  <option>červená</option>
  <option>modrá</option>
</select>
```

```javascript
const taskInput = document.getElementById('taskInput');

// ČÍTANIE - čo užívateľ napísal?
const text = taskInput.value;
console.log(text); // "Kúpiť mlieko" (ak to užívateľ napísal)

// NASTAVENIE - napíš do inputu
taskInput.value = "Nový text"; // input sa vyplní textom

// VYMAZANIE - vyčisti input
taskInput.value = ""; // prázdny input
```

**💡 Najčastejšie použitie:**
```javascript
// Todo aplikácia - získanie textu z inputu
addButton.addEventListener('click', () => {
  const taskText = taskInput.value; // ← čítame, čo užívateľ napísal
  
  if (!taskText) {
    return; // Ak je prázdny, neskoč
  }
  
  // ... vytvoríme novú úlohu ...
  
  taskInput.value = ""; // ← vymažeme input po pridaní
});
```

**⚠️ POZOR:**
```javascript
// ❌ CHYBA - zabudnutie .value
const text = taskInput; // vráti celý element, nie text!

// ✅ SPRÁVNE
const text = taskInput.value; // vráti string s textom
```

**💡 Dôležitý rozdiel:**
```javascript
// Pre <input>, <textarea>, <select> → .value
const inputText = taskInput.value; // ✅

// Pre <p>, <div>, <span>, <h1>... → .textContent
const paragrafText = odstavec.textContent; // ✅

// Toto NEBUDE fungovať:
const text = odstavec.value; // ❌ undefined! (nie je formulárový prvok)
```

---

## 3. Vytváranie nových elementov 🔨

### 3.1 `document.createElement()` - vytvorenie elementu

```javascript
// Vytvorenie <li> elementu
const newLi = document.createElement('li');

// Vytvorenie <button> elementu
const newButton = document.createElement('button');

// Vytvorenie <input> elementu
const newInput = document.createElement('input');

console.log(newLi); // <li></li> (prázdny element)
```

**⚠️ Pozor:** Element je zatiaľ **len v pamäti**, ešte nie je viditeľný na stránke! Musíme ho pridať do DOM.

---

### 3.2 Nastavenie vlastností nového elementu

**Vytvorený element je prázdny** - musíme mu nastaviť charakteristiky (text, class, id, type...), akoby sme vyplňovali formulár o elemente.

```javascript
// Vytvorenie inputu typu checkbox
const newInput = document.createElement('input');
newInput.type = 'checkbox'; // nastavenie typu elementu
newInput.id = 'mojCheckbox';  // nastavenie id elementu
newInput.className = 'task-checkbox'; // nastavenie class elementu

// Vytvorenie tlačidla s textom
const newButton = document.createElement('button');
newButton.textContent = 'Zmazať';
newButton.className = 'delete-button';

// Vytvorenie span s textom
const newSpan = document.createElement('span');
newSpan.textContent = 'Moja nová úloha';
newSpan.className = 'task-text';
```

---

### 3.3 Často používané vlastnosti

| Vlastnosť | Použitie | Príklad |
|-----------|----------|---------|
| `.textContent` | Textový obsah | `element.textContent = "Text"` |
| `.className` | Nastavenie class | `element.className = "btn"` |
| `.id` | Nastavenie ID | `element.id = "mojId"` |
| `.type` | Typ inputu | `input.type = "text"` |
| `.placeholder` | Placeholder text | `input.placeholder = "Zadaj text"` |
| `.checked` | Stav checkboxu | `checkbox.checked = true` |
| `.disabled` | Vypnutie elementu | `button.disabled = true` |

---

## 4. Pridávanie elementov do DOM 📍

### 4.1 `.appendChild()` - pridanie na koniec

Pridá element ako **posledný potomok** do rodiča.

```html
<ul id="taskList">
  <li>Existujúca úloha 1</li>
  <li>Existujúca úloha 2</li>
</ul>
```

```javascript
const taskList = document.getElementById('taskList');  //vyberieme zoznam kam chceme pridať <li>

// Vytvorenie novej <li>
const newLi = document.createElement('li'); //vytvorí nový element <li> ale ešte nie je pridaný do stránky:  <li></li>
newLi.textContent = 'Nová úloha 3';  //naplní nový element:  <li>Nová úloha 3</li>  (ale stále nie je zobrazený na stránke)

// Pridanie do zoznamu
taskList.appendChild(newLi); //až teraz sa pridá do zoznamu ako posledný prvok zoznamu
```

**Výsledok:**
```html
<ul id="taskList">
  <li>Existujúca úloha 1</li>
  <li>Existujúca úloha 2</li>
  <li>Nová úloha 3</li> ← pridané na koniec
</ul>
```

---

### 4.2 Vytvorenie zložitejšej štruktúry

**📌 Príklad: Vytvorenie kompletnej úlohy v Todo aplikácii**

```html
<!-- To, čo chceme vytvoriť: -->
<li class="task-item">
  <input type="checkbox" class="task-checkbox">
  <span class="task-text">Kúpiť mlieko</span>
  <button class="delete-button">Zmazať</button>
</li>
```
Pozri kód 05_aplikacia_pripomienky

```javascript
// 1. Vytvorenie hlavného <li> elementu
const newLi = document.createElement('li'); // Vytvoríme prázdny <li> element v pamäti
newLi.className = 'task-item'; // Nastavíme mu CSS class "task-item"

// 2. Vytvorenie checkboxu
const newInput = document.createElement('input'); // Vytvoríme prázdny <input> element
newInput.type = 'checkbox'; // Zmeníme typ inputu na checkbox
newInput.className = 'task-checkbox'; // Nastavíme mu CSS class "task-checkbox"

// 3. Vytvorenie span s textom úlohy
const newSpan = document.createElement('span'); // Vytvoríme prázdny <span> element
newSpan.textContent = taskText; // Nastavíme text, ktorý užívateľ napísal do inputu
newSpan.className = 'task-text'; // Nastavíme mu CSS class "task-text"

// 4. Vytvorenie tlačidla na zmazanie
const newButton = document.createElement('button'); // Vytvoríme prázdny <button> element
newButton.textContent = 'Zmazať'; // Nastavíme text, ktorý sa zobrazí na tlačidle
newButton.className = 'delete-button'; // Nastavíme mu CSS class "delete-button"

// 5. Vloženie všetkých častí do <li>
newLi.appendChild(newInput);  // Vložíme checkbox do <li> ako prvé dieťa
newLi.appendChild(newSpan);   // Vložíme span s textom za checkbox
newLi.appendChild(newButton); // Vložíme tlačidlo na koniec <li>

// 6. Pridanie celej úlohy do zoznamu
const taskList = document.getElementById('taskList'); // Vyberieme <ul> element zo stránky
taskList.appendChild(newLi); // Pridáme hotovú <li> do zoznamu (teraz sa zobrazí na stránke)
```

**Výsledok:** Nová úloha sa objaví v zozname!. 🎉


---

## 5. Odstránenie elementov 🗑️

### 5.1 `.remove()` - odstránenie seba samého

```javascript
const element = document.getElementById('staryElement');
element.remove(); // element sa zmaže
```

**📌 Praktický príklad: Zmazanie úlohy po kliknutí na tlačidlo**

```javascript
newButton.addEventListener('click', () => {
  newLi.remove(); // zmaže celú <li> (checkbox, text, tlačidlo)
});
```

---

## 6. Zmena štýlov (CSS) 🎨



### 6.1 `.classList` - práca s class (ODPORÚČANÉ) ✅

Namiesto priameho nastavovania štýlov je lepšie používať **CSS triedy**. Už iba existujce triedy priradíme elementu, alebo mu triedu odoberieme. Prípadne ak element triedu má, tak mu ju odoberie ak nie je, pridá v jednom kroku (toggle).

```javascript
const element = document.querySelector('.task-item');

// Pridanie class
element.classList.add('completed');

// Odstránenie class
element.classList.remove('completed');

// Prepnutie class (ak je, odstráni; ak nie je, pridá)
element.classList.toggle('completed');

// Kontrola, či má class
if (element.classList.contains('completed')) {
  console.log('Úloha je hotová!');
}
```

**📌 Praktický príklad: Označenie úlohy ako hotovej**

```html
<!-- CSS -->
<style>
.task-item.completed {
  text-decoration: line-through;
  opacity: 0.5;
}
</style>
```

```javascript
// JavaScript - kliknutie na checkbox
checkbox.addEventListener('change', () => { //ak sa zmenil typ udalosti 
  if (checkbox.checked) {
    newLi.classList.add('completed'); // pridá škrtnutie
  } else {
    newLi.classList.remove('completed'); // odstráni škrtnutie
  }
});
```

---

## 7. Event Listeners - reagovanie na akcie 🖱️

### 7.1 `.addEventListener()` - základné použitie

```javascript
const button = document.getElementById('addButton');

button.addEventListener('click', () => {
  console.log('Tlačidlo bolo kliknuté!');
});
```

**Syntax:**
```javascript
element.addEventListener('typUdalosti', funkcia);
```

---

### 7.2 Najpoužívanejšie eventy

| Event | Kedy sa spustí |
|-------|----------------|
| `'click'` | Kliknutie na element |
| `'input'` | Zmena hodnoty v input poli |
| `'change'` | Zmena hodnoty (checkbox, select) |
| `'submit'` | Odoslanie formulára |
| `'keydown'` | Stlačenie klávesy |
| `'keyup'` | Uvoľnenie klávesy |
| `'mouseover'` | Prejdenie myšou cez element |
| `'mouseout'` | Odídenie myšou z elementu |

---

### 7.3 Praktické príklady z cvičení

**📌 Príklad 1: Pridanie úlohy po kliknutí na tlačidlo**
```javascript
const addButton = document.getElementById('addButton');

addButton.addEventListener('click', () => {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value;
  
  if (!taskText) {
    return; // Ak je prázdny input, neskoč
  }
  
  // Vytvorenie novej úlohy...
});
```

## 8. Validácia vstupu ✅

### 8.1 Kontrola prázdneho inputu

```javascript
const taskInput = document.getElementById('taskInput');
const taskText = taskInput.value;

// Kontrola 1: Porovnanie s prázdnym stringom
if (taskText === "") {
  console.log("Input je prázdny!");
  return;
}

// Kontrola 2: Falsy hodnota (kratšie)
if (!taskText) {
  console.log("Input je prázdny!");
  return;
}

// Kontrola 3: Trimnutie (odstránenie medzier)
if (taskText.trim() === "") {
  console.log("Input obsahuje len medzery!");
  return;
}
```


---

## 9. Vlastnosti vs. Metódy - kedy `=` a kedy `()` 🔑

**Základný rozdiel:**

### 📦 VLASTNOSTI (properties) - používame `=`
Vlastnosť = hodnota, ktorú môžeš **čítať** aj **meniť**. Ako premenná v objekte.

```javascript
// ČÍTANIE vlastnosti (bez =)
const text = element.textContent; // prečíta hodnotu
const hodnota = input.value;

// NASTAVENIE vlastnosti (s =)
element.textContent = "Nový text"; // nastaví hodnotu
input.value = "Ahoj";
element.className = "active";
element.id = "mojId";
checkbox.checked = true;
```

### 🔨 METÓDY (methods) - používame `()`
Metóda = funkcia, ktorá **niečo vykoná**. Ako príkaz.

```javascript
// VYKONANIE metódy - vždy s ()
element.appendChild(dieťa);        // pridaj element
element.remove();                  // zmaž sa
element.addEventListener('click', fn); // počúvaj na kliknutie
document.createElement('div');     // vytvor element
element.classList.add('active');   // pridaj class
element.classList.toggle('active'); // prepni class
```

### 💡 Ako to rozpoznať?

| Ak chceš... | Použiješ... | Príklad |
|-------------|-------------|---------|
| **Prečítať hodnotu** | Vlastnosť (bez `=`) | `const text = input.value;` |
| **Nastaviť hodnotu** | Vlastnosť (s `=`) | `input.value = "text";` |
| **Vykonať akciu** | Metódu (s `()`) | `element.remove();` |
| **Pridať/odobrať niečo** | Metódu (s `()`) | `list.appendChild(item);` |

### ⚠️ Časté chyby:

```javascript
// ❌ CHYBA - zabudnuté zátvorky pri metóde
element.remove;  // nedeje sa nič! (len odkáže na funkciu)

// ✅ SPRÁVNE
element.remove(); // vykoná sa zmazanie

// ❌ CHYBA - zátvorky pri vlastnosti
element.textContent(); // CHYBA! textContent nie je funkcia

// ✅ SPRÁVNE
element.textContent = "text"; // nastavenie
const text = element.textContent; // čítanie
```

**Pravidlo:** Ak to **robí akciu** (pridaj, zmaž, počúvaj) → **metóda** `()`. Ak to **je hodnota** (text, farba, ID) → **vlastnosť** `=`.

---

## 10. Časté chyby a riešenia ⚠️

### ❌ Chyba 1: Element neexistuje (null)

```javascript
const button = document.getElementById('nejsem');
console.log(button); // null

button.addEventListener('click', () => {}); // ❌ CHYBA! Cannot read property of null
```

**✅ Riešenie: Vždy skontroluj, či element existuje**
```javascript
const button = document.getElementById('nejsem');

if (button) {
  button.addEventListener('click', () => {});
} else {
  console.log('Element neexistuje!');
}
```

---

### ❌ Chyba 2: Zabudnutie `.value` pri čítaní inputu

```javascript
const taskInput = document.getElementById('taskInput');

// ❌ CHYBA
const text = taskInput; // Vráti element, nie text!

// ✅ SPRÁVNE
const text = taskInput.value; // Vráti reťazec
```

---

### ❌ Chyba 3: ID s # v `getElementById()`

```javascript
// ❌ CHYBA
const button = document.getElementById('#addButton');

// ✅ SPRÁVNE
const button = document.getElementById('addButton'); // BEZ #
```

---

### ❌ Chyba 4: Zabudnutie `document.` pred `getElementById`

```javascript
// ❌ CHYBA
const button = getElementById('addButton');

// ✅ SPRÁVNE
const button = document.getElementById('addButton');
```

---

### ❌ Chyba 5: Vytvorenie elementu, ale nepridanie do DOM

```javascript
// Element je vytvorený, ale nie je viditeľný!
const newLi = document.createElement('li');
newLi.textContent = 'Úloha';

// ✅ Musíme ho pridať do DOM
taskList.appendChild(newLi); // Teraz sa zobrazí
```

---

## 11. Zhrnutie 📋

### Výber elementov:
```javascript
document.getElementById('id')           // jeden element podľa ID
document.querySelector('.class')        // prvý element podľa selektora
document.querySelectorAll('.class')     // všetky elementy (NodeList)
```

### Čítanie/zmena obsahu:
```javascript
element.textContent = "text"    // čistý text
element.innerHTML = "<b>html</b>"  // HTML kód
input.value                      // hodnota inputu
```

### Vytváranie elementov:
```javascript
const el = document.createElement('div')  // vytvorenie
el.textContent = "obsah"                  // nastavenie textu
el.className = "trieda"                   // nastavenie class
parent.appendChild(el)                    // pridanie do DOM
```

### Odstránenie:
```javascript
element.remove()                // odstránenie seba
parent.removeChild(child)       // odstránenie dieťaťa
```

### Štýly:
```javascript
element.style.color = "red"         // priame nastavenie CSS
element.classList.add("active")     // pridanie class
element.classList.remove("active")  // odstránenie class
element.classList.toggle("active")  // prepnutie class
```

### Event Listeners:
```javascript
element.addEventListener('click', () => {
  // kód, ktorý sa vykoná po kliknutí
})
```

---

## 12. Ďalšie zdroje 🔗

- [MDN: DOM Manipulation - klikni do stránky pravý tlačidlom myši > Preložiť](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)


---

**✅ Ak niečomu nerozumieš, vráť sa k praktickým príkladom z cvičení (zmena farby, todo aplikácia) a skús si to rozpisať krok za krokom!**
