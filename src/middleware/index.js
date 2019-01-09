import {CREATE_COMMENT} from '../constants';

export const logger = store => next => action => {
    console.log(`begin`, store.getState());
    console.log(`dispatch action`, action);
    next(action);
    console.log(`after`, store.getState());
}

export const createComment = store => next => action => {
    if (action.type === CREATE_COMMENT) {
        action.payload.comment.id = Math.random().toString(36).substr(2, 9);
    }
}