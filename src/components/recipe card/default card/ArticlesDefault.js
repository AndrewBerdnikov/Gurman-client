import { useNavigate } from 'react-router-dom';
import defaultImg from '../../../images/DefaultAvatar.png';
import { useEffect, useState } from 'react';
import { getUserById } from '../../http/userApi';
import { ARTICLESPAGE_ROUTE } from '../../../utils/consts';

const ArticlesDefault = ({article}) => {
    const navigate = useNavigate();
    const [creator, setCreator] = useState({});

    useEffect(() => {
        getUserById(article.user_id).then(data => setCreator(data[0]));
    }, [article]);

    return ( 
    <div className="recipe-default" onClick={() => navigate(ARTICLESPAGE_ROUTE + "/" + article.title)}>
        <img src={process.env.REACT_APP_API_URL + '/' + article.img} alt="Каритнка кстатьи" className="recipe-default__img"/>
        <div className="recipe-info">
        <p className='recipe-info__category' style={{backgroundColor: '#eb51a9'}}>
                СТАТЬИ
            </p>
            <h4 className="recipe-info__title">{article.title}</h4>
            <p className="recipe-info__description">{article.info}</p>
            <div className="recipe-creator">
                <img src={creator.img ? process.env.REACT_APP_API_URL + '/' + creator.img : defaultImg} alt="Аватар пользователя" className="recipe-creator__img"/>
                <div className='recipe-creator-text'>
                    <p className="recipe-creator__name">{creator.name}</p>
                    <p className="recipe-creator__time">{article.generatedd.slice(0, 10)}</p>
                </div>
                <hr/>
            </div>
        </div>
    </div>
    );
}

export default ArticlesDefault;