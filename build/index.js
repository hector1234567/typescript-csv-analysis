"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvReader_1 = require("./CsvReader");
const MatchReader_1 = require("./MatchReader");
// const matches = new MatchReader('football.csv');
// matches.read();
const csvReader = new CsvReader_1.CsvReader('football.csv');
const matchReader = new MatchReader_1.MatchReader(csvReader);
matchReader.load();
let manchesterWins = 0;
matchReader.matches.forEach(row => {
    if (row[1] === 'Man United' && row[5] === MatchReader_1.MatchResult.HomeWin) {
        manchesterWins++;
    }
    if (row[2] === 'Man United' && row[5] === MatchReader_1.MatchResult.AwayWin) {
        manchesterWins++;
    }
});
console.log(manchesterWins);
