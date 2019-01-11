export const logger = store => next => action => {
    console.log(`begin`, store.getState());
    console.log(`dispatch action`, action);
    next(action);
    console.log(`after`, store.getState());
}

export const createComment = store => next => action => {
    if (!action.generateId) return next(action)
    next({
      ...action,
      newCommentId: (Date.now() + Math.random()).toString()
    })
}