import {
    INCREMENT,
    DELETE_ARTICLE,
    CHANGE_DATE_RANGE,
    CHANGE_SELECTION
} from '../../constants/index'

export function incrementAC() {
    return { type: INCREMENT }
}

export function deleteArticleAC(articleId) {
    return {
        type: DELETE_ARTICLE,
        payload: { id: articleId }
    }
}

export function changeDateRangeAC(dateRange) {
    return {
        type: CHANGE_DATE_RANGE,
        payload: { dateRange }
    }
}

export function changeSelectionAC(selected) {
    return {
        type: CHANGE_SELECTION,
        payload: { selected }
    }
}
