const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  
  conn.on('connect', () => {
    conn.write('Name: IKT');
    conn.write('Say: This is fun!');
    console.log('Successfully connected to game server');
  });

  conn.on('connect', () => { 
    
  
    
  })
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  
  return conn;
};

module.exports = { connect };