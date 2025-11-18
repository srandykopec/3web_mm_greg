console.log('JS asi už funguje');


const btn = document.getElementById("btn");

const text = document.getElementById("text");

if (btn && text){
    btn.addEventListener("click",() => {
        text.textContent = "Nový obsah, koý som zmenil cez JavaScript!";
    });
}

