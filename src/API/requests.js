import request from "./request";
import requestQuery from "./requestQuery";

import {URLS} from "./url";

export const REQUESTS = {
    GET_CATEGORIES: (callback, errorCallback) => {
        request("get", `${URLS.CATEGORIES}`, {}, callback, errorCallback);
    },

    GET_CAT_IMAGES: (query, callback, errorCallback) => {
        request("get", `${URLS.CATS + requestQuery(query)}`, {}, callback, errorCallback);
    },
};
