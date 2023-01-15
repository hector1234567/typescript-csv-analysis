import { CsvReader } from './CsvReader';
import { stringToDate } from './utils';

export class MatchReader extends CsvReader<MatchData>{

    mapData(row: string[]): MatchData {
        return [
            stringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResult,
            row[6]
        ]
    }
}
