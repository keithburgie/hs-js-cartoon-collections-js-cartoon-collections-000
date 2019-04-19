function dwarfRollCall(dwarves) {
  let numberedList = [];
  for (let i = 0; i < dwarves.length; i++) {
    numberedList.push(`${i+1}. ${dwarves[i]}`);
  }
  return `${numberedList.join(' ')} `;
}


//let m = ["earth", "wind", "fire", "water", "heart"];

function summonCaptainPlanet(planeteerCalls){
  let elements = [];
  for (let i = 0; i < planeteerCalls.length; i++) {
    elements.push(`${planeteerCalls[i].toUpperCase()}!`);
  }
  return elements;
}

//summonCaptainPlanet(m);


function longPlaneteerCalls(words) {
}


function findTheCheese (foods) {
}
