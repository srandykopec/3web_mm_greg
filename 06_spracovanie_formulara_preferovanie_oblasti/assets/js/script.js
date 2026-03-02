const form = document.getElementById('newsletterForm');
// v premennej je celý Element formlára

form.addEventListener('submit', handleSubmit);

function handleSubmit(event){

   event.preventDefault(); // Zastaví obnovenie stránky

  const menoInput = document.getElementById('meno');
  const meno = menoInput.value;
  
  const emailInput = document.getElementById('email');
  const email = emailInput.value;

  const vsetkyCheckboxy = document.querySelectorAll('input[type="checkbox"]');

  const poleCheckboxov = Array.from(vsetkyCheckboxy); //prevod nodelisu (získali sme ho querySelectorAll) na pole (aby sme ho mohli filrovať)

  const zaskrtnute = poleCheckboxov.filter(checkbox => checkbox.checked) //vytiahn s poľa checkboxov iba tie, ktoré sú zaškrnuté 

    const vybraneTexy = zaskrtnute.map(checkbox => checkbox.value);
    console.log('Vybrané témy:', vybraneTexy);
};


