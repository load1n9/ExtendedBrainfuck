import { BrainFuck } from "../dist/bf.ts"
let code = `++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.`
let program = new BrainFuck(code)
console.log(program.Output())
