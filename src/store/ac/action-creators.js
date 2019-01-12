import {
  INCREMENT,
  DELETE_ARTICLE,
  CHANGE_DATE_RANGE,
  CHANGE_SELECTION,
  ADD_COMMENT,
  LOAD_ALL_ARTICLES,
  LOAD_ARTICLE
} from '../../constants'

export const incrementAC = () => {
  return { type: INCREMENT }
}

export const deleteArticleAC = (articleId) => {
  return {
    type: DELETE_ARTICLE,
    payload: { id: articleId }
  }
}

export const changeDateRangeAC = (dateRange) => {
  return {
    type: CHANGE_DATE_RANGE,
    payload: { dateRange }
  }
}

export const changeSelectionAC = (selected) => {
  return {
    type: CHANGE_SELECTION,
    payload: { selected }
  }
}

export const addCommentAC = (comment, articleId) => {
  return {
    type: ADD_COMMENT,
    payload: { comment, articleId },
    generateId: true
  }
}

export const loadAllArticlesAC = () => {
  return {
    type: LOAD_ALL_ARTICLES,
    callAPI: `/api/article`
  }
}

export const loadArticle = (id) => {
  return {
    type: LOAD_ARTICLE,
    payload: { id },
    callAPI: `/api/article/${id}`
  }
}
