import React from "react";

const IngredientsOutput = ({ item }) => {
    //creating ingredientsArray
    let ingredientsArray = [];
    if(item !== undefined) {
        for(let i = 0; i <= item.ingredients.length - 1; i++){
            ingredientsArray.push(item.ingredients[i]);
        }
    }

    return (
        <>
            <span className="recipe-component-titles">
                Ingredients:
            </span><br></br>
            {/* Mapping ingredients */}
            {
                ingredientsArray.map((element, i) => 
                    <li 
                        key={i} 
                        className='recipe-ingredient-list-element'
                    >
                        {element.quantity} {element.name}
                    </li>
                )
            }<br></br>
        </>
    )
}

export default IngredientsOutput; 