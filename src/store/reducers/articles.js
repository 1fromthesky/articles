import {DELETE_ARTICLE, ADD_COMMENT} from '../../constants';
import {normalizedArticles as defaultArticles} from '../../fixtures';
import { Record } from 'immutable';
import {arrToMap} from '../../utils';

const articleRecord = Record({
    id: null,
    title: null,
    text: null,
    date: null,
    comments: [],
    
})

export default (articles = arrToMap(defaultArticles, articleRecord), action) => {
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
