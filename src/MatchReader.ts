import { stringToDate } from "./utils";

export enum MatchResult {
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D'
}

export type MatchData = [Date, string, string, number, number, MatchResult, string];

export interface DataReader {
    data: string[][];
    read(): void;
}

export class MatchReader {
    matches: MatchData[] = [];

    constructor(public dataReader: DataReader){}

    load() {
        this.dataReader.read();
        this.matches = this.dataReader.data.map((row: string[]): MatchData => {
            return [
                stringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5] as MatchResult,
                row[6]
            ]
        })
    }
}
