import { useEffect, useState, useCallback } from "react";
import Search from "./RecipeFilter";

//fetches recipes from backend API
const RecipeFetch = () => {
    const [recipes, setRecipes]=useState([]);

    const fetchData = useCallback(() => {
        const url = "/recipes";
        fetch(url)
        .then((response) => response.json())
        .then((incomingData) => {
            setRecipes(incomingData);
        })
        .catch((err) => console.error(err));
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <Search data={recipes}/>
    )
}

export default RecipeFetch;