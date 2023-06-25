import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ADDRECIPE_ROUTE } from '../../utils/consts';
import { observer } from 'mobx-react-lite';

const RecipeNormalAside = observer(() => {
    const location = useLocation();

    return (
        <>
        <div className='recipe-aside'>
            {location.pathname == ADDRECIPE_ROUTE ? <p className='recipe-aside__filter'>Добавте фильтры</p> : <p className='recipe-aside__filter'>Фильтры запроса</p>}
            <span className='recipe-aside__title'>Категории блюд:</span>
            <div className='recipe-aside-list'>
                <p className='recipe-aside-list__item'><input id="1" type='checkbox' className='recipe-aside-list__checkbox' value='Выпечка'/><label htmlFor='1'>Выпечка</label></p>
                <p className='recipe-aside-list__item'><input  id="2" type='checkbox' className='recipe-aside-list__checkbox' value='Основные блюда'/><label htmlFor='2'>Основные блюда</label></p>
                <p className='recipe-aside-list__item'><input  id="3" type='checkbox' className='recipe-aside-list__checkbox' value='Супы и бульены'/><label htmlFor='3'>Супы и бульены</label></p>
                <p className='recipe-aside-list__item'><input  id="4" type='checkbox' className='recipe-aside-list__checkbox' value='Закуски'/><label htmlFor='4'>Закуски</label></p>
            </div>
        </div>
        <div className='recipe-aside'>
            <span className='recipe-aside__title'>По времени:</span>
            <div className='recipe-aside-list'>
                <p className='recipe-aside-list__item'><input id="5" type='checkbox' className='recipe-aside-list__checkbox' value='15'/><label htmlFor='5'>До 15 минут</label></p>
                <p className='recipe-aside-list__item'><input  id="6" type='checkbox' className='recipe-aside-list__checkbox' value='25'/><label htmlFor='6'>До 25 минут</label></p>
                <p className='recipe-aside-list__item'><input  id="7" type='checkbox' className='recipe-aside-list__checkbox' value='35'/><label htmlFor='7'>До 35 минут</label></p>
                <p className='recipe-aside-list__item'><input  id="8" type='checkbox' className='recipe-aside-list__checkbox' value='45'/><label htmlFor='8'>До 45 минут</label></p>
            </div>
        </div>
        <div className='recipe-aside'>
            <span className='recipe-aside__title'>По кухне:</span>
            <div className='recipe-aside-list'>
                <p className='recipe-aside-list__item'><input id="9" type='checkbox' className='recipe-aside-list__checkbox' value='Абхазская'/><label htmlFor='9'>Абхазская</label></p>
                <p className='recipe-aside-list__item'><input  id="10" type='checkbox' className='recipe-aside-list__checkbox' value='Австралийская'/><label htmlFor='10'>Австралийская</label></p>
                <p className='recipe-aside-list__item'><input  id="11" type='checkbox' className='recipe-aside-list__checkbox' value='Алжирская'/><label htmlFor='11'>Алжирская</label></p>
                <p className='recipe-aside-list__item'><input  id="12" type='checkbox' className='recipe-aside-list__checkbox' value='Русская'/><label htmlFor='12'>Русская</label></p>
            </div>
        </div>
        <div className='recipe-aside'>
            <span className='recipe-aside__title'>Время приема пищи:</span>
            <div className='recipe-aside-list'>
                <p className='recipe-aside-list__item'><input id="13" type='checkbox' className='recipe-aside-list__checkbox' value='Завтрак'/><label htmlFor='13'>Завтрак</label></p>
                <p className='recipe-aside-list__item'><input  id="14" type='checkbox' className='recipe-aside-list__checkbox' value='Обед'/><label htmlFor='14'>Обед</label></p>
                <p className='recipe-aside-list__item'><input  id="15" type='checkbox' className='recipe-aside-list__checkbox' value='Ужин'/><label htmlFor='15'>Ужин</label></p>
                <p className='recipe-aside-list__item'><input  id="16" type='checkbox' className='recipe-aside-list__checkbox' value='Полдник'/><label htmlFor='16'>Полдник</label></p>
            </div>
        </div>
        <div className='recipe-aside'>
            <span className='recipe-aside__title'>По праздникам:</span>
            <div className='recipe-aside-list'>
                <p className='recipe-aside-list__item'><input id="17" type='checkbox' className='recipe-aside-list__checkbox' value='Масленица'/><label htmlFor='17'>Масленица</label></p>
                <p className='recipe-aside-list__item'><input  id="18" type='checkbox' className='recipe-aside-list__checkbox' value='Новый год'/><label htmlFor='18'>Новый год</label></p>
                <p className='recipe-aside-list__item'><input  id="19" type='checkbox' className='recipe-aside-list__checkbox' value='Пасха'/><label htmlFor='19'>Пасха</label></p>
                <p className='recipe-aside-list__item'><input  id="20" type='checkbox' className='recipe-aside-list__checkbox' value='Пост'/><label htmlFor='20'>Пост</label></p>
            </div>
        </div>
        </>
    );
});

export default RecipeNormalAside;