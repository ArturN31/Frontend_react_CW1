import React, { useEffect, useState, useCallback } from "react";
import Nutrition from "./Nutrition";

//Fetches nutrition from api
const FetchData = ({ query }) => {
    const [nutrition, setNutrition] = useState({
        sugar_g: 0,
        fiber_g: 0,
        fat_total_g: 0,
        calories: 0,
        protein_g: 0,
        carbohydrates_total_g: 0,
    });

    const fetchData = useCallback(() => {
        // console.log(query); 
        const url = "https://calorieninjas.p.rapidapi.com/v1/nutrition?query=" + query;
        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": "1d58921705msh245766403d25742p168f1fjsnf10093f4d66b",
                "X-RapidAPI-Host": "calorieninjas.p.rapidapi.com",
            },
        };

        fetch(url, options)
        .then((response) => response.json())
        .then((incomingData) => {
            //looping through items and adding nutrient values
            var sugar_g = incomingData.items.map(ingredient => ingredient.sugar_g).reduce((a, b) => Math.round(a+b));
            var fiber_g = incomingData.items.map(ingredient => ingredient.fiber_g).reduce((a, b) => Math.round(a+b));
            var fat_total_g = incomingData.items.map(ingredient => ingredient.fat_total_g).reduce((a, b) => Math.round(a+b));
            var calories = incomingData.items.map(ingredient => ingredient.calories).reduce((a, b) => Math.round(a+b));
            var protein_g = incomingData.items.map(ingredient => ingredient.protein_g).reduce((a, b) => Math.round(a+b));
            var carbohydrates_total_g = incomingData.items.map(ingredient => ingredient.carbohydrates_total_g).reduce((a, b) => Math.round(a+b));

            var nutrients = [
                {
                    sugar_g,
                    fiber_g,
                    fat_total_g,
                    calories,
                    protein_g,
                    carbohydrates_total_g
                }
            ];

            setNutrition(nutrients[0]);
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

export default FetchData;