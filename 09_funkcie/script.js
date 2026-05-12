
function pozdrav(){
  let vysledok = document.getElementById('vysledok1');
  
  vysledok.textContent = '👍 Mal som ťa pozdraviť, tak ta zdravím';
  
  vysledok.style.color = 'green';
  vysledok.style.fontWeight = 'bold';
}


function zmenFarbuPozadia(){
  const farby = ['#ff6b6b', '#4ecdc4', '#45bd71', '#f7b731', '#a55eea', '#26de81'];

  let vysledok = document.getElementById('vysledok1');


  const nahodnyIndex = Math.floor(Math.random() * farby.length);

  document.body.style.background = farby[nahodnyIndex];

  vysledok.textContent = `Farba pozadia bola zmenena na ${farby[nahodnyIndex]}`;


}



const pozdravBtn = document.getElementById('pozdravBtn');
const zmenFarbuBtn = document.getElementById('zmenFarbuBtn');

pozdravBtn.addEventListener('click',pozdrav)
zmenFarbuBtn.addEventListener('click',zmenFarbuPozadia)