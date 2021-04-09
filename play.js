const { connect } = require('./client');
// const { setupInput } = require('./input');

// console.log('Connecting ...');

// setupInput(connect());
const handleUserInput = (inputConn) => {
  inputConn.on('data', (key) => {
    if(key === '\u0003') {
      process.exit();
    }
  })
}

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode('true');
  stdin.setEncoding('utf-8');
  stdin.resume();

  handleUserInput(stdin);

  return stdin;
}

console.log('Connecting...')
connect();
setupInput();