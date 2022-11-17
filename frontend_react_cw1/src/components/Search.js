import React, { useState } from "react";
import { Row, Col } from 'react-bootstrap';
import RecipeOutput from './RecipeOutput';

const Search = ({data}) => {
    const [searchField, setSearchField] = useState("");
    const [filterString, setFilterString] = useState("");
    const [cardAmount, setCardAmount] = useState(5);

    const recipeFilter = data.filter((entry) => {
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
            {/* Input boxes for recipe and ingredients */}
            <Row>
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
            </Row>

            {/* Amount of displayed cards */}
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

            {/* Recipe cards output */}
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