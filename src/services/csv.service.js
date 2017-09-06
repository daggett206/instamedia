import {JSONtoCSVStream} from "../streams/jsontocsv.transform";
import {createWriteStream} from "fs";
import {join} from "path";

const jsontocsv$ = new JSONtoCSVStream();

export const writeMediaToCsv = (media$) => media$
                     .pipe(jsontocsv$)
                     .pipe(createWriteStream(join('./dist/media.csv')));