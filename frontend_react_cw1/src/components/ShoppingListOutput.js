import React, { useState } from "react";
import { Row, Col, Button, Card, ListGroup, Accordion  } from 'react-bootstrap';

//Recipe card output
const ShoppingLstOutput = ({ item }) => {
    const [ shopList, setShopList ] = useState([]);

    //local storage contains list and state does not - set state
    if(localStorage.getItem('shoppingList') !== null 
    && shopList.length === 0) {
        setShopList(JSON.parse(localStorage.getItem('shoppingList')));
    }
    
    let ingredientsArray = [];
    if(item !== undefined) {
        for(let i = 0; i <= item.ingredients.length - 1; i++){
            ingredientsArray.push(item.ingredients[i]);
        }
    }

    let instructionsArray = [];
    if(item !== undefined) {
        for(let i = 0; i <= item.instructions.length - 1; i++){
            instructionsArray.push(item.instructions[i]);
        }
    }

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

    const handleClickLi = event => {
        if (event.target.style.textDecoration) {
          event.target.style.removeProperty('text-decoration');
        } else {
          event.target.style.setProperty('text-decoration', 'line-through');
        }
    };

    return (
        <Col xs={12} sm={12} md={6} lg={6} xl={4}>
            <Accordion flush>
                <Accordion.Item eventKey={item.title}>
                    <Accordion.Header>{item.title}</Accordion.Header>
                    <Accordion.Body>
                        <Card className='recipe-card'>
                            <Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>
                                        <Row>
                                            <Col xs={12}>
                                                <Row>
                                                    <span style={{ fontStyle: 'italic' }}>(Click to mark)</span>
                                                    <span className="recipe-component-titles">Ingredients:</span><br></br>
                                                    {ingredientsArray.map((element, i) => 
                                                    <li key={i} className='recipe-ingredient-list-element recipe-ingredient-list-element-pointer' onClick={handleClickLi}>{element.quantity} {element.name}</li>)}
                                                    <br></br>
                                                </Row>
                                            </Col>
                                        </Row>
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
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Col>
    );
};

export default ShoppingLstOutput;