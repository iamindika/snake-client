// const { MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY, MESSAGES } = require('./constants');
// let connection;

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode('true');
  stdin.setEncoding('utf-8');
  stdin.resume();

  handleUserInput(stdin);

  return stdin;
}

const handleUserInput = inputConn => {
  //process.stdout.write('.');
  inputConn.on('data', (key) => {
    if(key === '\u0003') {
      process.exit();
    }
  })

  // if (key === 'w') {
  //   connection.write(MOVE_UP_KEY);
  // }

  // if (key === 's') {
  //   connection.write(MOVE_DOWN_KEY);
  // }
  
  // if (key === 'a') {
  //   connection.write(MOVE_LEFT_KEY);
  // }
  
  // if (key === 'd') {
  //   connection.write(MOVE_RIGHT_KEY);
  // }

  // if (MESSAGES[key]) {
  //   connection.write(MESSAGES[key]);
  // }
};

module.exports = { setupInput };