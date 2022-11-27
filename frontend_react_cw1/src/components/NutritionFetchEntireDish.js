import React, { useEffect, useState, useCallback } from "react";
import Nutrition from "./Nutrition";

//Fetches nutrition from api
const NutritionFetchEntireDish = ({ query }) => {
    const [nutrition, setNutrition] = useState({
        sugar_g: 0,
        fiber_g: 0,
        fat_total_g: 0,
        calories: 0,
        protein_g: 0,
        carbohydrates_total_g: 0,
    });

    const fetchData = useCallback(() => {
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

        fetch(url, options)
        .then((response) => {
            //502 error occurs when switching displayed recipes quickly after refreshing page
            //potentially disable displayed recipes select options until first fetch is done
            if (!response.ok) {throw response} 
            return response.json();
        })
        .then((incomingData) => {
            if (incomingData.items) { //handling .map undefined
                //looping through items and adding nutrient values to establish totals
                var calories = incomingData.items.map(ingredient => ingredient.calories).reduce((a, b) => a+b).toFixed(2);
                var protein_g = incomingData.items.map(ingredient => ingredient.protein_g).reduce((a, b) => a+b).toFixed(2);
                var carbohydrates_total_g = incomingData.items.map(ingredient => ingredient.carbohydrates_total_g).reduce((a, b) => a+b).toFixed(2);
                var sugar_g = incomingData.items.map(ingredient => ingredient.sugar_g).reduce((a, b) => a+b).toFixed(2);
                var fiber_g = incomingData.items.map(ingredient => ingredient.fiber_g).reduce((a, b) => a+b).toFixed(2);
                var fat_total_g = incomingData.items.map(ingredient => ingredient.fat_total_g).reduce((a, b) => a+b).toFixed(2);
                var fat_saturated_g = incomingData.items.map(ingredient => ingredient.fat_saturated_g).reduce((a, b) => a+b).toFixed(2);

                //array of above vars
                var nutrients = [
                    {
                        calories,
                        protein_g,
                        carbohydrates_total_g,
                        sugar_g,
                        fiber_g,
                        fat_total_g,
                        fat_saturated_g
                    }
                ];

                //sets nutrition that is passed to the nutrition component
                setNutrition(nutrients[0]);
            }
        })
        .catch((err) => console.error(err));
    }, [query]);

    useEffect(() => {
        fetchData();
    }, [fetchData, query]);

    return (
        <Nutrition item={nutrition} />
    );
};

export default NutritionFetchEntireDish;