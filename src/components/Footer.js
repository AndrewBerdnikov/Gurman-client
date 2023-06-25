import React from 'react';
import { NavLink } from 'react-router-dom';
import { ARTICLES_ROUT, NEWS_ROUTE, RECIPES_ROUTE, TVSHOW_ROUTE, VIDEORECIPES_ROUTE } from '../utils/consts';

const Footer = () => {
    return ( 
    <footer className="footer">
    <div className="container footer-container">
        <div className="footer-content">
            <div className="footer-info">
                <h2 className="footer-info__title">Гурман</h2>
                <p className="footer-info__text">Здесь вы найдете множество новых кулинарных идей, станете автором собственной Кулинарной книги, встретите друзей-единомышленников и сможете поболтать обо всем на свете!</p>
                <nav className="footer-nav">
                    <p className="footer-nav__title">Навигация по сайту:</p>
                    <ul>
                        <li><NavLink to={RECIPES_ROUTE}><p className="footer-nav__link">Рецепты</p></NavLink></li>
                        <li><NavLink to={VIDEORECIPES_ROUTE} className="footer-nav__link">Видиорецепты</NavLink></li>
                        <li><NavLink to={ARTICLES_ROUT} className="footer-nav__link">Статьи</NavLink></li>
                        <li><NavLink to={NEWS_ROUTE} className="footer-nav__link">Новости</NavLink></li>
                        <li><NavLink to={TVSHOW_ROUTE} className="footer-nav__link">Телепередачи</NavLink></li>
                    </ul>
                </nav>
            </div>
            <div className="footer-bottom">
                <p>© 2023 «Гурман.ру»</p>
                <p>Created by Andrew Berdnikov PO-44k</p>
            </div>
        </div>
    </div>
</footer> );
}
 
export default Footer;