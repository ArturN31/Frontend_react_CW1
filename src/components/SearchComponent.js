import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import RecipeMap from "./RecipeMap";
import { recipes } from '../data/recipes';

const Search = () => {
    const [searchString, setSearchString] = useState("");
    const [searchField, setSearchField] = useState("");
    const [filterString, setFilterString] = useState("");
    const [cardAmount, setCardAmount] = useState(5);

    function handleClick() {
        setSearchField(searchString)
    }

    const recipeFilter = recipes.filter((entry) => {
        let recipe = entry.title.toLowerCase().includes(searchField.toLowerCase());
        if (recipe){return recipe;}
        return null;
    });

    const ingredientFilter = recipeFilter.filter((entry) => {
        let ingredients = entry.ingredients.toLowerCase().includes(filterString.toLowerCase());
        if (ingredients){return ingredients;}
        return null;
    })
    
    return (
        <>
            <Row>
                <Col xs={12} className='search-col'>
                    <h2 className='search-heading'>Search for a recipe:</h2>
                    <div xs={12} className='input-container'>
                        <input 
                            type='text' 
                            placeholder='Search recipe' 
                            className='search-input form-control'
                            onChange={(e) => setSearchString(e.target.value)}
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
            </Row>
            <Row>
                <Col className='option-col'>
                    <h3 className='option-heading'>Amount of displayed recipes:</h3>
                    <select style={{marginBottom: '10px'}} onChange={(e) => setCardAmount(e.target.value)}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value={ingredientFilter.length}>All</option>
                    </select>
                </Col>
            </Row>
            <Row className='search-button-container'>
                <Button className='search-button' onClick={handleClick}>Search</Button>
            </Row>
            <Row className='recipe-row'>
                <RecipeMap recipeList={ingredientFilter.slice(0,cardAmount)}/>
            </Row>
        </>
    )
};

export default Search;