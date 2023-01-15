import { readFileSync } from 'fs';

export abstract class CsvReader<T> {
    data: T[] = [];

    abstract mapData(row: string[]): T;

    constructor(public file: string){}

    read() {
        this.data = readFileSync(this.file, {encoding: 'utf-8'})
        .split('\n')
        .map((row: string): string[] => {
            return row.split(',');
        })
        .map(this.mapData);
    }
}
