import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserById } from "../../http/userApi";

import defaultImg from '../../../images/DefaultAvatar.png';
import { TVSHOWPAGE_ROUTE } from "../../../utils/consts";

const TvShowDefault = ({tvShow}) => {
    const navigate = useNavigate();
    const [creator, setCreator] = useState({});

    useEffect(() => {
        getUserById(tvShow.user_id).then(data => setCreator(data[0]));
    }, []);

    return ( 
    <div className="recipe-default" onClick={() => navigate(TVSHOWPAGE_ROUTE + "/" + tvShow.title)}>
        {/* <img src={process.env.REACT_APP_API_URL + '/' + tvShow.img} alt="Каритнка кстатьи" className="recipe-default__img"/> */}
        <iframe className="recipe-default__video" src={tvShow.img}></iframe>
        <div className="recipe-info">
        <p className='recipe-info__category' style={{backgroundColor: '#59a2ed'}}>
                ТВ-ШОУ
            </p>
            <h4 className="recipe-info__title">{tvShow.title}</h4>
            <p className="recipe-info__description">{tvShow.info}</p>
            <div className="recipe-creator">
                <img src={creator.img ? process.env.REACT_APP_API_URL + '/' + creator.img : defaultImg} alt="Аватар пользователя" className="recipe-creator__img"/>
                <div className="recipe-creator-text">
                    <p className="recipe-creator__name">{creator.name}</p>
                    <p className="recipe-creator__time">{tvShow.generatedd.slice(0, 10)}</p>
                </div>
                <hr/>
            </div>
        </div>
    </div>
    );
}

export default TvShowDefault;