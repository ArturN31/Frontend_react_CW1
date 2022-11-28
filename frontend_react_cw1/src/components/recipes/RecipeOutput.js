import React from "react";
import { Row } from 'react-bootstrap';
import Recipe from './Recipe';

//Displays nutrition
const RecipeOutput = ({ ingredientFilter, cardAmount }) => {
    return (
        /* Recipe cards output - displayed amount constrained by slicing the array 0-cardAmount */
        <Row className='recipe-row'>
            {ingredientFilter.slice(0,cardAmount).map((item, index) => {
                return (
                    <Recipe item={item} key={index}/>
                )
            })}
        </Row>
    );
};

export default RecipeOutput;