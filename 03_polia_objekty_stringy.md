# TEÓRIA: Polia, objekty a stringy v JavaScripte

Príprava na prácu s TODO aplikáciou a JSON dátami

---

## 1️⃣ POLIA (Arrays)

### Čo je pole?
Pole je **zoznam hodnôt**. Každá hodnota má svoje **poradové číslo** (index).

### Vytvorenie poľa
```javascript
const ovocie = ['jablko', 'hruška', 'banán'];
const cisla = [10, 20, 30, 40];
const prazdnePole = [];
```

### Prístup k prvkom
```javascript
const ovocie = ['jablko', 'hruška', 'banán'];

console.log(ovocie[0]);  // 'jablko' (prvý prvok, index 0)
console.log(ovocie[1]);  // 'hruška' (druhý prvok, index 1)
console.log(ovocie[2]);  // 'banán' (tretí prvok, index 2)
```

⚠️ **Dôležité:** Index začína od **0**, nie od 1!

### Počet prvkov v poli
```javascript
const ovocie = ['jablko', 'hruška', 'banán'];
console.log(ovocie.length);  // 3
```

### Pridanie prvku na koniec - `.push()`
```javascript
const ovocie = ['jablko', 'hruška'];
ovocie.push('banán');
// Výsledok: ['jablko', 'hruška', 'banán']
```

### Odstránenie prvku - `.splice()`
```javascript
const ovocie = ['jablko', 'hruška', 'banán'];
ovocie.splice(1, 1);  // Zmaž od indexu 1, počet: 1 prvok
// Výsledok: ['jablko', 'banán']
```

**Syntax:** `pole.splice(odKtorehoIndexu, koľkoPrvkovZmazať)`

### Prechádzanie poľa - FOR cyklus
```javascript
const ovocie = ['jablko', 'hruška', 'banán'];

for (let i = 0; i < ovocie.length; i++) {
  console.log(ovocie[i]);
}
// Vypíše:
// jablko
// hruška
// banán
```

### Praktický príklad: Spočítaj všetky kladné čísla
```javascript
const cisla = [10, -5, 20, -3, 15];
let sucet = 0;

for (let i = 0; i < cisla.length; i++) {
  if (cisla[i] > 0) {
    sucet = sucet + cisla[i];
  }
}

console.log(sucet);  // 45
```

### Bežné operácie s poľami

Keď pracuješ s poľami, často potrebuješ:
1. **Filtrovať** - vybrať len niektoré prvky
2. **Transformovať** - zmeniť každý prvok
3. **Hľadať** - nájsť konkrétny prvok
4. **Počítať/Súčet** - spočítať hodnoty

#### 1. FILTROVANIE - vyber len určité prvky

**Čo to je:** Prejdeš pole a vyberieš len prvky, ktoré spĺňajú podmienku.

**Kedy sa používa:**
- Zobraz len dokončené úlohy
- Zobraz len produkty lacnejšie ako 10€
- Zobraz len študentov s jednotkou

**Príklad: Vyber len párne čísla**
```javascript
const cisla = [1, 2, 3, 4, 5, 6];
const parne = [];  // Nové pole pre výsledok

// Prejdi všetky čísla
for (let i = 0; i < cisla.length; i++) {
  // Ak je číslo párne, pridaj ho do nového poľa
  if (cisla[i] % 2 === 0) {
    parne.push(cisla[i]);
  }
}

console.log(parne);  // [2, 4, 6]
```

**Príklad: Vyber len aktívne úlohy**
```javascript
const ulohy = [
  { text: 'Domáca úloha', dokoncene: false },
  { text: 'Cvičiť', dokoncene: true },
  { text: 'Nakúpiť', dokoncene: false }
];

const aktivne = [];

for (let i = 0; i < ulohy.length; i++) {
  if (ulohy[i].dokoncene === false) {
    aktivne.push(ulohy[i]);
  }
}

// Výsledok: [
//   { text: 'Domáca úloha', dokoncene: false },
//   { text: 'Nakúpiť', dokoncene: false }
// ]
```

