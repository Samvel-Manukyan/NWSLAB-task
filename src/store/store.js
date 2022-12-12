import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import {initialState} from './initialState';
import categories from './common/Categories/reducers';
import catImages from './common/CatImages/reducers';


const RootReducer = combineReducers({
    categories,
    catImages
});

let composed = compose(applyMiddleware(thunk));

export default createStore(RootReducer, initialState, composed);
