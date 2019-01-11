import { normalizedComments as defaultComments} from "../../fixtures";
import { ADD_COMMENT } from '../../constants';
import {arrToMap} from '../../utils';

export default (comments = arrToMap(defaultComments), action) => {
    const { type, payload, newCommentId } = action;

    if (type === ADD_COMMENT) {
        return comments.set(newCommentId, {...payload, id: newCommentId})
        // return {
        //     ...comments,
        //     [newCommentId]: {
        //       ...payload.comment,
        //       id: newCommentId
        //     }
        // }
    }
    return comments;
}
