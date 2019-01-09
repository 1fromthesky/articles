import { normalizedComments } from "../../fixtures";
import { CREATE_COMMENT } from '../../constants';

const defaultComments = normalizedComments.reduce((acc, comment) => {
   acc[comment.id] = comment;
    return acc;
}, {});

export default (commentState = defaultComments, action) => {
    if (action.type === CREATE_COMMENT) {
        const newCommentState = Object.assign({}, commentState);
        newCommentState[action.payload.comment.id] = action.payload.comment;
        console.log(newCommentState)
        return newCommentState;
    }
    return commentState;
}
