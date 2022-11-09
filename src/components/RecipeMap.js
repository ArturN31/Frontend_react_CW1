import RecipeOutput from "./RecipeOutput";

const RecipeMap = ({ recipeList }) => {
    return (
        recipeList.map((item, index) => {
            return (
                <RecipeOutput item={item} key={index}/>
            )
        })
    );
};

export default RecipeMap;