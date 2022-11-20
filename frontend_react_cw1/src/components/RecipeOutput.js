import React from "react";
import { Row, Col, Button, Card, ListGroup  } from 'react-bootstrap';
import NutritionFetch from "./NutritionFetch";
import StarRating from "./StarRating";

//Recipe card output
const Recipe = ({ item }) => {
    let ingredientsArray = item.ingredients.split(',');

    let ratingArray = item.rating.split(',');
    let ratingTotal = ratingArray.map(rtg => rtg)
                    .reduce((a, b) => parseInt(a) + parseInt(b));
    let ratingAverage = ratingTotal / ratingArray.length;

    const handleClickShoppingList = () => {

    }

    return (
        <Col xs={12} sm={12} md={6} lg={4} xl={4}>
            <Card className='recipe-card'>
                <Card.Body>
                    <p>Ratings: {ratingArray.length}, Recipe rating: {ratingAverage.toFixed(2)}</p>
                    <Card.Title>{item.title}</Card.Title>
                    <ListGroup>
                        <ListGroup.Item>{ingredientsArray.map((element, i) => <li key={i} className='recipe-ingredient-list-element'>{element}</li>)}</ListGroup.Item>
                        <ListGroup.Item>Servings:<br></br>{item.servings}</ListGroup.Item>
                        <ListGroup.Item>{item.instructions}</ListGroup.Item>
                        <ListGroup.Item>
                            Nutrition for entire dish:
                            <br></br>
                            <NutritionFetch query={item.ingredients}/>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row className='search-button-container'>
                                <Button className='search-button' onClick={handleClickShoppingList}>Add to shopping list</Button>
                            </Row>
                            <Row className='search-button-container'>
                                <Button className='search-button'>Add to menu</Button>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <StarRating item={item}/>
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Recipe;