const form = document.getElementById('priklady');
// v premennej je celý Element formlára

form.addEventListener('submit', handleSubmit);

function handleSubmit(event){

   event.preventDefault(); // Zastaví obnovenie stránky

  const cislo_a_input = document.getElementById('cislo_a');
  const cislo_a = cislo_a_input.value;

  // const cislo_b_input = document.getElementById('cislo_b');
  // const cislo_b = cislo_b_input.value;

  // const cislo_c_input = document.getElementById('cislo_c');
  // const cislo_c = cislo_c_input.value;

  console.log(cislo_a)  ;

  


  function zobrazSpravu(text){
    const spravaElementu = document.getElementById('sprava');

    const odstavec = document.createElement('p');

    odstavec.textContent = text;

    spravaElementu.appendChild(odstavec);

    spravaElementu.className = 'sprava popis';
  }

  zobrazSpravu(`Najväčšie číslo je ${cislo_a}`);

}