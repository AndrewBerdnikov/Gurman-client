import { useNavigate } from "react-router-dom";
import { RECIPEPAGE_ROUTE, RECIPES_ROUTE } from "../../../utils/consts";

const RecipeCategories = () => {
    const navigate  = useNavigate();

    return ( 
    <>
    <div className="recipe-categories cart1" onClick={() => navigate(RECIPES_ROUTE)}>
        <p className="recipe-categories__title">Готовим для самых любимых</p>
        <button className="recipe-categories__button">Все рецепты</button>
    </div>
    <div className="recipe-categories cart2" onClick={() => navigate(RECIPES_ROUTE)}>
        <p className="recipe-categories__title">Создаем сладкое настроение</p>
        <button className="recipe-categories__button">Все рецепты</button>
    </div>
    <div className="recipe-categories cart3" onClick={() => navigate(RECIPES_ROUTE)}>
        <p className="recipe-categories__title">Подборка рыбных супов</p>
        <button className="recipe-categories__button">Все рецепты</button>
    </div>
    <div className="recipe-categories cart4" onClick={() => navigate(RECIPES_ROUTE)}>
        <p className="recipe-categories__title">Рецепты: полузный смузи</p>
        <button className="recipe-categories__button">Все рецепты</button>
    </div>
    </>
    );
}
 
export default RecipeCategories;