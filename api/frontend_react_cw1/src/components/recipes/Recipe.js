import React, { useState } from "react";
import { Row, Col, Card, ListGroup, Accordion, OverlayTrigger, Tooltip  } from 'react-bootstrap';

import RatingOutput from '../rating/RatingOutput';
import IngredientsOutput from './IngredientsOutput';
import NutritionFetch from "../nutrition/NutritionFetch";
import InstructionsOutput from "./InstructionsOutput";
import ReviewOutput from "../reviews/ReviewOutput";
import ReviewInsert from '../reviews/ReviewInsert';
import RecipeLocalStorage from './RecipeLocalStorage';

//Recipe card output
const Recipe = ({ item }) => {
    // eslint-disable-next-line no-unused-vars
    const [ shopList, setShopList ] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [ menuList, setMenuList ] = useState([]);

    const recipeTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Click to view the recipe, then click again to hide it.
        </Tooltip>
    );

    return (
        <Col xs={12} md={6}>
            <OverlayTrigger
                placement="top"
                delay={{show: 250, hide: 400}}
                overlay={recipeTooltip}
            >
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
                                                <Col xs={12} xxl={4}>
                                                    <IngredientsOutput item={item}/>
                                                </Col>
                                                <Col xs={12} xxl={8}>
                                                    <NutritionFetch 
                                                        query={item.ingredients} 
                                                        servings={item.servings}
                                                    />
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <span className="recipe-component-titles">
                                                Instructions:
                                                </span><br></br>
                                            <InstructionsOutput item={item}/>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <RecipeLocalStorage 
                                                item={item} 
                                                updateShopList={setShopList} 
                                                updateMenuList={setMenuList}
                                            />
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <ReviewInsert item={item}/>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <ReviewOutput item={item}/>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </OverlayTrigger>
        </Col>
    );
};

export default Recipe;