#### 2. TRANSFORMÁCIA - zmeň každý prvok

**Čo to je:** Prejdeš pole a vytvoríš nové pole, kde každý prvok je **zmenený**.

**Kedy sa používa:**
- Zoznam mien zmeň na VEĽKÉ PÍSMENÁ
- Ceny v eurách zmeň na koruny
- Z objektov vyber len jednu vlastnosť

**Príklad: Všetky čísla vynásob 2**
```javascript
const cisla = [1, 2, 3, 4];
const dvojnasobky = [];

for (let i = 0; i < cisla.length; i++) {
  dvojnasobky.push(cisla[i] * 2);
}

console.log(dvojnasobky);  // [2, 4, 6, 8]
```

**Príklad: Zo študentov vyber len mená**
```javascript
const studenti = [
  { meno: 'Peter', vek: 16 },
  { meno: 'Jana', vek: 15 },
  { meno: 'Marek', vek: 16 }
];

const mena = [];

for (let i = 0; i < studenti.length; i++) {
  mena.push(studenti[i].meno);
}

console.log(mena);  // ['Peter', 'Jana', 'Marek']
```

#### 3. HĽADANIE - nájdi konkrétny prvek

**Čo to je:** Prejdeš pole a **nájdeš prvý** prvok, ktorý spĺňa podmienku.

**Kedy sa používa:**
- Nájdi študenta s menom "Peter"
- Nájdi prvé číslo väčšie ako 100
- Nájdi úlohu s konkrétnym ID

**Príklad: Nájdi prvé číslo väčšie ako 10**
```javascript
const cisla = [5, 8, 12, 20, 3];
let najdene = null;

for (let i = 0; i < cisla.length; i++) {
  if (cisla[i] > 10) {
    najdene = cisla[i];
    break;  // Zastav cyklus, už sme našli
  }
}

console.log(najdene);  // 12
```

**Príklad: Nájdi študenta s menom "Jana"**
```javascript
const studenti = [
  { meno: 'Peter', vek: 16 },
  { meno: 'Jana', vek: 15 },
  { meno: 'Marek', vek: 16 }
];

let student = null;

for (let i = 0; i < studenti.length; i++) {
  if (studenti[i].meno === 'Jana') {
    student = studenti[i];
    break;
  }
}

console.log(student);  // { meno: 'Jana', vek: 15 }
```

#### 4. POČÍTANIE/SÚČET - spočítaj hodnoty

**Čo to je:** Prejdeš pole a **spočítaš** niečo.

**Kedy sa používa:**
- Spočítaj všetky ceny (celková suma)
- Spočítaj koľko študentov má jednotku
- Spočítaj dokončené úlohy

**Príklad: Súčet všetkých čísel**
```javascript
const cisla = [5, 10, 15, 20];
let sucet = 0;

for (let i = 0; i < cisla.length; i++) {
  sucet = sucet + cisla[i];
}

console.log(sucet);  // 50
```

**Príklad: Koľko študentov má jednotku?**
```javascript
const studenti = [
  { meno: 'Peter', znamka: 1 },
  { meno: 'Jana', znamka: 2 },
  { meno: 'Marek', znamka: 1 }
];

let pocetJednotkarov = 0;

for (let i = 0; i < studenti.length; i++) {
  if (studenti[i].znamka === 1) {
    pocetJednotkarov = pocetJednotkarov + 1;
  }
}

console.log(pocetJednotkarov);  // 2
```

**Príklad: Priemerný vek študentov**
```javascript
const studenti = [
  { meno: 'Peter', vek: 16 },
  { meno: 'Jana', vek: 15 },
  { meno: 'Marek', vek: 17 }
];

let sucetVekov = 0;

for (let i = 0; i < studenti.length; i++) {
  sucetVekov = sucetVekov + studenti[i].vek;
}

const priemernyVek = sucetVekov / studenti.length;
console.log(priemernyVek);  // 16
```

