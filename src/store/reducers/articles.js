import {DELETE_ARTICLE, ADD_COMMENT} from '../../constants';
import {normalizedArticles} from '../../fixtures';
import { Map, fromJS } from 'immutable';

const defaultArticles = normalizedArticles.reduce((acc, article) => {
    acc[article.id] = article;
    return acc;
}, {});

export default (articles = fromJS(defaultArticles), action) => {
    const { type, payload, newCommentId } = action;

    switch (type) {
        case DELETE_ARTICLE: {
            return articles.delete(payload.id);
        }
        case ADD_COMMENT: {
           return articles.updateIn(
                [payload.articleId, `comments`],
                (comments) => comments.concat(newCommentId) 
            )
            // const article = articles[payload.articleId];
            // return {
            //   ...articles,
            //   [payload.articleId]: {
            //     ...article,
            //     comments: (article.comments || []).concat(newCommentId)
            //   }
            // }
        }
        default:
            return articles
    }
}
