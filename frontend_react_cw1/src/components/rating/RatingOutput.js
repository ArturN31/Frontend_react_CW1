import React from "react";
import { Row, Col } from 'react-bootstrap';

const RatingOutput = ({ item }) => {
    //Average calculation
    let ratingArray = [];
    let ratingTotal = 0;
    let ratingAverage = 0;

    if(item !== undefined) {
        //creating an array with all ratings
        for(let i = 0; i <= item.reviews.length - 1; i++){
            ratingArray.push(item.reviews[i].rating);
        }
        ratingTotal = ratingArray
            .map(rtg => rtg) 
            .reduce((a, b) => parseInt(a) + parseInt(b)); //calculates the total for each recipe 
        ratingAverage = ratingTotal / ratingArray.length; //calculates average
    }

    return(
        <Row>
            <Col>
                <span style={{fontStyle: 'italic'}}>
                    <span className="recipe-component-titles">
                        Average rating:
                    </span> {ratingAverage.toFixed(2)}
                    <br></br>
                    {
                        ratingArray.length === 1
                        ? <span>The recipe has been rated {ratingArray.length} time.</span>
                        : <span>The recipe has been rated {ratingArray.length} times.</span>
                    }
                    
                </span>
            </Col>
        </Row>
    )
}

export default RatingOutput;