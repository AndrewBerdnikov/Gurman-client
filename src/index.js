import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserStote from './store/UserStore';
import RecipeStore from './store/RecipeStore';
import TvShowStore from './store/TvShowStore';
import ArticlesStore from './store/ArticlesStore';
import NewsStore from './store/NewsStore';

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value = {{
      user: new UserStote(),
      recipes: new RecipeStore(),
      tvShow: new TvShowStore(),
      news: new NewsStore(),
      articles: new ArticlesStore()
    }}>
        <App />
    </Context.Provider>
  </React.StrictMode>
);


reportWebVitals();
