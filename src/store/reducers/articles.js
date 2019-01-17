import {
  DELETE_ARTICLE,
  ADD_COMMENT,
  LOAD_ALL_ARTICLES,
  LOAD_ARTICLE,
  LOAD_COMMENTS,
  START,
  SUCCESS,
  FAIL
} from '../../constants'
import { Record } from 'immutable'
import { arrToMap } from '../../utils'

const ArticleRecord = Record({
  id: null,
  title: null,
  text: null,
  date: null,
  comments: [],
  loading: false,
  commentsLoading: null,
  commentsLoaded: null
})

const ReducerRecord = Record({
  entities: arrToMap([], ArticleRecord),
  loading: false,
  loaded: false,
  error: null
})

export default (articles = new ReducerRecord(), action) => {
  const { type, payload, newCommentId } = action

  switch (type) {
    case DELETE_ARTICLE: {
      return articles.deleteIn([`entities`, payload.id])
    }
    case ADD_COMMENT: {
      return articles.updateIn(
        [`entities`, payload.articleId, `comments`],
        (comments) => comments.concat(newCommentId)
      )
    }
    // All articles
    case LOAD_ALL_ARTICLES + START: {
      return articles.set(`loading`, true)
    }
    case LOAD_ALL_ARTICLES + SUCCESS: {
      return articles
        .set(`entities`, arrToMap(action.responce, ArticleRecord))
        .set(`loading`, false)
        .set(`loaded`, true)
    }
    case LOAD_ALL_ARTICLES + FAIL: {
      return articles.set(`error`, action.error).set(`loading`, false)
    }
    // Article
    case LOAD_ARTICLE + START: {
      return articles.setIn([`entities`, payload.id, `loading`], true)
    }
    case LOAD_ARTICLE + SUCCESS: {
      return articles
        .setIn([`entities`, payload.id], new ArticleRecord(action.payload))
        .setIn([`entities`, payload.id, `loading`], false)
    }
    case LOAD_ARTICLE + FAIL: {
      return articles.set(`error`, action.error).set(`loading`, false)
    }
    case LOAD_COMMENTS + START: {
      return articles.setIn(
        [`entities`, payload.articleId, `commentLoading`],
        true
      )
    }
    case LOAD_COMMENTS + SUCCESS: {
      return articles
        .setIn([`entities`, payload.articleId, `commentsLoaded`], true)
        .setIn([`entities`, payload.articleId, `commentsLoading`], false)
    }
    default:
      return articles
  }
}
