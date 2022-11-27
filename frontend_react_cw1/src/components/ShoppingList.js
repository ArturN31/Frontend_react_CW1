import React, { useState } from "react";
import { Row } from 'react-bootstrap';
import ShoppingListOutput from './ShoppingListOutput';

const ShoppingList = () => {
    const [shopList, setShopList] = useState([localStorage.getItem('shoppingList')]);

    //state different than local storage
    if (shopList !== localStorage.getItem('shoppingList')) {
        setShopList(localStorage.getItem('shoppingList'));
    }

    return (
        <Row style={{ marginTop: '20px' }}>
            {
                //conditional rendering - error handling when shopList empty
                localStorage.getItem('shoppingList')
                ?JSON.parse(shopList).map((item, index) => { //if contains items
                    return (
                        <ShoppingListOutput item={item} key={index}/>
                    )
                })
                :<h1 className='active-link empty-storage-alert'>Your shopping list is empty</h1> //if empty
            }
        </Row>
    )
}

export default ShoppingList;