import React, { useState } from "react";
import { Button } from 'react-bootstrap';

const ReviewOutput = ({ item }) => {
    const [hidden, setHidden] = useState(true);

    let reversedArray = item.reviews.slice(-5);

    if (reversedArray !== null) {
        reversedArray = reversedArray.reverse();
    } else {reversedArray.push([{}])};

    return (
        <>
            <span className="recipe-component-titles">
                Latest reviews:
            </span><br></br><br></br>
            <span>
                {/* conditional rendering */}
                {hidden ?   <span></span>
                        :   reversedArray.map((element, i) => 
                                <div key={i} className='recipe-instructions-list-element'>
                                    <p 
                                        className="recipe-component-titles"
                                        style={{
                                            'fontSize': 'larger'
                                        }}
                                    >
                                        {element.name}
                                        </p>
                                    <p style={{'fontStyle': 'italic'}}>
                                        <span className="recipe-component-titles">
                                            Recipe rating: 
                                        </span> {element.rating}
                                    </p>
                                    <p>{element.review}</p>
                                    <hr></hr>
                                </div>
                            )
                }
                {hidden ?   <Button onClick={() => setHidden(false)}>Show reviews</Button>
                        :   <Button onClick={() => setHidden(true)}>Hide reviews</Button>
                }
            </span> 
        </>
    )
}

export default ReviewOutput;