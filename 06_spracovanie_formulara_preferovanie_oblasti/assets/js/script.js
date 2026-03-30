const form = document.getElementById('newsletterForm');
// v premennej je celý Element formlára

form.addEventListener('submit', handleSubmit);

function handleSubmit(event){

   event.preventDefault(); // Zastaví obnovenie stránky

  const menoInput = document.getElementById('meno');
  const meno = menoInput.value;
  
  const emailInput = document.getElementById('email');
  const email = emailInput.value;


  if (!validujEmail(email)){
    return;
  }

  const vsetkyCheckboxy = document.querySelectorAll('input[type="checkbox"]');

  const poleCheckboxov = Array.from(vsetkyCheckboxy); //prevod nodelisu (získali sme ho querySelectorAll) na pole (aby sme ho mohli filrovať)

  // console.log("Polecheckboxov: " + poleCheckboxov)

  const zaskrtnute = poleCheckboxov.filter(checkbox => checkbox.checked) //vytiahn s poľa checkboxov iba tie, ktoré sú zaškrnuté 

  if (!validujPocetOblasti(zaskrtnute)){
    return;
  };
  


  const vybraneTexy = zaskrtnute.map(checkbox => checkbox.value);

  // console.log('Vybrané témy:', vybraneTexy);
    
  const ineOblasti =  document.getElementById("ineOblasti").value.trim();
    

  if (ineOblasti){ // ak nie je prázdne
    vybraneTexy.push(ineOblasti);  //pridaj mi položku iné do poľa vybraneTexty
  }
    
  const temyText = vybraneTexy.join(', ');
  console.log(temyText);

  function zobrazSpravu(text){
    const spravaElementu = document.getElementById('sprava');

    const odstavec = document.createElement('p');

    odstavec.textContent = text;

    spravaElementu.appendChild(odstavec);

    spravaElementu.className = 'sprava popis';
  }

  zobrazSpravu(`Ďakujem ${meno}, tu sú tvoje preferované oblasti: ${temyText}`);

  
  function validujPocetOblasti(zaskrtnute) {
    if (zaskrtnute.length < 3){
      console.log('Musíš vybrať aspoň 3 oblasti');
      alert('Musíš vybrať aspoň 3 oblasti');
      return false;
    }
    return true;
  }

  function validujEmail(email){
    if (email.includes('@')) || (email.includes('.')){
      alert('Email musí obsahovať @ a bodku.');
      return false;
    }
    return true;
  }

};

