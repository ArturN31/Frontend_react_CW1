import React, { useState } from "react";
import { Row, Button } from 'react-bootstrap';
import ShoppingListOutput from './ShoppingListOutput';

const ShoppingList = () => {
    const [shoppingList, setShoppingList] = useState([localStorage.getItem('shoppingList')]);
    const [isClicked, setIsClicked] = useState(false);

    if (shoppingList !== localStorage.getItem('shoppingList')) {
        setShoppingList(localStorage.getItem('shoppingList'));
    }

    const handleOutput = () => {
        setShoppingList(localStorage.getItem('shoppingList'));
        if (localStorage.getItem('shoppingList') !== null || shoppingList !== null) {
            if(isClicked !== true) {setIsClicked(true);} else {setIsClicked(false);}
        }
    }

    return (
        <>
            <Row className="recipe-button-row">
                <Button onClick={handleOutput}>Display Shopping List</Button>
            </Row>
            <Row>
                {
                    isClicked
                    ?JSON.parse(shoppingList).map((item, index) => {
                        return (
                            <ShoppingListOutput item={item} key={index}/>
                        )
                    })
                    : <div></div>
                }
            </Row>
        </>
    )
}

export default ShoppingList;