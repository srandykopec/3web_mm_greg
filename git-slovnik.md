# Git & GitHub slovníček 🚀

## Základy základov

### Repozitár (repo)
Fancy názov pre priečinok s tvojím projektom. Git si v ňom pamätá všetky zmeny, čo si kedy urobil. Je to ako Instagram, ale pre kód - máš tam celú históriu. Môže byť na tvojom PC (lokálny) alebo na GitHube (vzdialený).

### Clone 🐑
Skopíruješ si celý projekt z GitHubu k sebe na počítač. Urobíš to raz na začiatku. Je to ako keď si stiahneš film - máš vlastnú kópiu.

### Commit 💾
Uložíš zmeny s popiskou typu "pridal som menu" alebo "fixed bug lol". Je to ako checkpoint v hre - môžeš sa kedykoľvek vrátiť. Zatiaľ to je iba u teba na PC, nikto iný to nevidí.

### Push ⬆️
Uploadneš svoje commity na GitHub. Teraz to vidia všetci. Je to ako keď postneš story - až teraz je to online.

### Pull ⬇️
Stiahneš si zmeny, čo urobili iní. Niekto pushol nový kód? Ty si ho pullneš k sebe. Je to ako refresh na Instagrame - vidíš nové veci.

---

## Keď pracuješ v tíme

### Branch (vetva) 🌿
Vytvoríš si vlastnú paralelnu verziu projektu. Môžeš tam experimentovať a nič nepokazíš v hlavnom projekte. Hlavná vetva sa volá `main`. Tvoja pracovná môže byť `nova-funkcia` alebo `adam-upravy`.

**Analógia:** Je to ako keby si hral Minecraft - máš hlavný svet (main) a creative mód na testovanie (tvoja branch).

### Merge 🔀
Zlúčiš dve vetvy dokopy. Keď si hotový s tvojou branchom, merguješ ju do `main`. Všetko sa spojí.

### Pull Request (PR) 🙋
Požiadaš ostatných: "Yo, pozrite sa na môj kód, môžem to dať do main?" Niekto to schváli alebo ti napíše, čo treba zmeniť. Je to ako keď pošleš draft na approval učiteľovi.

### Fork 🍴
Skopíruješ si celý cudzí projekt na svoj GitHub účet. Môžeš ho upravovať bez toho, aby si pokazil originál. Používa sa hlavne pri open-source projektoch.

**Fun fact:** Preto sa volá "fork" (vidlička) - oddelíš časť od originálu.

---

## GitHub features

### Issues 📝
To-do list projektu. Niekto nájde bug? Vytvorí issue. Máš nápad na novú funkciu? Issue. Je to ako comment section, ale pre problémy a nápady.

**Príklad:** "Tlačidlo Submit nefunguje na mobile 📱"

### Release 📦
Oficiálna verzia tvojho projektu. Typ "verzia 1.0 je hotová, download here". Používa sa, keď chceš, aby si ľudia stiahli spustiteľnú appku.

### README.md 📄
Prvá stránka tvojho projektu. Vysvetlíš tam, čo tvoj projekt robí a ako ho spustiť. Je to ako bio na Instagrame - prvá vec, čo ľudia uvidia.

**Pro tip:** Použi emoji a screenshots, aby to nevyzeralo nudne.

---

## Stavy súborov

### Staged (pripravený na commit)
Súbor je ready na commit. Vo VS Code má zelené "+" pri názve. Je to ako keď máš story ready, ale ešte si ju nepostol.

### Untracked (nesledovaný)
Nový súbor, o ktorom Git ani nevie. Musíš mu povedať "hey, sleduj toto".

### Modified (zmenený)
Zmenil si súbor, ale ešte si ho necommitol. Git vie, že je iný, ale zmeny nie sú uložené v histórii.

---

## Základný workflow (ako to funguje)

```
1. Clone repo z GitHubu
   ↓
2. Urob zmeny v kóde
   ↓
3. Commit (ulož lokálne)
   ↓
4. Pull (stiahni zmeny od ostatných)
   ↓
5. Push (uploadni svoje zmeny)
   ↓
6. Repeat 🔄
```

---

## Konflikt (merge conflict) ⚠️

Čo sa stane, keď ty aj kamoš zmeníte ten istý riadok kódu? Git nevie, ktorú verziu chceš, tak ti povie: "Vyber si sám, bro."

VS Code ti ukáže:
```
<<<<<<< HEAD
tvoja verzia
=======
kamoškova verzia
>>>>>>> origin/main
```

Vybereš si, čo chceš ponechať, a hotovo.

---

## Zlaté pravidlá

✅ **Vždy Pull pred Push** - inak budeš mať konflikt  
✅ **Píš normálne commit správy** - nie "asdf" ale "pridané menu"  
✅ **Commituj často** - radšej 10 malých než 1 mega commit  
✅ **Nemiešaj merge konflikty** - keď nevieš, spýtaj sa  

---

**TL;DR:** Git = časový stroj pre kód. GitHub = sociálna sieť pre programátorov. 🎮