import {combineReducers} from 'redux';
import counterReduce from './counter';

export default combineReducers({
    count: counterReduce
})
