import {INCREMENT, DELETE_ARTICLE, SELECT_ARTICLES} from '../constants';

export const incrementAC = () => {
    return {type: INCREMENT}
};

export const deleteArticleAC = (articleId) => {
    return {
        type: DELETE_ARTICLE,
        payload: articleId
    }
};

export const selectArticlesAC = (selectedOption) => {
    return {
        type: SELECT_ARTICLES,
        payload: selectedOption
    }
};
