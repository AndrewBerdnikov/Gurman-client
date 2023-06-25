import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ADDRECIPE_ROUTE } from '../../utils/consts';
import { observer } from 'mobx-react-lite';

const RecipeAside = observer(({ onFiltersChange }) => {
    const location = useLocation();

    const [selectedFilters, setSelectedFilters] = useState([]);

    const handleFilterChange = (e) => {
        const filterValue = e.target.value;
        const isChecked = e.target.checked;
    
        // Обновляем состояние выбранных фильтров
        if (isChecked) {
          setSelectedFilters((prevSelectedFilters) => [
            ...prevSelectedFilters,
            filterValue,
          ]);
        } else {
          setSelectedFilters((prevSelectedFilters) =>
            prevSelectedFilters.filter((filter) => filter !== filterValue)
          );
        }
      };

      useEffect(() => {
        onFiltersChange(selectedFilters);
      }, [selectedFilters, onFiltersChange]);

    return (
        <>
        <div className='recipe-aside'>
            {location.pathname == ADDRECIPE_ROUTE ? <p className='recipe-aside__filter'>Добавте фильтры</p> : <p className='recipe-aside__filter'>Фильтры запроса</p>}
            <span className='recipe-aside__title'>Категории блюд:</span>
            <div className='recipe-aside-list'>
                <p className='recipe-aside-list__item'><input id="1" type='checkbox' className='recipe-aside-list__checkbox' value='Выпечка' onChange={handleFilterChange}/><label htmlFor='1'>Выпечка</label></p>
                <p className='recipe-aside-list__item'><input  id="2" type='checkbox' className='recipe-aside-list__checkbox' value='Основные блюда' onChange={handleFilterChange}/><label htmlFor='2'>Основные блюда</label></p>
                <p className='recipe-aside-list__item'><input  id="3" type='checkbox' className='recipe-aside-list__checkbox' value='Супы и бульены' onChange={handleFilterChange}/><label htmlFor='3'>Супы и бульены</label></p>
                <p className='recipe-aside-list__item'><input  id="4" type='checkbox' className='recipe-aside-list__checkbox' value='Закуски' onChange={handleFilterChange}/><label htmlFor='4'>Закуски</label></p>
            </div>
        </div>
        <div className='recipe-aside'>
            <span className='recipe-aside__title'>По кухне:</span>
            <div className='recipe-aside-list'>
                <p className='recipe-aside-list__item'><input id="9" type='checkbox' className='recipe-aside-list__checkbox' value='Абхазская' onChange={handleFilterChange}/><label htmlFor='9'>Абхазская</label></p>
                <p className='recipe-aside-list__item'><input  id="10" type='checkbox' className='recipe-aside-list__checkbox' value='Австралийская' onChange={handleFilterChange}/><label htmlFor='10'>Австралийская</label></p>
                <p className='recipe-aside-list__item'><input  id="11" type='checkbox' className='recipe-aside-list__checkbox' value='Алжирская' onChange={handleFilterChange}/><label htmlFor='11'>Алжирская</label></p>
                <p className='recipe-aside-list__item'><input  id="12" type='checkbox' className='recipe-aside-list__checkbox' value='Русская' onChange={handleFilterChange}/><label htmlFor='12'>Русская</label></p>
            </div>
        </div>
        <div className='recipe-aside'>
            <span className='recipe-aside__title'>Время приема пищи:</span>
            <div className='recipe-aside-list'>
                <p className='recipe-aside-list__item'><input id="13" type='checkbox' className='recipe-aside-list__checkbox' value='Завтрак' onChange={handleFilterChange}/><label htmlFor='13'>Завтрак</label></p>
                <p className='recipe-aside-list__item'><input  id="14" type='checkbox' className='recipe-aside-list__checkbox' value='Обед' onChange={handleFilterChange}/><label htmlFor='14'>Обед</label></p>
                <p className='recipe-aside-list__item'><input  id="15" type='checkbox' className='recipe-aside-list__checkbox' value='Ужин' onChange={handleFilterChange}/><label htmlFor='15'>Ужин</label></p>
                <p className='recipe-aside-list__item'><input  id="16" type='checkbox' className='recipe-aside-list__checkbox' value='Полдник' onChange={handleFilterChange}/><label htmlFor='16'>Полдник</label></p>
            </div>
        </div>
        <div className='recipe-aside'>
            <span className='recipe-aside__title'>По праздникам:</span>
            <div className='recipe-aside-list'>
                <p className='recipe-aside-list__item'><input id="17" type='checkbox' className='recipe-aside-list__checkbox' value='Масленица' onChange={handleFilterChange}/><label htmlFor='17'>Масленица</label></p>
                <p className='recipe-aside-list__item'><input  id="18" type='checkbox' className='recipe-aside-list__checkbox' value='Новый год' onChange={handleFilterChange}/><label htmlFor='18'>Новый год</label></p>
                <p className='recipe-aside-list__item'><input  id="19" type='checkbox' className='recipe-aside-list__checkbox' value='Пасха' onChange={handleFilterChange}/><label htmlFor='19'>Пасха</label></p>
                <p className='recipe-aside-list__item'><input  id="20" type='checkbox' className='recipe-aside-list__checkbox' value='Пост' onChange={handleFilterChange}/><label htmlFor='20'>Пост</label></p>
            </div>
        </div>
        </>
    );
});

export default RecipeAside;