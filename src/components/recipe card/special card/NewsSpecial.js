import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserById } from '../../http/userApi';

import defaultImg from '../../../images/DefaultAvatar.png';
import { NEWSPAGE_ROUTE } from '../../../utils/consts';

const NewsSpecial = ({news}) => {
    const navigate = useNavigate();
    const [creator, setCreator] = useState({});

    useEffect(() => {
        getUserById(news.user_id).then(data => setCreator(data[0]));
    }, [news]);

    return (
        <div className='recipe-special' onClick={() => navigate(NEWSPAGE_ROUTE + "/" + news.title)} style={{backgroundImage: `linear-gradient( rgba(58, 56, 56, 0.5), rgba(58, 56, 56, 0.5) ), url(${process.env.REACT_APP_API_URL + '/' +  news.img})`}}>
            <p className='recipe-special-category' style={{backgroundColor: '#f66'}}>
                НОВОСТИ
            </p>
            <div className='recipe-special-content'>
                <p className='recipe-special-content__title'>{news.title}</p>
                <p className='recipe-special-content__description'>{news.info}</p>
                <div className='recipe-special-content-creator'>
                    <img className='recipe-special-content-creator__img' src={creator.img ? process.env.REACT_APP_API_URL + '/' + creator.img : defaultImg} alt='Аватар пользователя'></img>
                    <p className='recipe-special-content-creator__name'>{creator.name}</p>
                    <p className='recipe-special-content-creator__time'>{news.generatedd.slice(0, 10)}</p>
                </div>
            </div>
        </div>
    );
}

export default NewsSpecial;