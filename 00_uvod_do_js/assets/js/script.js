// Vypíše do konzoly správu, aby sme vedeli, že JavaScript funguje
console.log('JS asi už funguje');


// Získa element s ID "btn" z HTML dokumentu a uloží ho do premennej btn
const btn = document.getElementById("btn");

// Získa element s ID "text" z HTML dokumentu a uloží ho do premennej text
const text = document.getElementById("text");

// Skontroluje, či existujú oba elementy btn a text v dokumente
if (btn && text){
    // Pridá na tlačidlo btn udalosť "click", ktorá sa vykoná po kliknutí
    btn.addEventListener("click",() => {
        // Zmení textový obsah elementu text na nový text
        text.textContent = "Nový obsah, koý som zmenil cez JavaScript!";
        // Prepína triedu alt-bg na elemente body, čo môže meniť štýl pozadia
        document.body.classList.toggle("alt-bg");
    });
}