### Zhrnutie bežných operácií

| Operácia | Čo robí | Výsledok |
|----------|---------|----------|
| **Filtrovanie** | Vyber len niektoré prvky | Menšie pole |
| **Transformácia** | Zmeň každý prvok | Pole rovnakej veľkosti, ale zmené hodnoty |
| **Hľadanie** | Nájdi jeden konkrétny prvok | Jeden prvok (alebo null) |
| **Počítanie/Súčet** | Spočítaj hodnoty | Jedno číslo |

**Dôležité:** Všetky tieto operácie používajú **for cyklus + if podmienku**!

---

### 🚀 POKROČILÉ: Kratšie alternatívy (.filter, .map)

JavaScript má **zabudované metódy**, ktoré robia to isté ako FOR cykly, ale **kratšie**.

⚠️ **Dôležité:** Musíš najprv rozumieť FOR cyklom! Tieto metódy sú len **skratka**.

#### .filter() - kratšia alternatíva na filtrovanie

**FOR cyklus:**
```javascript
const cisla = [1, 2, 3, 4, 5, 6];
const parne = [];

for (let i = 0; i < cisla.length; i++) {
  if (cisla[i] % 2 === 0) {
    parne.push(cisla[i]);
  }
}
```

**`.filter()` - to isté, kratšie:**
```javascript
const cisla = [1, 2, 3, 4, 5, 6];
const parne = cisla.filter(function(cislo) {
  return cislo % 2 === 0;
});
```

**Ešte kratšie (arrow funkcia):**
```javascript
const parne = cisla.filter(cislo => cislo % 2 === 0);
//                          ↑      ↑
//                          |      |
//                     parameter   kde sa použije
```

💡 **Čo je `cislo`?** Je to **parameter funkcie** - automaticky dostáva hodnotu každého prvku z poľa `cisla`.

**Všetky 3 spôsoby dajú:** `[2, 4, 6]`

#### .map() - kratšia alternatíva na transformáciu

**FOR cyklus:**
```javascript
const cisla = [1, 2, 3, 4];
const dvojnasobky = [];

for (let i = 0; i < cisla.length; i++) {
  dvojnasobky.push(cisla[i] * 2);
}
```

**`.map()` - to isté, kratšie:**
```javascript
const cisla = [1, 2, 3, 4];
const dvojnasobky = cisla.map(function(cislo) {
  return cislo * 2;
});
//                             ↑      ↑
//                             |      |
//                        parameter   kde sa použije
```

💡 **Čo je `cislo`?** Je to **parameter funkcie** - automaticky dostáva hodnotu každého prvku z poľa `cisla`.

**Ešte kratšie (arrow funkcia):**
```javascript
const dvojnasobky = cisla.map(cislo => cislo * 2);
```

**Všetky 3 spôsoby dajú:** `[2, 4, 6, 8]`

#### Kedy použiť FOR vs. metódy?

| FOR cyklus | .filter() / .map() |
|------------|-------------------|
| ✅ Začiatočníci - vidíš každý krok | ✅ Pokročilí - kratší kód |
| ✅ Flexibilnejší | ✅ Moderný štýl |
| ❌ Viac písania | ❌ Menej jasné pre začiatočníkov |

**Rada:** Nauč sa najprv FOR cykly! Keď im rozumieš, môžeš prejsť na `.filter()` a `.map()`.

---

## 2️⃣ OBJEKTY (Objects)

### Čo je objekt?
Objekt je **kontajner na údaje**, podobne ako slovník v Pythone. Má **vlastnosti** (properties) s hodnotami.

### Vytvorenie objektu
```javascript
const student = {
  meno: 'Peter',
  vek: 16,
  trieda: '2.A'
};
```

**Anatomia objektu:**
- `meno`, `vek`, `trieda` = **názvy vlastností** (keys)
- `'Peter'`, `16`, `'2.A'` = **hodnoty** (values)
- `:` = oddeľuje názov od hodnoty
- `,` = oddeľuje vlastnosti

