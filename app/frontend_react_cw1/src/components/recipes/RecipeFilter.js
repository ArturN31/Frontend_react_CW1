import React, { useState } from "react";
import { Row, Col, Form } from 'react-bootstrap';
import RecipeOutput from './RecipeOutput';

const RecipeFilter = ({data}) => {
    const [searchField, setSearchField] = useState("");
    const [filterString, setFilterString] = useState("");
    const [cardAmount, setCardAmount] = useState(5);

    //Filtering recipes by title
    const recipeFilter = data.filter((entry) => {
        let recipe = entry.title.toLowerCase().includes(searchField.toLowerCase());
        if (recipe){return recipe;}
        return null;
    });

    //Recipes filtered previously by title are now filtered by ingredient
    const ingredientFilter = recipeFilter.filter((entry) => {
        let filter = filterString.split(',');
        let filterArray = [];
        let recipeIngredients = entry.ingredients;
        let recipeIngredientsArray = [];

        filter.forEach(element => { //filter inredients input into array
            filterArray.push(element.trim().toLowerCase());
        });

        recipeIngredients.forEach(element => { //ingredient names into array
            recipeIngredientsArray.push(element.name.trim().toLowerCase());
        });

        //creating a string containing ingredients
        let ingredientsString = "";
        for (let i = 0; i <= entry.ingredients.length - 1; i++) {
            if (i !== entry.ingredients.length - 1) {
                ingredientsString += entry.ingredients[i].name + ', ';
            } else {
                ingredientsString += entry.ingredients[i].name;
            }   
        }

        const ingredients = ingredientsString.includes(filterArray); //initial output
        const found = recipeIngredientsArray.some(res => filterArray.includes(res)); //checking if recipeIngredientsArray values are included in filterArray

        //returning ingredients and found to display filtered recipes
        if (found){return found;}
        else {return ingredients;}
    })
    
    return (
        <>
            <Row id='search-container'>
                <>
                    {/* Input boxes for recipe and ingredients */}
                    <Col xs={12} className='search-col'>
                        <h2 className='search-heading'>Search for a recipe:</h2>
                        <div xs={12} className='input-container'>
                            <input 
                                type='text' 
                                placeholder='Search recipe' 
                                className='search-input form-control'
                                onChange={(e) => setSearchField(e.target.value)}
                            />
                        </div>
                    </Col>
                    <Col xs={12} className='search-col'>
                        <h2 className='search-heading'>Filter ingredients:</h2>
                        <div xs={12} className='input-container'>
                            <input 
                                type='text' 
                                placeholder='Enter ingredients (heavy cream, sugar, etc.)' 
                                className='search-input form-control'
                                onChange={(e) => setFilterString(e.target.value)}
                            />
                        </div>
                    </Col>
                    {/* Amount of displayed cards */}
                    <Col xs={12} className='search-col'>
                        <h2 className='search-heading'>Displayed recipes:</h2>
                        <div id='select-container'>
                            <Form.Select 
                                size="sm" 
                                id='select-cards-amount' 
                                style={{marginBottom: '10px'}} 
                                onChange={(e) => setCardAmount(e.target.value)} 
                                defaultValue={5}
                            >
                                <option className='select-option' value="0">Hide recipes</option>
                                <option className='select-option' value="5">5</option>
                                <option className='select-option' value="10">10</option>
                                <option className='select-option' value={data.length}>All</option>
                            </Form.Select>
                        </div>
                    </Col>
                </>
            </Row>
            <RecipeOutput ingredientFilter={ingredientFilter} cardAmount={cardAmount}/>
        </>
    )
};

export default RecipeFilter;