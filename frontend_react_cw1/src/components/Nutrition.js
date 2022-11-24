import React from "react";

//Displays nutrition
const Nutrition = ({ item }) => {
    return (
        <div>
            <ul style={{ listStyle: "none", padding: '0' }}>
                <li className="recipe-ingredient-list-element">Calories: {item.calories} kcal</li>
                <li className="recipe-ingredient-list-element">Protein: {item.protein_g}g</li>
                <li className="recipe-ingredient-list-element">Carbohydrates: {item.carbohydrates_total_g}g</li>
                <li className="recipe-ingredient-list-element">Sugar: {item.sugar_g}g</li>
                <li className="recipe-ingredient-list-element">Fiber: {item.fiber_g}g</li>
                <li className="recipe-ingredient-list-element">Fat: {item.fat_total_g}g</li>
                <li className="recipe-ingredient-list-element">Saturated fat: {item.fat_saturated_g}g</li>
            </ul>
        </div>
    );
};

export default Nutrition;