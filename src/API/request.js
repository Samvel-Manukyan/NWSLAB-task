import axios from "axios";

const request = (method, url, body, callback, errorCallback) => {
    let myAxios = axios.create();

    myAxios[method](url, method === "delete" ? { data: body } : body)
        .then((response) => {
            callback(response.data);
        })
        .catch((error) => {
            errorCallback(error);
        });
};

export default request;
