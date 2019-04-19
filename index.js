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

var longCalls = ["earth", "wind", "fire", "water", "heart"];
var shortCalls = ["wind", "fire"];
function longPlaneteerCalls(words) {
  console.log(`words = ${words}`);
  var array = [];
  console.log(`array = ${array}`);
  for (let i = 0; i < words; i++) {
    console.log(`words = ${words[i]}`);
    if (words[i].length > 4) {
      return true;
    } else {
      return false;
    }
  }
}
longPlaneteerCalls(longCalls);


function findTheCheese (foods) {
}
