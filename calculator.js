const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt('? ');
rl.prompt();

rl.on('line', function (line) {
  const input = line.trim();
  console.log(`repeat: ${input}`);
  rl.prompt();
}).on('SIGINT', function () {
  rl.close();
}).on('q', function () {
  process.exit(0);
}).on('exit', function () {
  console.log('Buyyy!');
  process.exit(0);
})