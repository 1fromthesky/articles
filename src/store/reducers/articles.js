import {
  DELETE_ARTICLE,
  ADD_COMMENT,
  LOAD_ALL_ARTICLES,
  START,
  SUCCESS,
  FAIL
} from '../../constants'
import { normalizedArticles as defaultArticles } from '../../fixtures'
import { Record } from 'immutable'
import { arrToMap } from '../../utils'

const ArticleRecord = Record({
  id: null,
  title: null,
  text: null,
  date: null,
  comments: []
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
    case LOAD_ALL_ARTICLES + START: {
      return articles.set(`loading`, true)
    }
    case LOAD_ALL_ARTICLES + SUCCESS: {
      return articles
        .set(`entities`, arrToMap(action.responce, ArticleRecord))
        .set(`loadig`, false)
        .set(`loaded`, true)
    }
    case LOAD_ALL_ARTICLES + FAIL: {
      return articles.set(`error`, action.error).set(`loading`, false)
    }
    default:
      return articles
  }
}
