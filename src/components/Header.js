import title from '../images/title.png';
import search from '../images/search.png';
import { NavLink, useLocation } from 'react-router-dom';
import { ACCAUNT_ROUTE, ARTICLES_ROUT, LOGIN_ROUTE, MAIN_ROUTE, NEWS_ROUTE, RECIPES_ROUTE, REGISTRATION_ROUTE, TVSHOW_ROUTE, VIDEORECIPES_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '..';

const Header = observer(() => {
    const location = useLocation();
    const {user} = useContext(Context);

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
    }

    return (     
    <header className="header">
    <div className="container">
        <div className="title-menu">
            <h1 className="title-menu__title"><NavLink to={MAIN_ROUTE}><img src={title} alt="Титул" draggable="false"/></NavLink></h1>
            <div className="title-buttons">
                {user.isAuth ?
                    <><NavLink to={ACCAUNT_ROUTE}><p className="title-buttons__button">Профиль</p></NavLink>
                    <p className="title-buttons__green-button" onClick={() => logOut()}>Выход</p></>
                    :
                    <><NavLink to={REGISTRATION_ROUTE}><p className="title-buttons__button">Регистрация</p></NavLink>
                    <NavLink to={LOGIN_ROUTE}><p className="title-buttons__green-button">Вход</p></NavLink></>
                } 
               
            
            </div>
        </div>
        <nav className="nav">
            <ul>
                <li><NavLink to={RECIPES_ROUTE}>
                        {location.pathname == RECIPES_ROUTE ? <span style={{color: '#ff3917'}}>Рецепты</span> : <span>Рецепты</span>}
                    </NavLink></li>
                <li><NavLink to={VIDEORECIPES_ROUTE}>{location.pathname == VIDEORECIPES_ROUTE ? <span style={{color: '#ff3917'}}>Видеорецепты</span> : <span>Видеорецепты</span>}</NavLink></li>
                <li><NavLink to={ARTICLES_ROUT}>{location.pathname == ARTICLES_ROUT ? <span style={{color: '#ff3917'}}>Статьи</span> : <span>Статьи</span>}</NavLink></li>
                <li><NavLink to={NEWS_ROUTE}>{location.pathname == NEWS_ROUTE ? <span style={{color: '#ff3917'}}>Новости</span> : <span>Новости</span>}</NavLink></li>
                <li><NavLink to={TVSHOW_ROUTE}>{location.pathname == TVSHOW_ROUTE ? <span style={{color: '#ff3917'}}>Телепередачи</span> : <span>Телепередачи</span>}</NavLink></li>
            </ul>
        </nav>
    </div>
    </header> 
    );
});
 
export default Header;