import { makeAutoObservable} from "mobx";

export default class RecipeStore {
    constructor() {
        this._recipes = [
            // {id: 2, user_id: 2, title: "Суп", img: "https://e1.edimdoma.ru/data/recipes/0015/1837/151837-ed4_small.jpg?1684320151", video: "eweweasd", description: "очень вкусный суп", generatedd: "20.05.2023"},
            // {id: 3, user_id: 2, title: "Пельмени", img: "https://e0.edimdoma.ru/data/recipes/0015/1838/151838-ed4_small.jpg?1684320409", video: "", description: "хорошие пельмени", generatedd: "20.05.2023"},
            // {id: 4, user_id: 2, title: "Фуагра", img: "https://e0.edimdoma.ru/data/recipes/0015/1840/151840-ed4_small.jpg?1684401136", video: "", description: "Фуагра ляляля", generatedd: "20.05.2023"},
            // {id: 5, user_id: 2, title: "Кальмар", img: "https://e0.edimdoma.ru/data/recipes/0015/1834/151834-ed4_small.jpg?1684265093", video: "", description: "Добротный кальмар", generatedd: "20.05.2023"},
            // {id: 6, user_id: 2, title: "Суп", img: "https://e0.edimdoma.ru/data/recipes/0015/1812/151812-ed4_small.jpg?1683716413", video: "eweweasd", description: "очень вкусный суп", generatedd: "20.05.2023"},
            // {id: 7, user_id: 2, title: "Пельмени", img: "https://e2.edimdoma.ru/data/recipes/0015/1714/151714-ed4_small.jpg?1681900673", video: "", description: "хорошие пельмени", generatedd: "20.05.2023"},
        ];

        this._videoRecipes = [

        ];

        this._mainInfo = [
            {id: 1, recipe_id: 2, kitchen: 'Русская', categories: 'Основные блюда', time_of_day: 'Обед', holiday: ''},
        ];

        this._fastInfo = [
            {id: 1, recipe_id: 2, recipe_for: 3, preparation: 12, cooking_time: 2},
        ];

        this._steps = [
            {recipe_id: 2, img: 'f2w', steps: 'Шаг первый'},
            {recipe_id: 2, img: 'f2w', steps: 'Шаг второй'},
            {recipe_id: 2, img: 'f2w', steps: 'Шаг третий'},
        ];

        this._structure = [
            {recipe_id: 2, products_id: 3, value: 4},
            {recipe_id: 2, products_id: 2, value: 5},
        ];

        this._products = [
            {name: 'Хлеб'},
            {name: 'Молоко'},
            {name: 'Рис'},
            {name: 'Горох'},
            {name: 'Соль'},
        ];

        this._page = 1;
        this._totalCount = 1;
        this._limit = 1000;

        makeAutoObservable(this);
    }

    setRecipes(recipes) {
        this._recipes = recipes;
    }

    get recipes() {
        return this._recipes;
    }

    setVideoRecipes(videoRecipes) {
        this._videoRecipes = videoRecipes;
    }

    get videoRecipes() {
        return this._videoRecipes;
    }

    setMainInfo(mainInfo) {
        this._mainInfo = mainInfo;
    }

    get mainInfo() {
        return this._mainInfo;
    }

    setFastInfo(fastInfo) {
        this._fastInfo = fastInfo;
    }

    get fastInfo() {
        return this._fastInfo;
    }

    setSteps(steps) {
        this._steps = steps;
    }

    get steps() {
        return this._steps;
    }

    setStructure(structure) {
        this._structure = structure;
    }

    get structure() {
        return this._structure;
    }

    setProducts(products) {
        this._products = products;
    }

    get products() {
        return this._products;
    }

    setPage(page) {
        this._page = page;
    }

    get page() {
        return this._page;
    }

    setTotalCount (count) {
        this._totalCount = count;
    }

    get totalCount() {
        return this._totalCount;
    }

    get limit() {
        return this._limit;
    }
}