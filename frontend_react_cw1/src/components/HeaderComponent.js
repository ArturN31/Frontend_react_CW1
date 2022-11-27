import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecipesPage from '../RecipesPage';
import ShoppingListPage from '../ShoppingListPage';
import MenuPage from '../MenuPage';

import Navigation from './Navigation';

//Simple header of the page
const Header = () => {
    return (
        <>
            <Row id='header-row'>
                <Col id='header-col'>
                    <h1 id='header-text'>delicious</h1>
                    <p id='header-subtext'>RECIPES</p>
                </Col>
            </Row>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={ <Navigation/> }>
                        <Route path='/' element={ <RecipesPage/> }/>
                        <Route path='ShoppingList' element={ <ShoppingListPage/> }/>
                        <Route path='Menu' element={ <MenuPage/> }/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
};

export default Header;