import {
  INCREMENT,
  DELETE_ARTICLE,
  CHANGE_DATE_RANGE,
  CHANGE_SELECTION,
  ADD_COMMENT,
  LOAD_ALL_ARTICLES,
  LOAD_ARTICLE,
  LOAD_COMMENTS,
  START,
  SUCCESS,
  FAIL,
  LOAD_COMMENTS_FOR_PAGE
} from '../../constants'
import { replace } from 'connected-react-router'

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

// export const loadArticle = (id) => {
//   return {
//     type: LOAD_ARTICLE,
//     payload: { id },
//     callAPI: `/api/article/${id}`
//   }
// }

export const loadArticle = (id) => {
  return (dicpatch) => {
    dicpatch({
      payload: { id },
      type: LOAD_ARTICLE + START
    })

    fetch(`/api/article/${id}`)
      .then((res) => {
        if (res.status >= 400) {
          throw new Error(res.statusText)
        }
        return res.json()
      })
      .then((responce) => {
        dicpatch({
          payload: responce,
          type: LOAD_ARTICLE + SUCCESS
        })
      })
      .catch((error) => {
        dicpatch(replace(`./error`))
        dicpatch({
          error,
          payload: { id },
          type: LOAD_ARTICLE + FAIL
        })
      })
  }
}

export const loadComments = (articleId) => {
  return {
    type: LOAD_COMMENTS,
    payload: { articleId },
    callAPI: `/api/comment?article=${articleId}`
  }
}

export const loadCommentsPage = (page) => {
  const offset = (page - 1) * 5
  return {
    type: LOAD_COMMENTS_FOR_PAGE,
    payload: { page },
    callAPI: `/api/comment/?limit=5&offset=${offset}`
  }
}
