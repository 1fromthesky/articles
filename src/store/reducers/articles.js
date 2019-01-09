import {DELETE_ARTICLE, CREATE_COMMENT} from '../../constants';
import {normalizedArticles} from '../../fixtures';

const defaultArticles = normalizedArticles.reduce((acc, article) => {
    acc[article.id] = article;
    return acc;
}, {});

export default (articleState = defaultArticles, action) => {
    switch (action.type) {
        case DELETE_ARTICLE: {
            const newArticlesState = Object.assign({}, articleState);
            delete newArticlesState[action.payload.id];
            return newArticlesState;
        }
        case CREATE_COMMENT: {
            const newArticlesState = Object.assign({}, articleState);
            const newArticleState = Object.assign({}, articleState[action.payload.articleId]);
            newArticleState.comments.push(action.payload.comment.id);
            newArticlesState[action.payload.articleId] = newArticleState;
            return newArticlesState;
        }
        default:
            return articleState
    }
}
