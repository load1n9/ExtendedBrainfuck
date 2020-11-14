# denoExtendedBrainfuck

I was very bored


# reference

| Command        | Description  |
| ---------------| ------------:|
| >              | Move the pointer to the right|
| <              | Move the pointer to the left|
| +              | Increment the memory cell at the pointer|
| -              | Decrement the memory cell at the pointer|
| .              | Output the character signified by the cell at the pointer|
| ,              | Input a character and store it in the cell at the pointer|
| [              | Jump past the matching ] if the cell at the pointer is 0|
| ]              | Jump back to the matching [ if the cell at the pointer is nonzero|
| #              | Sets a temporary variable to the cell at the pointer|
| @              | Sets the cell at the pointer to the value of the temporary variable|
| ^              | Squares the the cell at the pointer|


# example

```js
import { BrainFuck } from "https://deno.land/x/extendedbrainfuck/bf.ts"
let code = `++++++++++[>+++++++>+++++++++
            +>+++>+<<<<-]>++.>+.+++++++..+
            ++.>++.<<+++++++++++++++.>.+++.
            ------.--------.>+.>.`
let program = new BrainFuck(code)
console.log(program.Output())


```

