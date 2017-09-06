import {writeMediaToCsv} from "./services/csv.service";
import {getUserId} from "./services/user.service";
import {getRecentMediaStream} from "./services/media.service";
import process from "process";

const username = process.argv[2] || "dopesnow";

const init = (username) => {

    getUserId(username)
        .then(userId => getRecentMediaStream(userId, 8))
        .then(media$ => writeMediaToCsv(media$))
        .catch(err => console.error(`Something went wrong: ${err}`));
};

init(username);