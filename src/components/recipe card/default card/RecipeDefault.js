import { useNavigate } from "react-router-dom";
import { RECIPEPAGE_ROUTE } from "../../../utils/consts";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { getUserById } from "../../http/userApi";

import defaultImg from '../../../images/DefaultAvatar.png';

const RecipeDefault = observer(({recipe}) => {
    const navigate = useNavigate();
    const [creator, setCreator] = useState({});

    useEffect(() => {
        getUserById(recipe.user_id).then(data => setCreator(data[0]));
    }, [recipe]);

    return ( 
    <div className="recipe-default" onClick={() => navigate(RECIPEPAGE_ROUTE + "/" + recipe.title)}>
        <img src={process.env.REACT_APP_API_URL + '/' + recipe.img} alt="Картинка рецепта" className="recipe-default__img"/>
        <div className="recipe-info">
            <p className='recipe-info__category'>
                РЕЦЕПТЫ
            </p>
            <h4 className="recipe-info__title">{recipe.title}</h4>
            <p className="recipe-info__description">{recipe.description}</p>
            <div className="recipe-creator">
                <img src={creator.img ? process.env.REACT_APP_API_URL + '/' + creator.img : defaultImg} alt="Аватар пользователя" className="recipe-creator__img"/>
                <div className="recipe-creator-text">
                    <p className="recipe-creator-text__name">{creator.name}</p>
                    <p className="recipe-creator-text__time">{recipe.generatedd.slice(0, 10)}</p>
                </div>
                <hr/>
            </div>
        </div>
    </div>
    );
});

export default RecipeDefault;