import { MatchReader, MatchResult } from "./MatchReader";

const matches = new MatchReader('football.csv');
matches.read();

let manchesterWins = 0;

matches.data.forEach(row => {
    if(row[1] === 'Man United' && row[5] === MatchResult.HomeWin) {
        manchesterWins++;
    }
    
    if(row[2] === 'Man United' && row[5] === MatchResult.AwayWin) {
        manchesterWins++;
    }
});

console.log(manchesterWins);