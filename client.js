const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    host: '172.46.2.204',
    port: 50541
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