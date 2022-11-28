import React from "react";

//Displays nutrition
const NutritionServing = ({ item }) => {
    return (
        <div>
            <span className="recipe-component-titles">Nutrition - per serving:</span>
            <br></br>
            <ul style={{ listStyle: "none", padding: '0' }}>
                <li className="recipe-ingredient-list-element">Calories: {item.calories_serving} kcal</li>
                <li className="recipe-ingredient-list-element">Protein: {item.protein_g_serving}g</li>
                <li className="recipe-ingredient-list-element">Carbohydrates: {item.carbohydrates_total_g_serving}g</li>
                <li className="recipe-ingredient-list-element">Sugar: {item.sugar_g_serving}g</li>
                <li className="recipe-ingredient-list-element">Fiber: {item.fiber_g_serving}g</li>
                <li className="recipe-ingredient-list-element">Fat: {item.fat_total_g_serving}g</li>
                <li className="recipe-ingredient-list-element">Saturated fat: {item.fat_saturated_g_serving}g</li>
            </ul>
        </div>
    );
};

export default NutritionServing;