import React, { useEffect, useState } from "react";
import { fetchRecipe } from "../Api/Db";
import RecipeDetails from "./RecipeDetails";
import IMG from "../assets/Spinner-1s-200px.svg";

const Recipe = () => {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [empty, setEmpty] = useState(false);

  const getRecipeData = async () => {
    if (!search) {
      setLoading(false);
      return;
    }
    const data = await fetchRecipe(search);
    setLoading(false);
    if (data.length === 0) {
      setEmpty(true);
      setRecipes([]);
    } else {
      setRecipes(data);
    }
    // console.log(recipes);
  };
  // console.log(recipes);
  useEffect(() => {
    setEmpty(false);
    const timer = setTimeout(() => {
      getRecipeData();
    }, 2000);
    return () => clearTimeout(timer);
  }, [search]);
  // recipes.map((item, index) => console.log(item.instructions));
  // return;
  return (
    <div>
      <div className="text-2xl text-center">Food Recipe</div>
      <div>
        <input value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={() => setLoading(true)} type="text" className="w-full outline-none " placeholder="Finde Recipe ....." />
      </div>
      {loading ? (
        <div>
          <img src={IMG} alt="Spinner" className="mx-auto" />
        </div>
      ) : (
        <div>
          {recipes.map((recipe, index) => (
            <RecipeDetails key={index} {...recipe} />
          ))}
        </div>
      )}
      {empty && <p className=" text-center ">Sorry no recipe was found</p>}
    </div>
  );
};

export default Recipe;
