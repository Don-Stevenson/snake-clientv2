const net = require('net');
const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    IP,PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  // on connect, sends the message and writes to the server that I am DBS
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: DBS');
    conn.write("Move: up");
    conn.write("Move: down");
    conn.write("Move: left");
    conn.write("Move: right");
  });

  conn.on('data', (data) => {
    console.log(data);
 
  });

  return conn;
}

module.exports = { connect };