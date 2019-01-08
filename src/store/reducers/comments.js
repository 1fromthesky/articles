import {normalizedComments} from "../../fixtures";

const defaultComments = normalizedComments.reduce((acc, comment) => {
   acc[comment.id] = comment;
    return acc;
}, {});

export default (commentState = defaultComments, action) => {
    return commentState;
}
