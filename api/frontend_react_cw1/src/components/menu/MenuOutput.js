import React, { useState } from "react";
import { Row, Col, Card, ListGroup, Accordion  } from 'react-bootstrap';

import RatingOutput from '../rating/RatingOutput';
import IngredientsOutput from '../recipes/IngredientsOutput';
import NutritionFetch from "../nutrition/NutritionFetch";
import RecipeLocalStorage from '../recipes/RecipeLocalStorage';

//Recipe card output
const RecipeOutput = ({ item }) => {
    // eslint-disable-next-line no-unused-vars
    const [ shopList, setShopList ] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [ menuList, setMenuList ] = useState([]);

    return (
        <Col xs={12} md={6}>
            <Accordion flush>
                <Accordion.Item eventKey={item.title}>
                    <Accordion.Header>{item.title}</Accordion.Header>
                    <Accordion.Body>
                        <Card className='recipe-card'>
                            <Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>
                                        <RatingOutput item={item}/>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col xs={12}>
                                                <span className="recipe-component-titles">
                                                    Servings:
                                                </span><br></br>
                                                <p>{item.servings}</p>
                                            </Col>
                                            <Col xs={12}>
                                                <IngredientsOutput item={item}/>
                                            </Col>
                                            <Col xs={12}>
                                                <NutritionFetch 
                                                    query={item.ingredients} 
                                                    servings={item.servings}
                                                />
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <RecipeLocalStorage 
                                            item={item} 
                                            updateShopList={setShopList} 
                                            updateMenuList={setMenuList}
                                        />
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Col>
    );
};

export default RecipeOutput;