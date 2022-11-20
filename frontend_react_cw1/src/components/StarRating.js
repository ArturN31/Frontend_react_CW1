import React, { useEffect, useState } from "react";
import Star from "./Star";

//Displays stars and handles click
export default function StarRating(props,{ totalStars = 5 }) {
    const [selectedStars, setSelectedStars] = useState(props.item.rating);

    const createArray = length => [...Array(length)];

    const handleSelect = ({i}) => {
        setSelectedStars((selectedStars) => selectedStars = i + 1)
        return props.updateRating(() => {return selectedStars});
    }

    useEffect(() =>{
        props.item.rating = selectedStars;
        return props.updateRating(() => {return selectedStars});
    })

    return (
        <div>
            {createArray(totalStars).map((n, i) => (
                <Star
                    key={i}
                    selected={selectedStars > i}
                    onSelect={() => handleSelect({i})}
                />
                ))
            }
            <p> {selectedStars} of {totalStars} stars </p>
        </div>
    );
}
