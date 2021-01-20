export const apiUrl =
  process.env.NODE_ENV === "production"
    ? "https://backend-chefs-choice.herokuapp.com"
    : "http://192.168.178.171:4000";
export const spoonacular_daily = "https://api.spoonacular.com/recipes/random";
export const spoonacular_search = "https://api.spoonacular.com/recipes/findByIngredients";
export const spoonacular_recipe = "https://api.spoonacular.com/recipes";
export const Default_Message_Timeout = 3000;
//limit of 150 api calls per day..
export const key_1 = "3e01ce49b03e4eabbeaae3fd53764503";
export const key_2 = "23fe5b3ccafd42cbb4d6c8919a46521f";
export const key_3 = "896a4255c21e425d90b4450c75c7c2fd";
