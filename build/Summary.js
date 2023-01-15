"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
class Summary {
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
