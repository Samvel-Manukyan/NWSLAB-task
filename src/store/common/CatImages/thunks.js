import {getCatImagesData} from './actions';
import {REQUESTS} from '../../../API/requests';

export const onCatImages = (query) => async (dispatch) => {
    function callback(data) {
        dispatch(getCatImagesData(data));
    }

    function errorCallback(error) {
        console.log(error);
    }

    REQUESTS.GET_CAT_IMAGES(query, callback, errorCallback);
};
