import {getCategoriesData} from './actions';
import {REQUESTS} from '../../../API/requests';

export const onCategories = () => async (dispatch) => {
    function callback(data) {
        dispatch(getCategoriesData(data));
    }

    function errorCallback(error) {
        console.log(error);
    }

    REQUESTS.GET_CATEGORIES(callback, errorCallback);
};
