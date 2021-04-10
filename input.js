// const { MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY, MESSAGES } = require('./constants');
//let connection;

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = (conn) => {
  //connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode('true');
  stdin.setEncoding('utf-8');
  stdin.resume();

  handleUserInput(stdin, conn);

  return stdin;
}

const handleUserInput = (inputConn, serverConn) => {
  //process.stdout.write('.');
  inputConn.on('data', (key) => {
    switch (key) {
      case '\u0003':
        process.exit();
        break;
      case 'w':
        serverConn.write('Move: up');
        break;
      case 'a':
        serverConn.write('Move: left');
        break;
      case 's':
        serverConn.write('Move: down');
        break;
      case 'd':
        serverConn.write('Move: right');
        break;
      case 'i':
        serverConn.write('Say: Soom Soom');
        break;
      case 'j':
        serverConn.write('Say: Boop');
        break;
      case 'k':
        serverConn.write('Say: Yum');
        break;
      case 'l':
        serverConn.write('Say: SsnacksS');
        break;
      default:
        break;
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