import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Nav, Col } from 'react-bootstrap';

const Navigation = () => {
    return (
        <>
            <Nav 
                className="justify-content-center w-25 m-auto rounded-bottom" 
                style={{textAlign: 'center'}} 
                id='navbar'
            >
                <Col xs={12} md={4}>
                    <Nav.Item>
                        {/* Conditional class setting - sets active element */}
                        <NavLink 
                            to="/" 
                            className = {(navData) => (
                                navData.isActive 
                                ? "nav-link active-link" 
                                : 'nav-link'
                            )} 
                            id="home"
                        >
                            Home
                        </NavLink>
                    </Nav.Item>
                </Col>
                    
                <Col xs={12} md={4}>
                    <Nav.Item>
                        {/* Conditional class setting - sets active element */}
                        <NavLink 
                            to="/ShoppingList" 
                            className={(navData) => (
                                navData.isActive 
                                ? "nav-link active-link" 
                                : 'nav-link'
                            )}
                            id="shoppingList"
                        >
                            Shopping List
                        </NavLink>
                    </Nav.Item>
                </Col>

                <Col xs={12} md={4}>
                    <Nav.Item>
                        {/* Conditional class setting - sets active element */}
                        <NavLink 
                            to="/Menu"
                            className={(navData) => (
                                navData.isActive 
                                ? "nav-link active-link" 
                                : 'nav-link'
                            )}
                            id="menu"
                        >
                            Menu
                        </NavLink>
                    </Nav.Item>
                </Col>
            </Nav>
            <Outlet />
        </>
    );
};

export default Navigation;