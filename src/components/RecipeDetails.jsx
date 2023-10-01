import React, { useState } from "react";

const RecipeDetails = ({ title, ingredients, servings, instructions }) => {
  // console.log(ingredients);
  const [open, setOpen] = useState(false);
  const formatTextIngredients = ingredients.split("|");
  const formatTextInstructions = instructions.split(".");
  return (
    <div className="border-b-[1px] border-gray-500">
      <div className="flex text-2xl m-2 border-gray-400 hover:text-black">
        <div onClick={() => setOpen((prev) => !prev)} className="capitalize flex-1 hover:cursor-pointer select-none">
          {title}
        </div>
        <div className="italic">{servings}</div>
      </div>

      <div>
        {open && (
          <div className="p-3 bg-white">
            <p className="text-gray-600 underline italic">Ingredients</p>
            {formatTextIngredients.map((ingredient, index) => (
              <p key={index}>{ingredient}</p>
            ))}
            <br />
            <p className="text-gray-600 underline italic">instructions</p>
            {formatTextInstructions.map((instruction, index) => (
              <p key={index}>{instruction}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeDetails;
