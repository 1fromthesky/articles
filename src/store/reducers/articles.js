import {DELETE_ARTICLE, ADD_COMMENT} from '../../constants';
import {normalizedArticles} from '../../fixtures';

const defaultArticles = normalizedArticles.reduce((acc, article) => {
    acc[article.id] = article;
    return acc;
}, {});

export default (articleState = defaultArticles, action) => {
    const { type, payload, newCommentId } = action;

    switch (type) {
        case DELETE_ARTICLE: {
            const newArticlesState = Object.assign({}, articleState);
            delete newArticlesState[payload.id];
            return newArticlesState;
        }
        case ADD_COMMENT: {
            const article = articleState[payload.articleId];
            return {
              ...articleState,
              [payload.articleId]: {
                ...article,
                comments: (article.comments || []).concat(newCommentId)
              }
            }
        }
        default:
            return articleState
    }
}
