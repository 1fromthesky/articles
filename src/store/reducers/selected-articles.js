import {SELECT_ARTICLES} from '../../constants';

export default (selectedOption = null, action) => {
    switch (action.type) {
        case SELECT_ARTICLES:
            return action.payload;
        default:
            return null;
    }
}