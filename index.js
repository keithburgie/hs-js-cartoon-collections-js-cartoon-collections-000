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

const eteerCalls = ["earth", "wind", "fire", "water", "heart"]
function longPlaneteerCalls(words) {
  for (let i = 0; i < words; i++) {
    if (words[i].length > 4) {
      return true;
    } else {
      return false;
    }
  }
}
longPlaneteerCalls(eteerCalls);


function findTheCheese (foods) {
}
