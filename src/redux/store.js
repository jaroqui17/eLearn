import { createStore } from 'redux';
import mainReducer from './reducer/mainReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(mainReducer);
export default store;