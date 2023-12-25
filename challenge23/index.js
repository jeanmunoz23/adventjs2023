
  function organizeChristmasDinner(dishes) {
    let ingredientsMap = new Map();

    for (let dish of dishes) {
      let dishName = dish[0];
      for (let i = 1; i < dish.length; i++) {
        let ingredient = dish[i];
        if (ingredientsMap.has(ingredient)) {
          ingredientsMap.get(ingredient).push(dishName);
        } else {
          ingredientsMap.set(ingredient, [dishName]);
        }
      }
    }

    let sortedIngredients = Array.from(ingredientsMap)
      .filter(([_, value]) => value.length >= 2)
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([ingredient, dishes]) => [ingredient, ...dishes.sort()]);

    return sortedIngredients;
  }

  const dishes = [
    ["christmas turkey", "turkey", "sauce", "herbs"],
    ["cake", "flour", "sugar", "egg"],
    ["hot chocolate", "chocolate", "milk", "sugar"],
    ["pizza", "sauce", "tomato", "cheese", "ham"],
  ];

  console.log(organizeChristmasDinner(dishes));