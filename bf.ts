export class BrainFuck {

    private position: number;
    private pointer: number;
    public tape: any;
    public output: any;
    public code: any;
    private inputTape: any;
    private inputPos: number;

    public constructor(code: string, tape?: number, input?: any) {

        this.pointer = 0;
        this.position = 0;
        this.output = []
        this.tape = new Array(tape ? tape : 27).fill("0")
        this.code = code.split('')
        this.inputTape = input ? input : undefined;
        this.inputPos = 0;

        while (this.position <= this.code.length - 1) {
            this.parse(this.code[this.position])

        }

    }

    private parse(token: string) {

        switch (token) {
            case ">":
                this.pointerRight()
                break;
            case "<":
                this.pointerLeft()
                break;
            case ".":
                this.printValue()
                break;
            case ",":
                this.inputValue()
                break;
            case "+":
                this.increment()
                break;
            case "-":
                this.decrement()
                break;
            case "[":
                this.jumpRight()
                break;
            case "]":
                this.jumpLeft()
                break;
            default:
                this.Unknown()
                break;
        }
    }
    private pointerRight() {

        if (this.pointer === this.tape.length - 1) {
            this.position = 100
        } else {
            this.pointer++
            this.position++
        }
    }
    private pointerLeft() {

        if (this.pointer === 0) {
            this.position = 100
        } else {
            this.pointer--;
            this.position++
        }

    }
    private printValue() {
        this.output.push(String.fromCharCode(Number(this.tape[this.pointer])))
        this.position++
    }
    private inputValue() {
        if (this.inputTape !== undefined) {
            this.tape[this.pointer] = this.inputTape[this.inputPos].charCodeAt(0)
            this.inputPos++
        }
        this.position++
    }
    private increment() {
        if (this.tape[this.pointer] === "127") {
            this.tape[this.pointer] = "0"
        } else {
            let test = parseInt(this.tape[this.pointer]) + 1
            this.tape[this.pointer] = test.toString()
        }
        this.position++
    }
    private decrement() {
        if (this.tape[this.pointer] === "0") {
            this.tape[this.pointer] = "127"
        } else {
            let test = parseInt(this.tape[this.pointer]) - 1
            this.tape[this.pointer] = test.toString()
        }
        this.position++
    }
    private jumpRight() {
        if (this.tape[this.pointer] === "0") {
            while (this.code[this.position] !== "]") {
                this.position++
            }
        } else {
            this.position++
        }
    }
    private jumpLeft() {
        if (this.tape[this.pointer] === "0") {
            this.position++
        } else {
            while (this.code[this.position] !== "[") {
                this.position--
            }
        }
    }
    private Unknown() {
        this.position++
    }
    public Output() {
        return this.output.join('')
    }

}
