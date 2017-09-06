import request from "request-promise";
import {TOKEN} from "../constants/token";

export const requestHelper = (url, method = 'GET', props) => {
    const qs = Object.assign({}, {access_token: TOKEN}, props);

    return request({url, method, qs, json: true})
};