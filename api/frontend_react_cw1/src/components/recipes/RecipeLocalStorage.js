import React, { useState } from "react";
import { Row, Button } from 'react-bootstrap';

const RecipeLocalStorage = ({ item, updateShopList, updateMenuList }) => {
    const [ shopList, setShopList ] = useState([]);
    const [ menuList, setMenuList ] = useState([]);

    //if shoppingList not empty and state empty - update shopList state
    if(localStorage.getItem('shoppingList') !== null 
    && shopList.length === 0) {
        setShopList(JSON.parse(localStorage.getItem('shoppingList')));
    } 
    
    //if menu not empty and state empty - update menuList state
    if(localStorage.getItem('menu') !== null 
    && menuList.length === 0) {
        setMenuList(JSON.parse(localStorage.getItem('menu')));
    }   

    const handleAddToShoppingList = () => {
        if(!localStorage.getItem('shoppingList')) { //shoppingList does not exist in local storage
            let shoppingList = [];
            shoppingList.push(item); //pushing recipe to an array
            localStorage.setItem('shoppingList', JSON.stringify(shoppingList)); //adding shoppingList to local storage
            setShopList(shoppingList); //state for conditional rendering - add, remove button
            updateShopList(shoppingList);
        } else { //exists in local storage
            let shoppingListStorage = JSON.parse(localStorage.getItem('shoppingList')); //getting contents of shoppingList from local storage

            //Duplicate check
            if (!shoppingListStorage.some(e => e.title === item.title)) { //storage does not contain the clicked element
                shoppingListStorage.push(item); //adding recipe as last object
                localStorage.setItem('shoppingList', JSON.stringify(shoppingListStorage)); //adding new set of objects to local storage
                setShopList(shoppingListStorage); //state for conditional rendering - add, remove button
                updateShopList(shoppingListStorage);
            }
        }
    }

    const handleRemoveFromShoppingList = () => {
        let shoppingListStorage = JSON.parse(localStorage.getItem('shoppingList')); //getting contents of shoppingList from local storage
        const newArr = shoppingListStorage.filter(e => e.title !== item.title) //filtering clicked item out
        
        if (newArr.length === 0) { //updates state when last item removed
            localStorage.removeItem('shoppingList');
            setShopList([{}]); //state for conditional rendering - add, remove button
            updateShopList([{}]);
        } else {
            localStorage.setItem('shoppingList', JSON.stringify(newArr)); //adding new set of objects to local storage
            setShopList(newArr); //state for conditional rendering - add, remove button
            updateShopList(newArr);
        }
    }

    const handleAddToMenu = () => {
        if(!localStorage.getItem('menu')) { //menu does not exist in local storage
            let menu = [];
            menu.push(item); //pushing recipe to an array
            localStorage.setItem('menu', JSON.stringify(menu)); //adding menu to local storage
            setMenuList(menu); //state for conditional rendering - add, remove button
            updateMenuList(menu);
        } else { //exists in local storage
            let menuStorage = JSON.parse(localStorage.getItem('menu')); //getting contents of menu from local storage

            //Duplicate check
            if (!menuStorage.some(e => e.title === item.title)) { //storage does not contain the clicked element
                menuStorage.push(item); //adding recipe as last object
                localStorage.setItem('menu', JSON.stringify(menuStorage)); //adding new set of objects to local storage
                setMenuList(menuStorage); //state for conditional rendering - add, remove button
                updateMenuList(menuStorage);
            }
        }
    }

    const handleRemoveFromMenu = () => {
        let menuStorage = JSON.parse(localStorage.getItem('menu')); //getting contents of shoppingList from local storage
        const newArr = menuStorage.filter(e => e.title !== item.title) //filtering clicked item out

        if (newArr.length === 0) { //updates state when last item removed
            localStorage.removeItem('menu');
            setMenuList([{}]); //state for conditional rendering - add, remove button
            updateMenuList([{}]);
        } else {
            localStorage.setItem('menu', JSON.stringify(newArr)); //adding new set of objects to local storage
            setMenuList(newArr);
            updateMenuList(newArr);
        }
    }

    return (
        <>
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
        </>
    )
}

export default RecipeLocalStorage;