import {MediaStream} from "../streams/media.readable";
import {requestHelper} from "../helpers/request"
import {ENDPOINTS} from "../constants/endpoints";

const readable$ = new MediaStream();

const getMediaRequest = (url, count) => {
    requestHelper(url, 'GET', {count})
        .then(res => {
            if (!res.pagination) {
                return sendDataToStream(null);
            }

            sendDataToStream(res.data);
            getMediaRequest(res.pagination.next_url, --count);
        });
};

const sendDataToStream = (data) => {
    readable$.push(data);
};

export const getRecentMediaStream = (userId, count = 10) => {
    if (!userId) {
        throw Error('There is no User Id');
    }

    getMediaRequest(ENDPOINTS.getUserMediaEndpoint(userId), count);

    return readable$;
};
