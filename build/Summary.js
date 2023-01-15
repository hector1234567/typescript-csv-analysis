"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const ConsolePrinter_1 = require("./ConsolePrinter");
const WinsAnalyzer_1 = require("./WinsAnalyzer");
class Summary {
    static winMatchesAndPrintOnConsole(team, matchData) {
        const summary = new Summary(new WinsAnalyzer_1.WinsAnalyzer('Man United'), new ConsolePrinter_1.ConsolePrinter());
        summary.analyzeAndPrintResult(matchData);
    }
    constructor(analyzer, printer) {
        this.analyzer = analyzer;
        this.printer = printer;
    }
    analyzeAndPrintResult(matchData) {
        const result = this.analyzer.run(matchData);
        this.printer.print(result);
    }
}
exports.Summary = Summary;
