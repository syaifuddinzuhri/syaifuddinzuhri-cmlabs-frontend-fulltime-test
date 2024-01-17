type Recipe = {
  [key: string]: string;
};

const combineIngredientsAndMeasures = (
  recipe: Recipe
): { ingredient: string; measure: string }[] => {
  const combinedArray = [];

  let ingredientCount = 0;

  for (const key in recipe) {
    if (recipe.hasOwnProperty(key) && key.startsWith("strIngredient")) {
      ingredientCount++;
    }
  }

  for (let i = 1; i <= ingredientCount; i++) {
    const ingredientKey = `strIngredient${i}`;
    const measureKey = `strMeasure${i}`;

    if (recipe[ingredientKey] && recipe[measureKey]) {
      combinedArray.push({
        ingredient: recipe[ingredientKey],
        measure: recipe[measureKey],
      });
    }
  }

  return combinedArray;
};

export const combineRecipes = (data: any) => {
  const combinedIngredientsAndMeasures = combineIngredientsAndMeasures(data);
  return combinedIngredientsAndMeasures;
};


export function getYouTubeVideoId(url: string) {
  const regex = /[?&]v=([^#&?]+)/;
  const match = url.match(regex);

  return match && match[1] ? match[1] : null;
}
