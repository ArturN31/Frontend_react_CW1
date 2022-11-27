import React, { useState } from "react";
import { Row } from 'react-bootstrap';
import MenuOutput from './MenuOutput';

const ShoppingList = () => {
    const [menuList, setMenuList] = useState([localStorage.getItem('menu')]);

    //state different than local storage
    if (menuList !== localStorage.getItem('menu')) {
        setMenuList(localStorage.getItem('menu'));
    }

    return (
        <Row style={{ marginTop: '20px' }}>
            {
                //conditional rendering - error handling when shopList empty
                localStorage.getItem('menu')
                ?JSON.parse(menuList).map((item, index) => { //if contains items
                    return (
                        <MenuOutput item={item} key={index}/>
                    )
                })
                :<h1 className='active-link empty-storage-alert'>Your menu is empty</h1> //if empty
            }
        </Row>
    )
}

export default ShoppingList;