import React, { useState } from "react";
import { Row, Col, Form, Button } from 'react-bootstrap';
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
    const [isClicked, setIsClicked] = useState(true);

    const handleOutput = () => {
        if (isClicked === false) {
            setIsClicked(true);
        } else {setIsClicked(false);}
    }

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

        filter.forEach(element => {
            filterArray.push(element.trim().toLowerCase());
        });

        recipeIngredients.forEach(element => {
            recipeIngredientsArray.push(element.name.trim().toLowerCase());
        });
        // console.log(recipeIngredientsArray);
        // console.log(filterArray);

        // const intersection = filterArray.filter(element => recipeIngredientsArray.includes(element));
        // let intersection = filterArray.filter(e => recipeIngredientsArray.indexOf(e) !== -1);

        // console.log(entry.title +' '+ intersection);

        // for (let i = 0; i <= recipeIngredients.length - 1; i++) {
        //     console.log(filterArray[i]);
        //     console.log(recipeIngredients[i]);
        //     if (filterArray[i] === entry.ingredients[i].toLowerCase()){
        //         let ingredients2 = entry.ingredients.toLowerCase().includes(filterArray);
        //         console.log('Ingredients2: ' + ingredients2);
        //     }
        // }

        //simple filtering - one word
        let ingredientsString = "";

        for (let i = 0; i <= entry.ingredients.length - 1; i++) {
            if (i !== entry.ingredients.length - 1) {
                ingredientsString += entry.ingredients[i].name + ', ';
            } else {
                ingredientsString += entry.ingredients[i].name;
            }   
        }
        
        let ingredients = ingredientsString.includes(filterString.toLowerCase());
        if (ingredients){return ingredients;}
        return null;
    })
    
    return (
        <>
            <Row id='search-container'>
                {
                    isClicked
                    ?<>
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
                        <Col xs={12} className='search-col'>
                            <h2 className='search-heading'>Displayed recipes:</h2>
                            <div id='select-container'>
                                <Form.Select size="sm" id='select-cards-amount' style={{marginBottom: '10px'}} onChange={(e) => setCardAmount(e.target.value)} defaultValue={5}>
                                    <option className='select-option' value="0">Hide recipes</option>
                                    <option className='select-option' value="5">5</option>
                                    <option className='select-option' value="10">10</option>
                                    <option className='select-option' value={data.length}>All</option>
                                </Form.Select>
                            </div>
                        </Col>
                        <Col xs={12} className='search-col'>
                            {
                                isClicked
                                ?<Row className="recipe-button-row">
                                    <Button onClick={handleOutput}>Hide</Button>
                                </Row>
                                :<Row className="recipe-button-row">
                                    <Button onClick={handleOutput}>Show</Button>
                                </Row>
                            }
                        </Col>
                    </>
                    :<Col xs={12} className='search-col'>
                        <h2 className='search-heading'>Search is hidden</h2>
                        {
                            isClicked
                            ?<Row className="recipe-button-row">
                                <Button onClick={handleOutput}>Hide</Button>
                            </Row>
                            :<Row className="recipe-button-row">
                                <Button onClick={handleOutput}>Show</Button>
                            </Row>
                        }
                    </Col>
                }
                
            </Row>

            {/* Recipe cards output - displayed amount constrained by slicing the array 0-cardAmount */}
            <Row className='recipe-row'>
                {/* {ingredientFilter.slice(0,cardAmount).map((item, index) => {
                    return (
                        <RecipeOutput item={item} key={index}/>
                    )
                })} */}
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