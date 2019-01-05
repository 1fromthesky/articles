import {DELETE_ARTICLE, SELECT_ARTICLES, DAYS_RANGE} from '../../constants';
import articles from '../../fixtures';

export default (articleState = articles, action) => {
    switch (action.type) {
        case DELETE_ARTICLE:
            return articleState.filter(article => article.id !== action.payload);
        case SELECT_ARTICLES:
            if (action.payload.length === 0) {
                return articles;
            }
            // return articles.filter(article => action.payload.find((item) => {
            //     return article.id === item.value;
            // }));

            const newArticles = [];
            action.payload.forEach((item) => {
                const selectArticle = articles.find((article) => {
                    return article.id === item.value;
                });

                if (selectArticle) {
                    newArticles.push(selectArticle);
                }
            });
            return newArticles;
        case DAYS_RANGE:
            if (!action.payload) return articles;

            return articles.filter((article) => {
                const articleDate = new Date(article.date);
                return articleDate >= action.payload.from && articleDate <= action.payload.to;
            });
        default:
            return articleState;
    }

}
