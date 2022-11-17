import React from "react";

//Displays nutrition
const Nutrition = ({ item }) => {
    return (
        <div>
            <ul style={{ listStyle: "none", padding: '0' }}>
                <li className="recipe-ingredient-list-element">Calories: {item.calories}</li>
                <li className="recipe-ingredient-list-element">Total carbohydrates: {item.carbohydrates_total_g}g</li>
                <li className="recipe-ingredient-list-element">Sugar content: {item.sugar_g} g</li>
                <li className="recipe-ingredient-list-element">Fiber: {item.fiber_g}g</li>
                <li className="recipe-ingredient-list-element">Total fat content: {item.fat_total_g} g</li>
                <li className="recipe-ingredient-list-element">Protein content: {item.protein_g}g</li>

                {/* <li className="recipe-ingredient-list-element">Serving size: {item.serving_size_g} g</li>
                <li>Saturated fat content per serving: {item.fat_saturated_g}g</li>
                <li>Sodium per serving: {item.sodium_mg}mg</li>
                <li>Potassium per serving: {item.potassium_mg}mg</li>
                <li>Cholesterol per serving: {item.cholesterol_mg}mg</li> */}
            </ul>
        </div>
    );
};

export default Nutrition;