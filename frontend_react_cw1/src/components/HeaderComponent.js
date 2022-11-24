import React from 'react';
import { Row, Col } from 'react-bootstrap';

//Simple header of the page
const Header = () => {
    return (
        <Row id='header-row'>
            <Col id='header-col'>
                <h1 id='header-text'>delicious</h1>
                <p id='header-subtext'>RECIPES</p>
            </Col>
        </Row>
    )
};

export default Header;