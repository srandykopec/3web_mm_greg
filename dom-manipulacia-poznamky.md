# DOM Manipulácia - Poznámky z cvičení 🎯

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
newLi.textContent = 'Úloha 2';

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
const addButton = document.getElementById('addButton');
const taskInput = document.getElementById('taskInput');

console.log(addButton); // <button id="addButton">Pridať</button>
```

**📌 Príklad z nášho cvičenia (zmena farby pozadia):**
```javascript
const btnModra = document.getElementById("btn-modra");
const btnZelena = document.getElementById("btn-zelena");
const farbaText = document.getElementById("farba-text");
```

**⚠️ Pozor:** 
- ID musí byť **bez `#`** (len `"addButton"`, nie `"#addButton"`)
- Ak element neexistuje, vráti `null`

---

### 1.2 `querySelector()` - výber pomocou CSS selektoru

Vráti **prvý element**, ktorý nájde. Môžeme použiť **akýkoľvek CSS selektor**.

```html
<!-- HTML -->
<button class="btn">Tlačidlo 1</button>
<button class="btn">Tlačidlo 2</button>
```

```javascript
// Výber prvého tlačidla s class="btn"
const tlacitko = document.querySelector('.btn');

// Výber podľa ID (s #)
const addButton = document.querySelector('#addButton');

// Výber podľa tagu
const prvaPolozka = document.querySelector('li');
```

**Kedy použiť:**
- Keď chceme vybrať element podľa **class**
- Keď potrebujeme **zložitejší selektor** (napr. `'.container > .box'`)

---

### 1.3 `querySelectorAll()` - výber viacerých elementov

Vráti **NodeList** (zoznam) všetkých elementov, ktoré vyhovujú.

```javascript
// Vyberie všetky li elementy
const vsetkyUlohy = document.querySelectorAll('li');

// Vyberie všetky elementy s class="task-item"
const vsetkyPolozky = document.querySelectorAll('.task-item');

console.log(vsetkyPolozky.length); // Počet prvkov

// Prechádzanie cez všetky prvky
vsetkyPolozky.forEach((polozka) => {
  console.log(polozka);
});
```

---

## 2. Čítanie a zmena obsahu elementov

### 2.1 `.textContent` - čistý text

```html
<span id="farba-text">červená</span>
```

```javascript
const farbaText = document.getElementById("farba-text");

// Čítanie textu
console.log(farbaText.textContent); // "červená"

// Zmena textu
farbaText.textContent = "modrá";
```

**📌 Príklad z nášho cvičenia (zmena farby):**
```javascript
function zmenaNaModru(){
  document.body.style.backgroundColor = "#3498db";
  farbaText.textContent = "modrá"; // ← zmena textu
}
```

---

### 2.2 `.innerHTML` - HTML kód

```javascript
const container = document.getElementById("container");

// Vloženie HTML
container.innerHTML = "<strong>Tučný text</strong>";

// Pridanie HTML k existujúcemu obsahu
container.innerHTML += "<p>Nový odsek</p>";
```

**⚠️ Rozdiel:**
- `.textContent` = len text (HTML tagy sa nezobrazujú)
- `.innerHTML` = HTML kód (tagy sa vykreslia)

---

### 2.3 `.value` - hodnota inputu

```html
<input type="text" id="taskInput" placeholder="Napíš text...">
```

```javascript
const taskInput = document.getElementById('taskInput');

// Čítanie hodnoty
const text = taskInput.value;
console.log(text); // To, čo užívateľ napísal

// Nastavenie hodnoty
taskInput.value = "Nový text";

// Vymazanie inputu
taskInput.value = "";
```

**📌 Príklad z našej Todo aplikácie:**
```javascript
addButton.addEventListener('click', () => {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value; // ← získanie textu z inputu
  
  if (!taskText) {
    return; // Ak je prázdny, neskoč
  }
  
  // ... vytvorenie úlohy
});
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

```javascript
// Vytvorenie inputu typu checkbox
const newInput = document.createElement('input');
newInput.type = 'checkbox'; // nastavenie typu
newInput.id = 'mojCheckbox';
newInput.className = 'task-checkbox'; // nastavenie class

