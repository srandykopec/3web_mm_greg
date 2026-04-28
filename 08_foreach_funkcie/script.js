const teploty = [12,5,-6,1,-9,4,8,0];
let spoluTeploty = 0;
let priemer = 0;

// console.log(teploty);
// console.log(`spoluTeploty = spoluTeploty + teplota;`)

teploty.forEach(function(teplota){
  spoluTeploty = spoluTeploty + teplota;
  // console.log(`${spoluTeploty} = ${spoluTeploty} + ${teplota} ;`) // kontrolny vypis

  if (teplota <= 0){
    console.log(`${teplota}°C: Nebezpecenstvo namrazy`);
  } else if (teplota > 0 && teplota <= 4){
    console.log(`${teplota}°C: Kasovita cesta`);
  } else if (teplota > 4){
    console.log(`${teplota}°C: Bez namrazy`);
  }


} );

priemer = spoluTeploty / teploty.length;
// console.log(`Priemerna teplota je ${priemer.toFixed(2)}`);
