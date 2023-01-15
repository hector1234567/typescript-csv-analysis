import { ConsolePrinter } from "./ConsolePrinter";
import { MatchData, MatchResult } from "./MatchData";
import { WinsAnalyzer } from "./WinsAnalyzer";

export interface Analyzer {
    run(matchData: MatchData[]): string;
}

export interface Printer {
    print(result: string): void;
}

export class Summary {
    constructor(private analyzer: Analyzer, private printer: Printer){}

    analyzeAndPrintResult(matchData: MatchData[]): void {
        const result = this.analyzer.run(matchData);
        this.printer.print(result);
    }
}