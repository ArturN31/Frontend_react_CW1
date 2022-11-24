import React, { useState } from "react";
import { Row, Button } from 'react-bootstrap';
import RecipeOutput from './RecipeOutput';

const ShoppingList = () => {
    const [menuList, setMenuList] = useState([localStorage.getItem('menu')]);
    const [isClicked, setIsClicked] = useState(false);

    if (menuList !== localStorage.getItem('menu')) {
        setMenuList(localStorage.getItem('menu'));
    }

    const handleOutput = () => {
        setMenuList(localStorage.getItem('menu'));
        if (localStorage.getItem('menu') !== null || menuList !== null) {
            if(isClicked !== true) {setIsClicked(true);} else {setIsClicked(false);}
        }
    }

    return (
        <>
            <Row className="recipe-button-row">
                <Button onClick={handleOutput}>Display Menu</Button>
            </Row>
            <Row>
                {
                    isClicked
                    ?JSON.parse(menuList).map((item, index) => {
                        return (
                            <RecipeOutput item={item} key={index}/>
                        )
                    })
                    : <div></div>
                }
            </Row>
        </>
    )
}

export default ShoppingList;