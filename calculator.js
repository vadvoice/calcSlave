const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt('? ');
rl.prompt();

rl.on('line', function (line) {
  // cleanup
  const input = line.trim();

  try {
    const basicMathOperations = new RegExp(/([-+]?[0-9]*\.?[0-9]+ ?[\/\+\-\*] ?)+([-+]?[0-9]*\.?[0-9]+)/g);
    const isInputAllowed = basicMathOperations.test(input), isSingleNumber = /^\d+$/.test(input);

    /** check expression => throw Error */
    if (!isInputAllowed && !isSingleNumber) {
      throw new Error(`Illegal operation "${input}"`);
    }
    /** Do the Math */
    const res = eval(input);

    /** show Result */
    console.log(`=> ${res}`);
  } catch (e) {
    /** show Error */
    console.log(`${e}`);
  }

  /** Prompt for new one */
  rl.prompt();
}).on('SIGINT', function () {
  rl.close();
}).on('close', function () {
  console.log('See you!');
  process.exit(0);
})