// Vytvorenie tlačidla s textom
const newButton = document.createElement('button');
newButton.textContent = 'Zmazať';
newButton.className = 'delete-button';

// Vytvorenie span s textom
const newSpan = document.createElement('span');
newSpan.textContent = 'Moja nová úloha';
newSpan.className = 'task-text';
```

**📌 Príklad z našej Todo aplikácie:**
```javascript
let newLi = document.createElement('li');
newLi.textContent = taskText; // nastavenie textu

let newInput = document.createElement('input');
newInput.type = 'checkbox'; // ← nastavenie typu inputu
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

Pridá element ako **posledné dieťa** do rodiča.

```html
<ul id="taskList">
  <li>Existujúca úloha 1</li>
  <li>Existujúca úloha 2</li>
</ul>
```

```javascript
const taskList = document.getElementById('taskList');

// Vytvorenie novej <li>
const newLi = document.createElement('li');
newLi.textContent = 'Nová úloha 3';

// Pridanie do zoznamu
taskList.appendChild(newLi);
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

```javascript
// 1. Vytvorenie hlavného <li> elementu
const newLi = document.createElement('li');
newLi.className = 'task-item';

// 2. Vytvorenie checkboxu
const newInput = document.createElement('input');
newInput.type = 'checkbox';
newInput.className = 'task-checkbox';

// 3. Vytvorenie span s textom úlohy
const newSpan = document.createElement('span');
newSpan.textContent = taskText; // text z inputu
newSpan.className = 'task-text';

// 4. Vytvorenie tlačidla na zmazanie
const newButton = document.createElement('button');
newButton.textContent = 'Zmazať';
newButton.className = 'delete-button';

// 5. Vloženie všetkých častí do <li>
newLi.appendChild(newInput);  // pridanie checkboxu
newLi.appendChild(newSpan);   // pridanie textu
newLi.appendChild(newButton); // pridanie tlačidla

// 6. Pridanie celej úlohy do zoznamu
const taskList = document.getElementById('taskList');
taskList.appendChild(newLi);
```

**Výsledok:** Nová úloha sa objaví v zozname! 🎉

---

### 4.3 `.prepend()` - pridanie na začiatok

```javascript
const taskList = document.getElementById('taskList');
const newLi = document.createElement('li');
newLi.textContent = 'Táto bude prvá';

taskList.prepend(newLi); // pridá na začiatok zoznamu
```

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

### 5.2 `.removeChild()` - odstránenie dieťaťa

Starší (ale stále používaný) spôsob.

```javascript
const taskList = document.getElementById('taskList');
const prvaUloha = taskList.children[0];

taskList.removeChild(prvaUloha); // odstráni prvú úlohu
```

---

## 6. Zmena štýlov (CSS) 🎨

### 6.1 `.style` - priame nastavenie CSS vlastností

```javascript
const box = document.getElementById('box');

box.style.backgroundColor = 'red';
box.style.color = 'white';
box.style.fontSize = '20px';
box.style.padding = '10px';
```

**📌 Príklad z nášho cvičenia (zmena farby pozadia):**
```javascript
function zmenaNaModru(){
  document.body.style.backgroundColor = "#3498db"; // ← zmena farby body
  farbaText.textContent = "modrá";
}

function zmenaNaZelenu(){
  document.body.style.backgroundColor = "#2ecc71"; // ← iná farba
  farbaText.textContent = "zelená";
}
```

**⚠️ Pozor na zápis:**
- CSS: `background-color` → JS: `backgroundColor` (camelCase)
- CSS: `font-size` → JS: `fontSize`

---

### 6.2 `.classList` - práca s class (ODPORÚČANÉ) ✅

Namiesto priameho nastavovania štýlov je lepšie používať **CSS triedy**.

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
checkbox.addEventListener('change', () => {
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

**📌 Príklad 2: Zmena farby po kliknutí**
```javascript
const btnModra = document.getElementById("btn-modra");

