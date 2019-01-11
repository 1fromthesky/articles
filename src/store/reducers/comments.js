import { normalizedComments } from "../../fixtures";
import { ADD_COMMENT } from '../../constants';

const defaultComments = normalizedComments.reduce((acc, comment) => {
   acc[comment.id] = comment;
    return acc;
}, {});

export default (commentState = defaultComments, action) => {
    const { type, payload, newCommentId } = action;

    if (type === ADD_COMMENT) {
        return {
            ...commentState,
            [newCommentId]: {
              ...payload.comment,
              id: newCommentId
            }
        }
    }
    return commentState;
}
