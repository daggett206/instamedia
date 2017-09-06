import {Readable} from "stream";

export class MediaStream extends Readable {

    constructor() {
        super({objectMode: true});
    }

    _read() {}
}