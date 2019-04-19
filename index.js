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

var myStringArray = ["Hello","World"];
    var arrayLength = myStringArray.length;
    for (var i = 0; i < arrayLength; i++) {
        console.log(myStringArray[i]);
        //Do something
    }

var longCalls = ["earth", "wind", "fire", "water", "heart"];
var shortCalls = ["wind", "fire"];
function longPlaneteerCalls(words) {
  for (let i = 0; i < words.length; i++) {
    console.log(`words = ${words[i]}`);
    if (words[i].length > 4) {
      console.log(true)
      return true;
    }
  }
  return false;
}
longPlaneteerCalls(shortCalls);


function findTheCheese (foods) {
}
