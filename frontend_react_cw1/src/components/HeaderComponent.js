import React from 'react';
import { Row, Col } from 'react-bootstrap';

//Simple header of the page
const Header = () => {
    return (
        <Row className='header-row'>
            <Col className='header-col'>
                <h1 className='header-text'>HEADER</h1>
            </Col>
        </Row>
    )
};

export default Header;