### Prístup k vlastnostiam
```javascript
const student = {
  meno: 'Peter',
  vek: 16,
  trieda: '2.A'
};

console.log(student.meno);    // 'Peter'
console.log(student.vek);     // 16
console.log(student.trieda);  // '2.A'
```

### Zmena hodnoty vlastnosti
```javascript
const student = {
  meno: 'Peter',
  vek: 16
};

student.vek = 17;  // Zmenili sme vek
console.log(student.vek);  // 17
```

### Pridanie novej vlastnosti
```javascript
const student = {
  meno: 'Peter',
  vek: 16
};

student.email = 'peter@gmail.com';  // Pridáme novú vlastnosť
console.log(student.email);  // 'peter@gmail.com'
```

### Objekt môže obsahovať rôzne typy hodnôt
```javascript
const uloha = {
  text: 'Naučiť sa JavaScript',  // string
  dokoncene: false,               // boolean
  priorita: 5                     // číslo
};
```

---

## 3️⃣ POLE OBJEKTOV (Array of Objects)



Často potrebujeme **zoznam vecí**, kde každá vec má **viac informácií**. Použijeme **pole objektov**.

### Príklad: Zoznam študentov
```javascript
const studenti = [
  { meno: 'Peter', vek: 16, znamka: 1 },
  { meno: 'Jana', vek: 15, znamka: 2 },
  { meno: 'Marek', vek: 16, znamka: 1 }
];
```

### Prístup k údajom
```javascript
// Prvý študent (index 0)
console.log(studenti[0]);        // { meno: 'Peter', vek: 16, znamka: 1 }
console.log(studenti[0].meno);   // 'Peter'
console.log(studenti[0].vek);    // 16

// Druhý študent (index 1)
console.log(studenti[1].meno);   // 'Jana'
```

### Prechádzanie poľa objektov
```javascript
const studenti = [
  { meno: 'Peter', vek: 16, znamka: 1 },
  { meno: 'Jana', vek: 15, znamka: 2 },
  { meno: 'Marek', vek: 16, znamka: 1 }
];

for (let i = 0; i < studenti.length; i++) {
  const student = studenti[i];
  
  // Spôsob 1: Spájanie cez + (staršie)
  console.log(student.meno + ' má ' + student.vek + ' rokov');
  
  // Spôsob 2: Template string (modernejšie, jednoduchšie)
  console.log(`${student.meno} má ${student.vek} rokov`);
}
// Vypíše:
// Peter má 16 rokov
// Jana má 15 rokov
// Marek má 16 rokov
```

### Príklad: Spočítaj študentov s jednotkou
```javascript
const studenti = [
  { meno: 'Peter', znamka: 1 },
  { meno: 'Jana', znamka: 2 },
  { meno: 'Marek', znamka: 1 }
];

let pocetJednotkarov = 0;

for (let i = 0; i < studenti.length; i++) {
  if (studenti[i].znamka === 1) {
    pocetJednotkarov = pocetJednotkarov + 1;
  }
}

console.log(pocetJednotkarov);  // 2
```

### Pridanie objektu do poľa
```javascript
const studenti = [
  { meno: 'Peter', vek: 16 }
];

const novyStudent = {
  meno: 'Lucia',
  vek: 15
};

studenti.push(novyStudent);
// Výsledok: [
//   { meno: 'Peter', vek: 16 },
//   { meno: 'Lucia', vek: 15 }
// ]
```

### Zmazanie objektu z poľa
```javascript
const studenti = [
  { meno: 'Peter', vek: 16 },
  { meno: 'Jana', vek: 15 },
  { meno: 'Marek', vek: 16 }
];

studenti.splice(1, 1);  // Zmaž od indexu 1, počet: 1 objekt
// Výsledok: [
//   { meno: 'Peter', vek: 16 },
//   { meno: 'Marek', vek: 16 }
// ]
```

