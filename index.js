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


function findTheCheese (foods) {
  
  const cheeses = ["cheddar", "gouda", "camembert"];
  
  for (let i = 0; i < foods.length; i++) {
    // indexOf returns a number, representing the 
    // position where the specified searchvalue occurs 
    // for the first time, or -1 if it never occurs
    if (cheeses.indexOf(foods[i]) > -1) {
      return foods[i];
    }
  }
  return "no cheese!";
}