import { makeAutoObservable} from "mobx";

export default class ArticlesStore {
    constructor() {
        this._articles = [
            // {id: 1, user_id: 2, title: "Полезные блюда", img: "https://e2.edimdoma.ru/data/posts/0002/8194/28194-ed4_small.jpg?1684151628", info: "Полезные блюда на все времена", news_articles: 0, generatedd: "20.05.2023"},
            // {id: 2, user_id: 2, title: "Полезные блюда 2", img: "https://e2.edimdoma.ru/data/posts/0002/2761/22761-ed4_small.jpg?1631188379", info: "Полезные блюда на все времена 2", news_articles: 0, generatedd: "20.05.2023"},
            // {id: 3, user_id: 2, title: "Полезные блюда 3", img: "https://e0.edimdoma.ru/data/posts/0002/8227/28227-ed4_small.jpg?1684509467", info: "Полезные блюда на все времена 3", news_articles: 0, generatedd: "20.05.2023"},
            // {id: 4, user_id: 2, title: "Полезные блюда 3", img: "https://e1.edimdoma.ru/data/posts/0002/8235/28235-ed4_small.jpg?1684325502", info: "Полезные блюда на все времена 3", news_articles: 0, generatedd: "20.05.2023"},
            // {id: 5, user_id: 2, title: "Полезные блюда 3", img: "https://e2.edimdoma.ru/data/posts/0002/8224/28224-ed4_small.jpg?1684244281", info: "Полезные блюда на все времена 3", news_articles: 0, generatedd: "20.05.2023"},
            // {id: 6, user_id: 2, title: "Полезные блюда 3", img: "https://e2.edimdoma.ru/data/posts/0002/8226/28226-ed4_small.jpg?1684250870", info: "Полезные блюда на все времена 3", news_articles: 0, generatedd: "20.05.2023"},
            // {id: 7, user_id: 2, title: "Полезные блюда 3", img: "https://e2.edimdoma.ru/data/posts/0002/8192/28192-ed4_small.jpg?1683813912", info: "Полезные блюда на все времена 3", news_articles: 0, generatedd: "20.05.2023"},
        ];

        makeAutoObservable(this);
    }

    setArticles(articles) {
        this._articles = articles;
    }

    get articles() {
        return this._articles;
    }
}