### Zmena hodnoty vo vlastnosti objektu v poli
```javascript
const studenti = [
  { meno: 'Peter', vek: 16 },
  { meno: 'Jana', vek: 15 }
];

// Zmeň vek druhého študenta (index 1)
studenti[1].vek = 16;

console.log(studenti[1]);  // { meno: 'Jana', vek: 16 }
```

---

## 4️⃣ STRINGY (Reťazce)

### Čo je string?
String je **text** - postupnosť znakov.

### Vytvorenie stringu
```javascript
const meno = 'Peter';
const veta = "Učím sa JavaScript";
const prazdnyString = '';
```

### Spájanie stringov (konkatenácia)
```javascript
const krstne = 'Peter';
const priezvisko = 'Novák';

const celeMeno = krstne + ' ' + priezvisko;
console.log(celeMeno);  // 'Peter Novák'
```

### Template strings (moderný spôsob)
```javascript
const meno = 'Peter';
const vek = 16;

const veta = `Volám sa ${meno} a mám ${vek} rokov`;
console.log(veta);  // 'Volám sa Peter a mám 16 rokov'
```

⚠️ **Pozor:** Použijeme **spätné úvodzovky** `` ` ` ``, nie `'` ani `"`!

### Dĺžka stringu
```javascript
const text = 'Hello';
console.log(text.length);  // 5
```

### Odstránenie medzier - `.trim()`
```javascript
const text = '   hello   ';
const cisteny = text.trim();
console.log(cisteny);  // 'hello'
```

**Použitie:** Keď užívateľ zadá text do inputu s medzerami na začiatku/konci.

### Zmena na veľké písmená
```javascript
const text = 'hello';
console.log(text.toUpperCase());  // 'HELLO'
```

### Zmena na malé písmená
```javascript
const text = 'HELLO';
console.log(text.toLowerCase());  // 'hello'
```

### Kontrola prázdneho stringu
```javascript
const text = '';

if (text === '') {
  console.log('Text je prázdny');
}

// Alebo kratšie:
if (!text) {
  console.log('Text je prázdny');
}
```


## 7️⃣ CVIČENIA

### Cvičenie 1: Pole čísel
Vytvor pole s číslami `[5, 10, 15, 20, 25]` a vypíš každé číslo for cyklom.

### Cvičenie 2: Objekt
Vytvor objekt `auto` s vlastnosťami: `znacka`, `rok`, `farba`. Vypíš všetky vlastnosti.

### Cvičenie 3: Pole objektov
Vytvor pole 3 áut (každé auto je objekt so značkou a rokom). Vypíš for cyklom značku každého auta.

### Cvičenie 4: Filtrovanie
Máš pole objektov áut. Spočítaj, koľko áut je starších ako rok 2010.

```javascript
const auta = [
  { znacka: 'Škoda', rok: 2015 },
  { znacka: 'Audi', rok: 2008 },
  { znacka: 'BMW', rok: 2020 }
];

---

## 8️⃣ ZHRNUTIE

### Pole
```javascript
const pole = [1, 2, 3];
pole.push(4);           // Pridaj
pole.splice(1, 1);      // Zmaž
pole.length;            // Počet
pole[0];                // Prístup k prvku
```

### Objekt
```javascript
const obj = { meno: 'Peter', vek: 16 };
obj.meno;               // Prístup
obj.vek = 17;           // Zmena
obj.email = 'a@a.sk';   // Pridanie
```

### Pole objektov
```javascript
const data = [
  { meno: 'Peter', vek: 16 },
  { meno: 'Jana', vek: 15 }
];
data[0].meno;           // 'Peter'
data.push({...});       // Pridaj objekt
data.splice(0, 1);      // Zmaž objekt
```

### String
```javascript
const text = 'hello';
text.length;            // 5
text.trim();            // Odstráň medzery
text.toUpperCase();     // HELLO
'a' + 'b';              // 'ab'
`Mám ${vek} rokov`;     // Template string
```


