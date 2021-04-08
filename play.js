// const { connect } = require('./client');
// const { setupInput } = require('./input');

// console.log('Connecting ...');

// setupInput(connect());

const net = require('net');

const connect = () => {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
    // host: "135.23.222.131",
    // port: 50542
  })

  conn.setEncoding('utf-8');

  conn.on('data', (data) => {
    console.log(data);
  })

  return conn;
};

console.log('Connecting...')
connect();