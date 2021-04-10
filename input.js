const { MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY, MESSAGES } = require('./constants');

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = (conn) => {
  const stdin = process.stdin;
  stdin.setRawMode('true');
  stdin.setEncoding('utf-8');
  stdin.resume();

  handleUserInput(stdin, conn);

  return stdin;
}

const moveSnake = (conn, move) => {
  return setInterval(() => {
    conn.write(move);
  }, 300)
};

const handleUserInput = (inputConn, serverConn) => {
  let intervalId = moveSnake(serverConn, MOVE_UP_KEY);

  inputConn.on('data', (key) => {
    switch (key) {
      case '\u0003':
        process.exit();
        break;
      case 'w':
        clearInterval(intervalId);
        intervalId = moveSnake(serverConn, MOVE_UP_KEY);
        break;
      case 'a':
        clearInterval(intervalId);
        intervalId = moveSnake(serverConn, MOVE_LEFT_KEY);
        break;
      case 's':
        clearInterval(intervalId);
        intervalId = moveSnake(serverConn, MOVE_DOWN_KEY);
        break;
      case 'd':
        clearInterval(intervalId);
        intervalId = moveSnake(serverConn, MOVE_RIGHT_KEY);
        break;
      case 'i':
        serverConn.write(MESSAGES['i']);
        break;
      case 'j':
        serverConn.write(MESSAGES['j']);
        break;
      case 'k':
        serverConn.write(MESSAGES['k']);
        break;
      case 'l':
        serverConn.write(MESSAGES['l']);
        break;
      default:
        break;
    }
  })
};

module.exports = { setupInput };