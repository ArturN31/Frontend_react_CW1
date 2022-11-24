import React, { useState } from "react";
import { Row, Col, Button, Card, ListGroup  } from 'react-bootstrap';
import NutritionFetch from "./NutritionFetch";
import StarRating from "./StarRating";

//Recipe card output
const RecipeOutput = ({ item }) => {
    const [ shopList, setShopList ] = useState([]);
    const [ menuList, setMenuList ] = useState([]);

    if(localStorage.getItem('shoppingList') !== null 
    && shopList.length === 0) {
        setShopList(JSON.parse(localStorage.getItem('shoppingList')));
    } 
    
    if(localStorage.getItem('menu') !== null 
    && menuList.length === 0) {
        setMenuList(JSON.parse(localStorage.getItem('menu')));
    }    
    
    let ingredientsArray = item.ingredients.split(','); //splits string of ingredients into array

    let instructionsArray = item.instructions.split('.'); //splits string of instructions into array
    instructionsArray.pop(); //removes last item from array - in this case it is ""

    let ratingArray = item.rating.split(','); //splits string of ratings into array
    let ratingTotal = ratingArray.map(rtg => rtg) 
                    .reduce((a, b) => parseInt(a) + parseInt(b)); //calculates the total for each recipe
    let ratingAverage = ratingTotal / ratingArray.length; //calculates average

    const handleAddToShoppingList = () => {
        if(!localStorage.getItem('shoppingList')) { //shoppingList does not exist in local storage
            let shoppingList = [];
            shoppingList.push(item); //pushing recipe to an array
            localStorage.setItem('shoppingList', JSON.stringify(shoppingList)); //adding shoppingList to local storage
            setShopList(shoppingList); //state for conditional rendering - add, remove button
        } else { //exists in local storage
            let shoppingListStorage = JSON.parse(localStorage.getItem('shoppingList')); //getting contents of shoppingList from local storage

            //Duplicate check
            if (!shoppingListStorage.some(e => e.title === item.title)) { //storage does not contain the clicked element
                shoppingListStorage.push(item); //adding recipe as last object
                localStorage.setItem('shoppingList', JSON.stringify(shoppingListStorage)); //adding new set of objects to local storage
                setShopList(shoppingListStorage); //state for conditional rendering - add, remove button
            }
        }
    }

    const handleRemoveFromShoppingList = () => {
        let shoppingListStorage = JSON.parse(localStorage.getItem('shoppingList')); //getting contents of shoppingList from local storage
        const newArr = shoppingListStorage.filter(e => e.title !== item.title) //filtering clicked item out
        
        if (newArr.length === 0) {
            localStorage.removeItem('shoppingList');
            setShopList([{}]); //state for conditional rendering - add, remove button
        } else {
            localStorage.setItem('shoppingList', JSON.stringify(newArr)); //adding new set of objects to local storage
            setShopList(newArr); //state for conditional rendering - add, remove button
        }
    }

    const handleAddToMenu = () => {
        if(!localStorage.getItem('menu')) { //menu does not exist in local storage
            let menu = [];
            menu.push(item); //pushing recipe to an array
            localStorage.setItem('menu', JSON.stringify(menu)); //adding menu to local storage
            setMenuList(menu); //state for conditional rendering - add, remove button
        } else { //exists in local storage
            let menuStorage = JSON.parse(localStorage.getItem('menu')); //getting contents of menu from local storage

            //Duplicate check
            if (!menuStorage.some(e => e.title === item.title)) { //storage does not contain the clicked element
                menuStorage.push(item); //adding recipe as last object
                localStorage.setItem('menu', JSON.stringify(menuStorage)); //adding new set of objects to local storage
                setMenuList(menuStorage); //state for conditional rendering - add, remove button
            }
        }
    }

    const handleRemoveFromMenu = () => {
        let menuStorage = JSON.parse(localStorage.getItem('menu')); //getting contents of shoppingList from local storage
        const newArr = menuStorage.filter(e => e.title !== item.title) //filtering clicked item out

        if (newArr.length === 0) {
            localStorage.removeItem('menu');
            setMenuList([{}]); //state for conditional rendering - add, remove button
        } else {
            localStorage.setItem('menu', JSON.stringify(newArr)); //adding new set of objects to local storage
            setMenuList(newArr);
        }
    }

    return (
        <Col xs={12} sm={12} md={6} lg={6} xl={4}>
            <Card className='recipe-card'>
                <Card.Body>
                    <Card.Title id='recipe-card-title'>{item.title}</Card.Title>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    <span style={{fontStyle: 'italic'}}>
                                        <span className="recipe-component-titles">Recipe rating: </span> {ratingAverage.toFixed(2)}
                                        <br></br>
                                        The recipe has been rated {ratingArray.length} times.
                                    </span>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col xs={12} xl={6}>
                                    <span className="recipe-component-titles">Ingredients:</span><br></br>
                                    {ingredientsArray.map((element, i) => <li key={i} className='recipe-ingredient-list-element'>{element}</li>)}<br></br>
                                </Col>
                                <Col xs={12} xl={6}>
                                    <span className="recipe-component-titles">Nutrition - entire dish:</span>
                                    <br></br>
                                    <NutritionFetch query={item.ingredients}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <span className="recipe-component-titles">Servings:</span><br></br>
                                    {item.servings}
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <span className="recipe-component-titles">Instructions:</span><br></br>
                                {instructionsArray.map((element, i) => 
                                    <li key={i} className='recipe-instructions-list-element'>{i+1}. {element}.</li>
                                )}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row className="recipe-button-row">
                                {/* CONDITIONAL RENDERING - Changes button and its functionality if recipe added to shopping list*/}
                                { 
                                    shopList.some(e => e.title === item.title) 
                                    ?<Button onClick={handleRemoveFromShoppingList}>Remove from shopping list</Button>
                                    :<Button onClick={handleAddToShoppingList}>Add to shopping list</Button>
                                }
                            </Row>
                            <Row className="recipe-button-row">
                                {/* CONDITIONAL RENDERING - Changes button and its functionality if recipe added to menu*/}
                                { 
                                    menuList.some(e => e.title === item.title) 
                                    ?<Button onClick={handleRemoveFromMenu}>Remove from menu</Button>
                                    :<Button onClick={handleAddToMenu}>Add to menu</Button>
                                }
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <StarRating item={item}/>
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default RecipeOutput;