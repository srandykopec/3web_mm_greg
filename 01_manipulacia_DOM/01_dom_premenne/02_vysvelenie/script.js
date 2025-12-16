// 
// Získanie tlačidla z HTML
// 
const btnModra = document.getElementById("btn-modra");
const btnZelena = document.getElementById("btn-zelena");
let farbaText = document.getElementById("farba-text");


// Funkci pre zmeny farby
function zmenaNaModru(){
  document.body.style.backgroundColor ="#3498db";
  farbaText.textContent = "modrá";
}

function zmenaNaZelenu(){
  document.body.style.backgroundColor ="#2ecc71";
  farbaText.textContent = "zelená";
}

btnModra.addEventListener("click",zmenaNaModru);
btnZelena.addEventListener("click",zmenaNaZelenu);