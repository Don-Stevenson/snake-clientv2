// const net = require('net');
const { connect } = require('./client');
console.log('Connecting ...');
connect();


handleUserInput = key => {
  if (key === '\u0003') {
    console.log("exiting the game now");
    process.exit();
  }
};

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 * 
 * 
 * 
 */
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", handleUserInput)
  return stdin;
}

setupInput();

