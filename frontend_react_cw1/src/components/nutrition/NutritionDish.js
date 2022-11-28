import React from "react";

//Displays nutrition
const NutritionDish = ({ item }) => {
    return (
        <div>
            <span className="recipe-component-titles">Nutrition - entire dish:</span>
            <br></br>
            <ul style={{ listStyle: "none", padding: '0' }}>
                <li className="recipe-ingredient-list-element">Calories: {item.calories_dish} kcal</li>
                <li className="recipe-ingredient-list-element">Protein: {item.protein_g_dish}g</li>
                <li className="recipe-ingredient-list-element">Carbohydrates: {item.carbohydrates_total_g_dish}g</li>
                <li className="recipe-ingredient-list-element">Sugar: {item.sugar_g_dish}g</li>
                <li className="recipe-ingredient-list-element">Fiber: {item.fiber_g_dish}g</li>
                <li className="recipe-ingredient-list-element">Fat: {item.fat_total_g_dish}g</li>
                <li className="recipe-ingredient-list-element">Saturated fat: {item.fat_saturated_g_dish}g</li>
            </ul>
        </div>
    );
};

export default NutritionDish;