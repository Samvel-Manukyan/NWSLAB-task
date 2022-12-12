import { handleActions } from 'redux-actions';
import { initialState } from '../../initialState';
import {CATEGORIES} from './actionTypes';

const initial = initialState.categories;

const reducer = handleActions(
    {
        [CATEGORIES]: (state, { payload }) => {
            return {
                ...state,
                data: payload,
            };
        },
    },

    initial
);

export default reducer;
