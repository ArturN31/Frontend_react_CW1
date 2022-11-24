import React, { useState } from "react";
import { Row, Col, Form } from 'react-bootstrap';
import RecipeOutput from './RecipeOutput';

//Main component that:
//displays input fields for filtering recipes via title and ingredient
//filters recipes - title and then ingredients
//amount of cards - select option
//displays cards based on filtering and amount of cards via component <RecipeOutput/>
const Search = ({data}) => {
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
        let ingredients = entry.ingredients.toLowerCase().includes(filterString.toLowerCase());
        if (ingredients){return ingredients;}
        return null;
    })
    
    return (
        <>
            <Row id='search-container'>
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
                            placeholder='Enter ingredients' 
                            className='search-input form-control'
                            onChange={(e) => setFilterString(e.target.value)}
                        />
                    </div>
                </Col>
                {/* Amount of displayed cards */}
                <Col xs={12} id='select-col'>
                    <h2 id='search-heading'>Amount of displayed recipes:</h2>
                    <div id='select-container'>
                        <Form.Select id='select-cards-amount' style={{marginBottom: '10px'}} onChange={(e) => setCardAmount(e.target.value)} defaultValue={5}>
                            <option className='select-option' value="0">Hide recipes</option>
                            <option className='select-option' value="5">5</option>
                            <option className='select-option' value="10">10</option>
                            <option className='select-option' value={ingredientFilter.length}>All</option>
                        </Form.Select>
                    </div>
                </Col>
            </Row>

            {/* Recipe cards output - displayed amount constrained by slicing the array 0-cardAmount */}
            <Row className='recipe-row'>
                {ingredientFilter.slice(0,cardAmount).map((item, index) => {
                    return (
                        <RecipeOutput item={item} key={index}/>
                    )
                })}
            </Row>
        </>
    )
};

export default Search;