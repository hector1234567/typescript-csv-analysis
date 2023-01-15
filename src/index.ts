import { ConsolePrinter } from "./ConsolePrinter";
import { CsvReader } from "./CsvReader";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { WinsAnalyzer } from "./WinsAnalyzer";

const csvReader = new CsvReader('football.csv');
const matchReader = new MatchReader(csvReader);
matchReader.load();

const summary = new Summary(new WinsAnalyzer('Man United'), new ConsolePrinter());
summary.analyzeAndPrintResult(matchReader.matches);
