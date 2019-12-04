// Stores the active TCP connection object.
let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", key => handleUserInput(key))
  return stdin;
}



handleUserInput = key => {
  if (key === '\u0003') {
    console.log("exiting the game now");
    process.exit();
  } else if (key === "w") {
    connection.write("Move: up");
  } else if (key === "s") {
    connection.write("Move: down");
  } else if (key === "d") {
    connection.write("Move: right");
  } else if (key === "a") {
    connection.write("Move: left");
  } else if (key === "g") {
    connection.write("Say: OMG!!");
  } else if (key === "l") {
    connection.write("Say: LOL!!");
  }
};

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 * 
 * 
 * 
 */

module.exports = { setupInput };