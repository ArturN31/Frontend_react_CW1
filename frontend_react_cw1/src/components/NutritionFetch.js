import React, { useEffect, useState, useCallback } from "react";
import Nutrition from "./Nutrition";

//Fetches nutrition from api
const FetchData = ({ query }) => {
    const [nutrition, setNutrition] = useState({
        sugar_g: 0,
        fiber_g: 0,
        serving_size_g: 0,
        sodium_mg: 0,
        name: 0,
        potassium_mg: 0,
        fat_saturated_g: 0,
        fat_total_g: 0,
        calories: 0,
        cholesterol_mg: 0,
        protein_g: 0,
        carbohydrates_total_g: 0,
    });

    const fetchData = useCallback(() => {
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
            if (incomingData.items.length !== 0)
            setNutrition(incomingData.items[0]);
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