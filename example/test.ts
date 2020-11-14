import { BrainFuck } from "../bf.ts"
let code = `++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.`
let program = new BrainFuck(code)
console.log(program.Output())
