import {Transform} from "stream";
import json2csv from "json2csv";

export class JSONtoCSVStream extends Transform {

    constructor() {
        super({objectMode: true});
    }

    _transform(chunk, encoding, cb) {
        const csv = json2csv({data: chunk, fields: Object.keys(chunk[0])});

        console.log('Converting json to csv...');

        this.push(csv);
        cb();
    }

}