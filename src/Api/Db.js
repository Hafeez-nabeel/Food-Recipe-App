const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_APIKEY,
    "X-RapidAPI-Host": "recipe-by-api-ninjas.p.rapidapi.com",
  },
  // headers: {
  //   "X-RapidAPI-Key": process.env.REACT_APP_APIKEY,
  //   // 'X-RapidAPI-Key': ,
  //   "X-RapidAPI-Host": "nutrition-by-api-ninjas.p.rapidapi.com",
  // },
};
export const fetchRecipe = async (recipe) => {
  const url = `https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=${recipe}`;
  // const url = `https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=${recipe}`;
  let result;
  try {
    const response = await fetch(url, options);
    result = await response.text();
    // console.log(result);
  } catch (error) {
    console.error(error);
  }
  return JSON.parse(result);
};
