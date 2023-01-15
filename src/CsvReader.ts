import { readFileSync } from "fs";

export class CsvReader {
    data: string[][] = [];

    constructor(public file: string){}

    read(): void {
        this.data = readFileSync(this.file, {encoding: 'utf-8'})
            .split('\n')
            .map((row: string): string[] => {
                return row.split(',');
            });
    }
}
