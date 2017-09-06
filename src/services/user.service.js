import {requestHelper} from "../helpers/request";
import {ENDPOINTS} from "../constants/endpoints";

export const getUserId = (username) => {
    return requestHelper(ENDPOINTS.USER_INFO, 'GET', {q: username})
        .then(res => res.data.length && res.data[0].id)
};