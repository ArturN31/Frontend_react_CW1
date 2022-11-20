import React, { useEffect, useState } from "react";
import Star from "./Star";

//Displays stars and handles click
export default function StarRating(props,{ totalStars = 5 }) {
    const [selectedStars, setSelectedStars] = useState();

    const postData = () => {
        if (selectedStars !== undefined) {
            const url = "http://localhost:3001/rating";
            const options = {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    title: props.item.title,
                    ingredients: props.item.ingredients,
                    servings: props.item.servings,
                    instructions: props.item.instructions,
                    rating: props.item.rating + "," + selectedStars,
                    id: props.item._id
                })
            };

            console.log(url, options);
            fetch(url, options).catch((err) => console.error(err));
        }
    }

    const createArray = length => [...Array(length)];

    const handleSelect = ({i}) => {
        setSelectedStars((selectedStars) => selectedStars = i + 1);
    }

    useEffect(() => {
        postData();
    })

    // console.log("Clicked star: " + selectedStars);

    return (
        <div>
            Rate the recipe:<br></br>
            {createArray(totalStars).map((n, i) => (
                <Star
                    key={i}
                    selected={selectedStars > i}
                    onSelect={() => handleSelect({i})}
                />
                ))
            }
            
            <p> {selectedStars ? selectedStars : "0"} of {totalStars} stars </p>
        </div>
    );
}
