"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalyzer = void 0;
const MatchData_1 = require("./MatchData");
class WinsAnalyzer {
    constructor(team) {
        this.team = team;
    }
    run(matchData) {
        let wins = 0;
        matchData.forEach(row => {
            if (row[1] === this.team && row[5] === MatchData_1.MatchResult.HomeWin) {
                wins++;
            }
            if (row[2] === this.team && row[5] === MatchData_1.MatchResult.AwayWin) {
                wins++;
            }
        });
        return `${this.team} wins: ${wins}`;
    }
}
exports.WinsAnalyzer = WinsAnalyzer;
