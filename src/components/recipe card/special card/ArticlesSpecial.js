import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserById } from '../../http/userApi';
import { ARTICLESPAGE_ROUTE } from '../../../utils/consts';

import defaultImg from '../../../images/DefaultAvatar.png';

const ArticleSpecial = ({article}) => {
    const navigate = useNavigate();
    const [creator, setCreator] = useState({});

    useEffect(() => {
        getUserById(article.user_id).then(data => setCreator(data[0]));
    }, [article]);

    return (
        <div className='recipe-special' onClick={() => navigate(ARTICLESPAGE_ROUTE + "/" + article.title)} style={{backgroundImage: `linear-gradient( rgba(58, 56, 56, 0.5), rgba(58, 56, 56, 0.5) ), url(${process.env.REACT_APP_API_URL + '/' +  article.img})`}}>
            <p className='recipe-special-category' style={{backgroundColor: '#eb51a9'}}>
                СТАТЬИ
            </p>
            <div className='recipe-special-content'>
                <p className='recipe-special-content__title'>{article.title}</p>
                <p className='recipe-special-content__description'>{article.info}</p>
                <div className='recipe-special-content-creator'>
                    <img className='recipe-special-content-creator__img' src={creator.img ? process.env.REACT_APP_API_URL + '/' + creator.img : defaultImg} alt='Аватар пользователя'></img>
                    <p className='recipe-special-content-creator__name'>{creator.name}</p>
                    <p className='recipe-special-content-creator__time'>{article.generatedd.slice(0, 10)}</p>
                </div>
            </div>
        </div>
    );
}

export default ArticleSpecial;