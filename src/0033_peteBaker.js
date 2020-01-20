// level 5kyu
// https://www.codewars.com/kata/525c65e51bf619685c000059

// if recipe key not in available keys, return 0
// divide every available value with respective recipe value
// if division is the lowest, set it as new response
// return response

function cakes(recipe, available) {
  const recipeKeys = Object.keys(recipe);

  let howMany = null;

  for (let i = 0; i < recipeKeys.length; i++) {
    const currentRecipeVal = recipe[recipeKeys[i]];
    const currentAvailableVal = available[recipeKeys[i]];
    if (currentAvailableVal === undefined) return 0;

    const aux = Math.floor(currentAvailableVal / currentRecipeVal);
    if (howMany === null) {
      howMany = aux;
    } else {
      howMany = (aux < howMany) ? aux : howMany;
    }
  }

  return howMany;
}

console.log(cakes({ flour: 500, sugar: 200, eggs: 1 }, {
  flour: 1200, sugar: 1200, eggs: 5, milk: 200,
})); // 2

console.log(cakes({
  apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100,
}, { sugar: 500, flour: 2000, milk: 2000 })); // 0


// other solution from codewars

function cakes2(recipe, available) {
  return Object.keys(recipe).reduce((
    val, ingredient,
  ) => Math.min(
    Math.floor(available[ingredient] / recipe[ingredient] || 0), val,
  ), Infinity);
}
