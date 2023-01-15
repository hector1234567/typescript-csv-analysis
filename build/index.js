"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const matches = new MatchReader_1.MatchReader('football.csv');
matches.read();
let manchesterWins = 0;
matches.data.forEach(row => {
    if (row[1] === 'Man United' && row[5] === MatchReader_1.MatchResult.HomeWin) {
        manchesterWins++;
    }
    if (row[2] === 'Man United' && row[5] === MatchReader_1.MatchResult.AwayWin) {
        manchesterWins++;
    }
});
console.log(manchesterWins);