btnModra.addEventListener("click", zmenaNaModru);

function zmenaNaModru(){
  document.body.style.backgroundColor = "#3498db";
}
```

**📌 Príklad 3: Zmazanie úlohy**
```javascript
const deleteButton = document.createElement('button');
deleteButton.textContent = 'Zmazať';

deleteButton.addEventListener('click', () => {
  newLi.remove(); // zmaže celú úlohu
});
```

**📌 Príklad 4: Označenie úlohy ako hotovej**
```javascript
const checkbox = document.createElement('input');
checkbox.type = 'checkbox';

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    newLi.classList.add('completed');
  } else {
    newLi.classList.remove('completed');
  }
});
```

---

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

**📌 Príklad z našej Todo aplikácie:**
```javascript
addButton.addEventListener('click', () => {
  const taskText = taskInput.value;
  
  if (!taskText) {
    return; // Ak je prázdny, neskoč ďalej
  }
  
  // Vytvorenie úlohy...
});
```

---

### 8.2 Vymazanie inputu po pridaní

```javascript
addButton.addEventListener('click', () => {
  const taskText = taskInput.value;
  
  if (!taskText) return;
  
  // Vytvorenie úlohy...
  
  // Vymazanie inputu
  taskInput.value = "";
  
  // Fokus späť na input (kurzor)
  taskInput.focus();
});
```

---

## 9. Časté chyby a riešenia ⚠️

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

## 10. Komplexný príklad: Todo aplikácia 📝

**HTML:**
```html
<input type="text" id="taskInput" placeholder="Pridaj novú úlohu...">
<button id="addButton">Pridať</button>
<ul id="taskList"></ul>
```

**JavaScript:**
```javascript
// 1. Výber elementov
const addButton = document.getElementById('addButton');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// 2. Event listener na tlačidlo
addButton.addEventListener('click', () => {
  
  // 3. Získanie textu z inputu
  const taskText = taskInput.value;
  
  // 4. Validácia (kontrola prázdneho vstupu)
  if (!taskText) {
    return; // Ak je prázdny, neskoč
  }
  
  // 5. Vytvorenie hlavného <li> elementu
  const newLi = document.createElement('li');
  newLi.className = 'task-item';
  
  // 6. Vytvorenie checkboxu
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'task-checkbox';
  
  // Event listener - označenie ako hotovej
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      newLi.classList.add('completed');
    } else {
      newLi.classList.remove('completed');
    }
  });
  
  // 7. Vytvorenie span s textom
  const span = document.createElement('span');
  span.textContent = taskText;
  span.className = 'task-text';
  
  // 8. Vytvorenie tlačidla na zmazanie
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Zmazať';
  deleteButton.className = 'delete-button';
  
  // Event listener - zmazanie úlohy
  deleteButton.addEventListener('click', () => {
    newLi.remove();
  });
  
  // 9. Vloženie všetkých častí do <li>
  newLi.appendChild(checkbox);
  newLi.appendChild(span);
  newLi.appendChild(deleteButton);
  
  // 10. Pridanie úlohy do zoznamu
  taskList.appendChild(newLi);
  
  // 11. Vymazanie inputu
  taskInput.value = "";
  taskInput.focus();
});
```

---

## 11. Zhrnutie - Cheatsheet 📋

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

- [MDN: DOM Manipulation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
- [JavaScript.info: Document](https://javascript.info/document)
- [W3Schools: HTML DOM](https://www.w3schools.com/js/js_htmldom.asp)

---

**✅ Ak niečomu nerozumieš, vráť sa k praktickým príkladom z cvičení (zmena farby, todo aplikácia) a skús si to rozpisať krok za krokom!**
