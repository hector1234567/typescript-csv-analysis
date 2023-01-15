import { MatchData, MatchResult } from "./MatchData";
import { Analyzer } from "./Summary";

export class WinsAnalyzer implements Analyzer{
    constructor(private team: string){}

    run(matchData: MatchData[]): string {
        let wins = 0;

        matchData.forEach(row => {
            if(row[1] === this.team && row[5] === MatchResult.HomeWin) {
                wins++;
            }
            
            if(row[2] === this.team && row[5] === MatchResult.AwayWin) {
                wins++;
            }
        });

        return `${this.team} wins: ${wins}`
    }
}
