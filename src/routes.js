import AddArticlesPage from "./pages/AddArticlesPage";
import AddNewsPage from "./pages/AddNewsPage";
import AddRecipePage from "./pages/AddRecipePage";
import AddTvShowPage from "./pages/AddTvShowPage";
import AddVideoRecipePage from "./pages/AddVideoRecopePage";
import Admin from "./pages/Admin";
import Articles from "./pages/Articles";
import Auth from "./pages/Auth";
import Favorites from "./pages/Favorites";
import Main from "./pages/Main";
import News from "./pages/News";
import PersonalAccaunt from "./pages/PersonalAccount";
import Recipes from "./pages/Recipes";
import TvShow from "./pages/TvShow";
import ArticlePage from "./pages/Unit pages/ArticlePage";
import NewsPage from "./pages/Unit pages/NewsPage";
import RecipePage from "./pages/Unit pages/RecipePage";
import TvShowPage from "./pages/Unit pages/TvShowPage";
import VideoRecipePage from "./pages/Unit pages/VideoRecipePage";
import VideoRecipe from "./pages/VideoRecipe";
import { ACCAUNT_ROUTE, ADDARTICLESPAGE_ROUTE, ADDNEWSPAGE_ROUTE, ADDRECIPE_ROUTE, ADDTVSHOWPAGE_ROUTE, ADDVIDEORECIPEPAGE_ROUTE, ADMIN_ROUTE, ARTICLESPAGE_ROUTE, ARTICLES_ROUT, FAVORITES_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, NEWSPAGE_ROUTE, NEWS_ROUTE, RECIPEPAGE_ROUTE, RECIPES_ROUTE, REGISTRATION_ROUTE, TVSHOWPAGE_ROUTE, TVSHOW_ROUTE, VIDEORECIPEPAGE_ROUTE, VIDEORECIPES_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: FAVORITES_ROUTE,
        Component: Favorites
    },
    {
        path: ACCAUNT_ROUTE,
        Component: PersonalAccaunt
    },
    {
        path: ADDRECIPE_ROUTE,
        Component: AddRecipePage
    },
    {
        path: ADDVIDEORECIPEPAGE_ROUTE,
        Component: AddVideoRecipePage
    },
    {
        path: ADDARTICLESPAGE_ROUTE,
        Component: AddArticlesPage
    },
    {
        path: ADDNEWSPAGE_ROUTE,
        Component: AddNewsPage
    },
    {
        path: ADDTVSHOWPAGE_ROUTE,
        Component: AddTvShowPage
    },
];

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: ARTICLES_ROUT,
        Component: Articles
    },
    {
        path: NEWS_ROUTE,
        Component: News
    },
    {
        path: RECIPES_ROUTE,
        Component: Recipes
    },
    {
        path: TVSHOW_ROUTE,
        Component: TvShow
    },
    {
        path: VIDEORECIPES_ROUTE,
        Component: VideoRecipe
    },
    {
        path: ARTICLESPAGE_ROUTE,
        Component: ArticlePage
    },
    {
        path: NEWSPAGE_ROUTE,
        Component: NewsPage
    },
    {
        path: RECIPEPAGE_ROUTE + '/:title',
        Component: RecipePage
    },
    {
        path: TVSHOWPAGE_ROUTE,
        Component: TvShowPage
    },
    {
        path: VIDEORECIPEPAGE_ROUTE + '/:title',
        Component: VideoRecipePage
    },
    {
        path: ARTICLESPAGE_ROUTE + '/:title',
        Component: ArticlePage
    },
    {
        path: NEWSPAGE_ROUTE + '/:title',
        Component: NewsPage
    },
    {
        path: TVSHOWPAGE_ROUTE + '/:title',
        Component: TvShowPage
    },
];