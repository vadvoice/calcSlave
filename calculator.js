const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt('? ');
rl.prompt();

rl.on('line', function (line) {
  const input = line.trim();
  try {
    const basicMathOperations = new RegExp(/([-+]?[0-9]*\.?[0-9]+ ?[\/\+\-\*] ?)+([-+]?[0-9]*\.?[0-9]+)/g);
    const isInputAllowed = basicMathOperations.test(input);
    if (!isInputAllowed) {
      throw new Error(`Illegal operation "${input}""`);
    }
    const res = eval(input);
    console.log(`=> ${res}`);
  } catch (e) {
    console.log(`${e}`);
  }
  rl.prompt();
}).on('SIGINT', function () {
  rl.close();
}).on('close', function () {
  console.log('See you!');
  process.exit(0);
})