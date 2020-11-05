const { connect } = require('./client');

console.log('Connecting ...');
connect();

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(cb) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  
  return stdin;
}

const handleUserInput = key => {
  process.stdout.write('.');
  if (key === '\u0003') {
    process.exit();
  }
};


setupInput(handleUserInput);

