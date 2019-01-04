import {combineReducers} from 'redux';
import counterReducer from './counter';
import articlesReducer from './articles';
import selectedArticlesReducer from './selected-articles';
import selectOptionReducer from './select-option';

export default combineReducers({
    count: counterReducer,
    articles: articlesReducer,
    selectedOption: selectedArticlesReducer,
    selectOptions: selectOptionReducer
})
