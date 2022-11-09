import React from "react";
import { Col, Card, ListGroup  } from 'react-bootstrap';

const Recipe = ({ item }) => {
    let ingredientsArray = item.ingredients.split(',');
    const ingredients = ingredientsArray.map((element, i) => <li key={i} className='recipe-ingredient-list-element'>{element}</li>)

    return (
        <Col xs={12} sm={12} md={6} lg={4} xl={4}>
            <Card className='recipe-card'>
                <Card.Body>
                    Recipe rating: {item.rating}
                    <Card.Title>{item.title}</Card.Title>
                    <ListGroup>
                        <ListGroup.Item>{ingredients}</ListGroup.Item>
                        <ListGroup.Item>Servings:<br></br>{item.servings}</ListGroup.Item>
                        <ListGroup.Item>{item.instructions}</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Recipe;