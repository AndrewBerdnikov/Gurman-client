import { makeAutoObservable} from "mobx";

export default class TvShowStore {
    constructor() {
        this._tvShow = [
                // {id: 1, user_id: 2, title: "Готовим вместе", img: "https://e3.edimdoma.ru/data/full_telecasts/0000/2999/2999-ed4_wide.jpg?1682499033", info: "Передача готовим вместе", generatedd: "20.05.2023"},
                // {id: 2, user_id: 2, title: "Готовим вместе 2", img: "https://e3.edimdoma.ru/data/full_telecasts/0000/2999/2999-ed4_wide.jpg?1682499033", info: "Передача готовим вместе 2", generatedd: "20.05.2023"},
                // {id: 3, user_id: 2, title: "Готовим вместе 3", img: "https://e3.edimdoma.ru/data/full_telecasts/0000/2999/2999-ed4_wide.jpg?1682499033", info: "Передача готовим вместе 3", generatedd: "20.05.2023"},
                // {id: 4, user_id: 2, title: "Готовим вместе", img: "https://e3.edimdoma.ru/data/full_telecasts/0000/2999/2999-ed4_wide.jpg?1682499033", info: "Передача готовим вместе", generatedd: "20.05.2023"},
                // {id: 5, user_id: 2, title: "Готовим вместе 2", img: "https://e3.edimdoma.ru/data/full_telecasts/0000/2999/2999-ed4_wide.jpg?1682499033", info: "Передача готовим вместе 2", generatedd: "20.05.2023"},
                // {id: 6, user_id: 2, title: "Готовим вместе 3", img: "https://e3.edimdoma.ru/data/full_telecasts/0000/2999/2999-ed4_wide.jpg?1682499033", info: "Передача готовим вместе 3", generatedd: "20.05.2023"},
                // {id: 7, user_id: 2, title: "Готовим вместе", img: "https://e3.edimdoma.ru/data/full_telecasts/0000/2999/2999-ed4_wide.jpg?1682499033", info: "Передача готовим вместе", generatedd: "20.05.2023"},
            ];

        makeAutoObservable(this);
    }

    setTvShow(tvShow) {
        this._tvShow = tvShow;
    }

    get tvShow() {
        return this._tvShow;
    }
}