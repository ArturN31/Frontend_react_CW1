import React from "react";

const InstructionsOutput = ({ item }) => {
    //creating instructionsArray
    let instructionsArray = [];
    if(item !== undefined) {
        for(let i = 0; i <= item.instructions.length - 1; i++){
            instructionsArray.push(item.instructions[i]);
        }
    }

    return (
        <>
            {/* Mapping instructions */}
            {
                instructionsArray.map((element, i) => 
                    <li 
                        key={i} 
                        className='recipe-instructions-list-element'
                    >
                        {i+1}. {element}
                    </li>
                )
            }
        </>
    )
}

export default InstructionsOutput; 