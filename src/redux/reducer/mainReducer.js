import { combineReducers } from 'redux';
import testReducer from './testReducer';
const mainReducer = combineReducers({
    test: testReducer,
}); 

export default mainReducer;