import {
  ADD_COMMENT,
  START,
  SUCCESS,
  FAIL,
  LOAD_COMMENTS,
  LOAD_COMMENTS_FOR_PAGE
} from '../../constants'
import { Record, Map } from 'immutable'
import { arrToMap } from '../../utils'

const CommentRecord = Record({
  id: null,
  user: null,
  text: null
})

const ReducerRecord = Record({
  entities: arrToMap([], CommentRecord),
  error: null,
  total: null,
  pagination: new Map({})
})

export default (comments = new ReducerRecord(), action) => {
  const { type, payload, newCommentId } = action

  switch (type) {
    case ADD_COMMENT: {
      return comments.setIn(
        [`entities`, newCommentId],
        new CommentRecord({ ...payload.comment, id: newCommentId })
      )
    }
    case LOAD_COMMENTS + SUCCESS: {
      return comments
        .mergeIn([`entities`], arrToMap(action.responce, CommentRecord))
        .set(`loading`, false)
    }
    case LOAD_COMMENTS_FOR_PAGE + START: {
      return comments.setIn([`pagination`, payload.page, `loading`], true)
    }
    case LOAD_COMMENTS_FOR_PAGE + SUCCESS: {
      return comments
        .mergeIn([`entities`], arrToMap(action.responce.records, CommentRecord))
        .setIn(
          [`pagination`, payload.page, `ids`],
          action.responce.records.map((item) => item.id)
        )
        .set(`total`, action.responce.total)
        .setIn([`pagination`, payload.page, `loading`], false)
    }
    case LOAD_COMMENTS_FOR_PAGE + FAIL: {
      return comments
        .set(`error`, action.error)
        .setIn([`pagination`, payload.page, `loading`], false)
    }
    default:
      return comments
  }
}
