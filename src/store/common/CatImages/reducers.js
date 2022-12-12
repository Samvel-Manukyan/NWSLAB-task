import { handleActions } from 'redux-actions';

import { initialState } from '../../initialState';
import {CATIMAGES} from './actionTypes';

const initial = initialState.catImages;

const reducer = handleActions(
    {
        [CATIMAGES]: (state, { payload }) => {
            return {
                ...state,
                data: payload,
            }
        },
    },

    initial
);

export default reducer;
