import {
  ADD_COMMENT,
  START,
  SUCCESS,
  FAIL,
  LOAD_ALL_COMMENTS
} from '../../constants'
import { Record } from 'immutable'
import { arrToMap } from '../../utils'

const CommentRecord = Record({
  id: null,
  user: null,
  text: null
})

const ReducerRecord = Record({
  entities: arrToMap([], CommentRecord),
  loading: false,
  loaded: false,
  error: null
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
    case LOAD_ALL_COMMENTS + START: {
      return comments.set(`loading`, true)
    }
    case LOAD_ALL_COMMENTS + SUCCESS: {
      return comments
        .set(`entities`, arrToMap(action.responce, CommentRecord))
        .set(`loading`, false)
        .set(`loaded`, true)
    }
    case LOAD_ALL_COMMENTS + FAIL: {
      return comments.set(`error`, action.error).set(`loading`, false)
    }
    default:
      return comments
  }
}
