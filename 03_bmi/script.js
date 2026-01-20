
const vyska = prompt("Zadaj výšku v metroch");
const vaha = prompt("Zadaj hmotnosť v kilogramoch");

console.log(vaha);
console.log(vyska);

const bmi = vaha / vyska*vyska;

console.log(bmi);

if (bmi < 18.5){
  console.log("Podváha");
} else if (bmi >= 18.5 && bmi < 25){
  console.log("Normálna váha");
} else if (bmi >=25 && bmi < 30){
  console.log("Nadváha");
} else if (bmi >= 30 && bmi < 40){
  console.log("Obezita");
};