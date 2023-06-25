import { makeAutoObservable} from "mobx";

export default class NewsStore {
    constructor() {
        this._news = [
            //    {id: 1, user_id: 2, title: "Сгорел пекарь", img: "https://e3.edimdoma.ru/data/posts/0002/8256/28256-ed4_small.jpg?1684499489", info: "Сгорел пекарь кошмар", news_articles: 1, generatedd: "20.05.2023"},
            //    {id: 2, user_id: 2, title: "Сгорел пекарь 2", img: "https://e2.edimdoma.ru/data/posts/0002/8273/28273-ed4_small.jpg?1684834689", info: "Сгорел пекарь кошмар 2", news_articles: 1, generatedd: "20.05.2023"},
            //    {id: 3, user_id: 2, title: "Сгорел пекарь 3", img: "https://e1.edimdoma.ru/data/posts/0002/8260/28260-ed4_small.jpg?1684742715", info: "Сгорел пекарь кошмар 3", news_articles: 1, generatedd: "20.05.2023"},
            //    {id: 4, user_id: 2, title: "Сгорел пекарь 2", img: "https://e0.edimdoma.ru/data/posts/0002/8268/28268-ed4_small.jpg?1684764142", info: "Сгорел пекарь кошмар 2", news_articles: 1, generatedd: "20.05.2023"},
            //    {id: 5, user_id: 2, title: "Сгорел пекарь 3", img: "https://e1.edimdoma.ru/data/posts/0002/8237/28237-ed4_small.jpg?1684329452", info: "Сгорел пекарь кошмар 3", news_articles: 1, generatedd: "20.05.2023"},
            //    {id: 6, user_id: 2, title: "Сгорел пекарь 2", img: "https://e1.edimdoma.ru/data/posts/0002/8251/28251-ed4_small.jpg?1684486635", info: "Сгорел пекарь кошмар 2", news_articles: 1, generatedd: "20.05.2023"},
            //    {id: 7, user_id: 2, title: "Сгорел пекарь 3", img: "https://e3.edimdoma.ru/data/posts/0002/8232/28232-ed4_small.jpg?1684318902", info: "Сгорел пекарь кошмар 3", news_articles: 1, generatedd: "20.05.2023"},
            ];

        makeAutoObservable(this);
    }

    setNews(news) {
        this._news = news;
    }

    get news() {
        return this._news;
    }
}