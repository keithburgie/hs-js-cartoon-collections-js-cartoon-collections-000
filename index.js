function dwarfRollCall(dwarves) {
  let numberedList = [];
  for (let i = 0; i < dwarves.length; i++) {
    numberedList.push(`${i+1}. ${dwarves[i]}`);
  }
  return `${numberedList.join(' ')} `;
}


function summonCaptainPlanet(planeteerCalls){
  let elements = [];
  for (let i = 0; i < planeteerCalls.length; i++) {
    elements.push(`${planeteerCalls[i].toUpperCase()}!`);
  }
  return elements;
}


function longPlaneteerCalls(words) {
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      return true;
    }
  }
  return false;
}


var snacks = ["crackers", "gouda", "thyme"];
var soup = ["tomato soup", "cheddar", "oyster crackers", "gouda"];
var nope = ["eggs", "tacos"];

function findTheCheese (foods) {
  const cheeses = ["chedder", "gouda", "camembert"];
  
  
}
findTheCheese(snacks);