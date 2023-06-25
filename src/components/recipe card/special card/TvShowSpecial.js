import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserById } from '../../http/userApi';
import { TVSHOWPAGE_ROUTE } from '../../../utils/consts';

import defaultImg from '../../../images/DefaultAvatar.png';

const TvShowSpecial = ({tvShow}) => {
    const navigate = useNavigate();
    const [creator, setCreator] = useState({});

    useEffect(() => {
        getUserById(tvShow.user_id).then(data => setCreator(data[0]));
    }, [tvShow]);

    return (
        <div className='recipe-special' onClick={() => navigate(TVSHOWPAGE_ROUTE + "/" + tvShow.title)} style={{backgroundImage: `linear-gradient( rgba(58, 56, 56, 0.5), rgba(58, 56, 56, 0.5) ), url(${process.env.REACT_APP_API_URL + '/' +  tvShow.img})`}}>
            <p className='recipe-special-category' style={{backgroundColor: '#59a2ed'}}>
                ТВ-ШОУ
            </p>
            <div className='recipe-special-content'>
                <p className='recipe-special-content__title'>{tvShow.title}</p>
                <p className='recipe-special-content__description'>{tvShow.description}</p>
                <div className='recipe-special-content-creator'>
                    <img className='recipe-special-content-creator__img' src={creator.img ? process.env.REACT_APP_API_URL + '/' + creator.img : defaultImg} alt='Аватар пользователя'></img>
                    <p className='recipe-special-content-creator__name'>{creator.name}</p>
                    <p className='recipe-special-content-creator__time'>{tvShow.generatedd.slice(0, 10)}</p>
                </div>
            </div>
        </div>
    );
}

export default TvShowSpecial;