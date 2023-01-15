import { CsvReader } from "./CsvReader";
import { MatchReader, MatchResult } from "./MatchReader";

// const matches = new MatchReader('football.csv');
// matches.read();

const csvReader = new CsvReader('football.csv');
const matchReader = new MatchReader(csvReader);
matchReader.load();

let manchesterWins = 0;

matchReader.matches.forEach(row => {
    if(row[1] === 'Man United' && row[5] === MatchResult.HomeWin) {
        manchesterWins++;
    }
    
    if(row[2] === 'Man United' && row[5] === MatchResult.AwayWin) {
        manchesterWins++;
    }
});

console.log(manchesterWins);