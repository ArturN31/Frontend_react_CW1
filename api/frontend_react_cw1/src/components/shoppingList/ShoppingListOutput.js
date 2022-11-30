import React, { useState } from "react";
import { Row, Col, Card, ListGroup, Accordion  } from 'react-bootstrap';

import RecipeLocalStorage from '../recipes/RecipeLocalStorage';

//Recipe card output
const ShoppingLstOutput = ({ item }) => {
    // eslint-disable-next-line no-unused-vars
    const [ shopList, setShopList ] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [ menuList, setMenuList ] = useState([]);

    //creating ingredients array 
    let ingredientsArray = [];
    if(item !== undefined) {
        for(let i = 0; i <= item.ingredients.length - 1; i++){
            ingredientsArray.push(item.ingredients[i]);
        }
    }

    //adds line through to ingredient element when clicked
    const handleClickLi = event => {
        if (event.target.style.textDecoration) {
          event.target.style.removeProperty('text-decoration');
        } else {
          event.target.style.setProperty('text-decoration', 'line-through');
        }
    };

    return (
        <Col xs={12} sm={12} md={6} lg={6} xl={4}>
            <Accordion flush>
                <Accordion.Item eventKey={item.title}>
                    <Accordion.Header>{item.title}</Accordion.Header>
                    <Accordion.Body>
                        <Card className='recipe-card'>
                            <Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>
                                        <Row>
                                            <Col xs={12}>
                                                <Row>
                                                    <span style={{ fontStyle: 'italic' }}>
                                                        (Click to mark)
                                                    </span>
                                                    <span className="recipe-component-titles">
                                                        Ingredients:
                                                    </span><br></br>
                                                    {
                                                        ingredientsArray.map((element, i) => 
                                                            <li 
                                                                key={i} 
                                                                className='recipe-ingredient-list-element recipe-ingredient-list-element-pointer' 
                                                                onClick={handleClickLi}
                                                            >
                                                                {element.quantity} {element.name}
                                                            </li>
                                                        )
                                                    }
                                                    <br></br>
                                                </Row>
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

export default ShoppingLstOutput;