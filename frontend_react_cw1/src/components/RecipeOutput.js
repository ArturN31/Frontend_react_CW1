import React, { useState } from "react";
import { Row, Col, Button, Card, ListGroup  } from 'react-bootstrap';
import NutritionFetch from "./NutritionFetch";
import StarRating from "./Stars";

//Recipe card output
const Recipe = ({ item }) => {
    const [rating, setRating] = useState(0);

    let ingredientsArray = item.ingredients.split(',');
    const ingredients = ingredientsArray.map((element, i) => <li key={i} className='recipe-ingredient-list-element'>{element}</li>)

    const handleClickShoppingList = () => {

    }

    return (
        <Col xs={12} sm={12} md={6} lg={4} xl={4}>
            <Card className='recipe-card'>
                <Card.Body>
                    Recipe rating: {rating}
                    <Card.Title>{item.title}</Card.Title>
                    <ListGroup>
                        <ListGroup.Item>{ingredients}</ListGroup.Item>
                        <ListGroup.Item>Servings:<br></br>{item.servings}</ListGroup.Item>
                        <ListGroup.Item>{item.instructions}</ListGroup.Item>
                        <ListGroup.Item>
                            Nutrition per serving:
                            <br></br>
                            <NutritionFetch query={item.title}/>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row className='search-button-container'>
                                <Button className='search-button' onClick={handleClickShoppingList}>Add to shopping list</Button>
                            </Row>
                            <Row className='search-button-container'>
                                <Button className='search-button'>Add to menu</Button>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item><StarRating item={item} updateRating={setRating}/></ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Recipe;