import { Printer } from "./Summary";

export class ConsolePrinter implements Printer {
    print(result: string): void {
        console.log(result);
    }
}