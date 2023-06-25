import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserById } from "../../http/userApi";
import { NEWSPAGE_ROUTE } from "../../../utils/consts";

import defaultImg from '../../../images/DefaultAvatar.png';

const NewsDefault = ({news}) => {
    const navigate = useNavigate();
    const [creator, setCreator] = useState({});

    useEffect(() => {
        getUserById(news.user_id).then(data => setCreator(data[0]));
    }, [news]);

    return ( 
    <div className="recipe-default" onClick={() => navigate(NEWSPAGE_ROUTE + "/" + news.title)}>
        <img src={process.env.REACT_APP_API_URL + '/' + news.img} alt="Каритнка кстатьи" className="recipe-default__img"/>
        <div className="recipe-info">
        <p className='recipe-info__category' style={{backgroundColor: '#f66'}}>
                НОВОСТИ
            </p>
            <h4 className="recipe-info__title">{news.title}</h4>
            <p className="recipe-info__description">{news.info}</p>
            <div className="recipe-creator">
                <img src={creator.img ? process.env.REACT_APP_API_URL + '/' + creator.img : defaultImg} alt="Аватар пользователя" className="recipe-creator__img"/>
                <div className="recipe-creator-text">
                    <p className="recipe-creator__name">{creator.name}</p>
                    <p className="recipe-creator__time">{news.generatedd.slice(0, 10)}</p>
                </div>
                <hr/>
            </div>
        </div>
    </div>
    );
}

export default NewsDefault;