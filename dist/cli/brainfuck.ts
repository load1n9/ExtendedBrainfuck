import { BrainFuck } from "../bf.ts"
import { ask } from "./input.ts"
if (Deno.args[0] === "-f") {

    console.log(new BrainFuck(Deno.readTextFileSync(Deno.args[1])).Output())

} else {
    let running = true
    console.log(`
    brainfuck repl
    ________________
    exit using ctrl+c or close
    `)
    while (running) {
        let input =  await ask(">>")
        if (input !== "close") {
            console.log(new BrainFuck(input).Output())
        } else {
            running = false
        }
    }
}