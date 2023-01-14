import { readFileSync } from 'fs';

const buffer = readFileSync('football.csv', {encoding: 'utf-8'})
.split('\n')
.map(row => {
    return row.split(',');
});

//console.log(buffer)

enum MatchResult {
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D'
}

let manchesterWins = 0;

buffer.forEach(row => {
    if(row[1] === 'Man United' && row[5] === MatchResult.HomeWin) {
        manchesterWins++;
    }
    
    if(row[2] === 'Man United' && row[5] === MatchResult.AwayWin) {
        manchesterWins++;
    }
});

console.log(manchesterWins)
