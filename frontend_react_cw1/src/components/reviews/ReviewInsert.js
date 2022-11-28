import React, { useEffect, useState, useRef } from "react";
import { Button, FloatingLabel, Form, Col } from 'react-bootstrap';

import RatingInsert from '../rating/RatingInsert';

//Displays stars and handles click
export default function ReviewInsert(props) {
    const [enteredReview, setEnteredReview] = useState("");
    const [enteredName, setEnteredName] = useState("");
    const [enteredRating, setEnteredRating] = useState();
    const reviewRef = useRef(null);
    const nameRef = useRef(null);

    let reviewsArray = props.item.reviews; //getting all reviews

    //post request to api - inserts document on the backend - updates rating
    const postData = () => {
        if (enteredReview !== "" && enteredName !== "" && enteredRating !== undefined) {
            let review = {
                'name': enteredName, 
                'review': enteredReview,
                'rating': enteredRating
            };
            reviewsArray.push(review); //adding enteredReview to all reviews

            const url = "http://localhost:3001/reviews";
            const options = {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    title: props.item.title,
                    reviews: reviewsArray
                })
            };

            console.log(url, options);
            fetch(url, options).catch((err) => console.error(err));
        }
    }

    //sets selected amount of stars and refreshes page to update rating
    const handleSubmit = () => {
        setEnteredReview(reviewRef.current.value);
        setEnteredName(nameRef.current.value);
    }

    const handleKeyDown = (e) => {
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight}px`; 
    }  

    useEffect(() => {
        postData();
    })

    return (
        <Col>
            <Form>
                <Form.Group>
                    <FloatingLabel
                        label="Enter your name"
                        className="mb-3"
                    >
                        <Form.Control
                            ref={nameRef}
                            type="text"
                            placeholder="Enter your name" 
                            maxLength="20"
                            required
                        />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group>
                    <FloatingLabel
                        label="Leave a review here"
                        className="mb-3"
                    >
                        <Form.Control
                            ref={reviewRef}
                            as="textarea" 
                            placeholder="Leave a review here" 
                            maxLength="150" 
                            onKeyDown={handleKeyDown}
                            required
                        />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group>
                    <RatingInsert starRating={setEnteredRating}/>
                </Form.Group>
                <Button type="submit" onClick={handleSubmit}>Add a review</Button>
            </Form>
        </Col>
    );
}