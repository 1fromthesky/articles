import {INCREMENT, DELETE_ARTICLE} from '../constants';

export const incrementAC = () => {
    return {type: INCREMENT}
};

export const deleteArticleAC = (articleId) => {
    return {
        type: DELETE_ARTICLE,
        payload: articleId
    }
};
