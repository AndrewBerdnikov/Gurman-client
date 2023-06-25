import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';

const Pagination = observer(() => {
    const {recipes} = useContext(Context);
    const pageCount = Math.ceil(recipes.totalCount / recipes.limit);
    const pages = [];

    const handlePageChange = (page) => {
        recipes.setPage(page); // Обновление текущей страницы в объекте recipes
    };

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1);
    }

    if (pageCount <= 1) {
        return null; // Если всего одна страница, не отображаем пагинацию
    }    

    return (
        <div className='pagination'>
            <div className='container'>
                <div className='pagination-content'>
                    {pages.map(page => 
                        <span key={page} className={`pagination-content__item ${
                            page === recipes.page ? 'active' : ''
                        }`} onClick={() => handlePageChange(page)}>{page}</span>
                    )}
                </div>
            </div>
        </div>
    );
});

export default Pagination;