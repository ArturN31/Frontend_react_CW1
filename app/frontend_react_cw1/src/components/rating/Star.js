import React from "react";
import { GoStar } from "react-icons/go";

//Single star output
export default function Star({ selected = false, onSelect = f => f }) {
    return <GoStar 
	            id="star"
                color={selected ? "red" : "grey"} 
	            onClick={onSelect} 
            />;
}