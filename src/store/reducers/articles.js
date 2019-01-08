import {DELETE_ARTICLE} from '../../constants';
import {normalizedArticles} from '../../fixtures';

const defaultArticles = normalizedArticles.reduce((acc, article) => {
    acc[article.id] = article;
    return acc;
}, {});

export default (articleState = defaultArticles, action) => {
    if (action.type === DELETE_ARTICLE) {
        const newArticleState = Object.assign({}, articleState);
        delete newArticleState[action.payload.id];
        return newArticleState;
    }
    return articleState
}
