import React, { useEffect, useState, useCallback } from "react";
import { Row, Col } from 'react-bootstrap';

import NutritionDish from "./NutritionDish";
import NutritionServing from "./NutritionServing"

//Fetches nutrition from api
const NutritionFetchEntireDish = ({ query, servings }) => {
    const [nutritionDish, setNutritionDish] = useState({
        calories_dish: 0,
        protein_g_dish: 0,
        carbohydrates_total_g_dish: 0,
        sugar_g_dish: 0,
        fiber_g_dish: 0,
        fat_total_g_dish: 0,
        fat_saturated_g_dish: 0
    });

    const [nutritionServing, setNutritionServing] = useState({
        calories_serving: 0,
        protein_g_serving: 0,
        carbohydrates_total_g_serving: 0,
        sugar_g_serving: 0,
        fiber_g_serving: 0,
        fat_total_g_serving: 0,
        fat_saturated_g_serving: 0
    });

    const fetchData = useCallback(async () => {
        //Setting up string as a list of ingredients for fetch statement
        let stringQuery = "";
        for(let i = 0; i <= query.length - 1; i++){
            if (i === query.length - 1) {
                stringQuery += query[i].quantity + ' ' + query[i].name;
            } else {
                stringQuery += query[i].quantity + ' ' + query[i].name + ', ';
            }
        }

        const url = "https://calorieninjas.p.rapidapi.com/v1/nutrition?query=" + stringQuery;
        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": "1d58921705msh245766403d25742p168f1fjsnf10093f4d66b",
                "X-RapidAPI-Host": "calorieninjas.p.rapidapi.com",
            },
        };

        await fetch(url, options)
        .then((response) => {
            if (!response.ok) {throw response} 
            return response.json();
        })
        .then((incomingData) => {
            if (incomingData.items) { //handling .map undefined
                //adding nutrient values to establish totals for entire dish
                const calories_dish = incomingData.items
                    .map(ingredient => ingredient.calories)
                    .reduce((a, b) => a+b)
                    .toFixed(2);

                const protein_g_dish = incomingData.items
                    .map(ingredient => ingredient.protein_g)
                    .reduce((a, b) => a+b)
                    .toFixed(2);

                const carbohydrates_total_g_dish = incomingData.items
                    .map(ingredient => ingredient.carbohydrates_total_g)
                    .reduce((a, b) => a+b)
                    .toFixed(2);

                const sugar_g_dish = incomingData.items
                    .map(ingredient => ingredient.sugar_g)
                    .reduce((a, b) => a+b)
                    .toFixed(2);

                const fiber_g_dish = incomingData.items
                    .map(ingredient => ingredient.fiber_g)
                    .reduce((a, b) => a+b)
                    .toFixed(2);

                const fat_total_g_dish = incomingData.items
                    .map(ingredient => ingredient.fat_total_g)
                    .reduce((a, b) => a+b)
                    .toFixed(2);

                const fat_saturated_g_dish = incomingData.items
                    .map(ingredient => ingredient.fat_saturated_g)
                    .reduce((a, b) => a+b)
                    .toFixed(2);

                //array of above dish vars
                var nutrientsDish = [
                    {
                        calories_dish,
                        protein_g_dish,
                        carbohydrates_total_g_dish,
                        sugar_g_dish,
                        fiber_g_dish,
                        fat_total_g_dish,
                        fat_saturated_g_dish,
                    }
                ];

                //adding nutrient values to establish totals for serving
                const calories_serving = (incomingData.items
                    .map(ingredient => ingredient.calories)
                    .reduce((a, b) => a+b) / servings)
                    .toFixed(2);

                const protein_g_serving = (incomingData.items
                    .map(ingredient => ingredient.protein_g)
                    .reduce((a, b) => a+b) / servings)
                    .toFixed(2);

                const carbohydrates_total_g_serving = (incomingData.items
                    .map(ingredient => ingredient.carbohydrates_total_g)
                    .reduce((a, b) => a+b) / servings)
                    .toFixed(2);

                const sugar_g_serving = (incomingData.items
                    .map(ingredient => ingredient.sugar_g)
                    .reduce((a, b) => a+b) / servings)
                    .toFixed(2);

                const fiber_g_serving = (incomingData.items
                    .map(ingredient => ingredient.fiber_g)
                    .reduce((a, b) => a+b) / servings)
                    .toFixed(2);

                const fat_total_g_serving = (incomingData.items
                    .map(ingredient => ingredient.fat_total_g)
                    .reduce((a, b) => a+b) / servings)
                    .toFixed(2);

                const fat_saturated_g_serving = (incomingData.items
                    .map(ingredient => ingredient.fat_saturated_g)
                    .reduce((a, b) => a+b) / servings)
                    .toFixed(2);

                //array of above serving vars
                var nutrientsServing = [
                    {
                        calories_serving,
                        protein_g_serving,
                        carbohydrates_total_g_serving,
                        sugar_g_serving,
                        fiber_g_serving,
                        fat_total_g_serving,
                        fat_saturated_g_serving
                    }
                ]

                //sets nutrition that is passed to the nutrition component
                setNutritionDish(nutrientsDish[0]);
                setNutritionServing(nutrientsServing[0]);
            }
        })
        .catch((err) => console.error(err));
    }, [query, servings]);

    useEffect(() => {
        fetchData();
    }, [fetchData, query]);

    return (
        <>
            <Row>
                <Col xs={6} xxl={6}>
                    <NutritionDish item={nutritionDish} />
                </Col>
                <Col xs={6} xxl={6}>
                    <NutritionServing item={nutritionServing} />
                </Col>
            </Row> 
        </>
    );
};

export default NutritionFetchEntireDish;