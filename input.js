const { MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY, MESSAGES } = require('./constants');
let connection;

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  
  return stdin;
}

const handleUserInput = key => {
  //process.stdout.write('.');
  if (key === '\u0003') {
    process.exit();
  }

  if (key === 'w') {
    connection.write(MOVE_UP_KEY);
  }

  if (key === 's') {
    connection.write(MOVE_DOWN_KEY);
  }
  
  if (key === 'a') {
    connection.write(MOVE_LEFT_KEY);
  }
  
  if (key === 'd') {
    connection.write(MOVE_RIGHT_KEY);
  }

  if (MESSAGES[key]) {
    connection.write(MESSAGES[key]);
  }
};

module.exports = { setupInput };