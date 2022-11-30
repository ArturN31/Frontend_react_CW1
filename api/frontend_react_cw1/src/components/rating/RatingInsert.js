import React, { useState } from "react";

import Star from "./Star";

//Displays stars and handles click
export default function RatingInsert (props,{ totalStars = 5 }) {
    const [selectedStars, setSelectedStars] = useState();

    const createArray = length => [...Array(length)];

    //sets selected amount of stars and refreshes page to update rating
    const handleSelect = ({i}) => {
        setSelectedStars((selectedStars) => selectedStars = i + 1);
        props.starRating(i + 1);
    }

    return (
        <div>
            <span className="recipe-titles">Rate the recipe:</span><br></br>
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