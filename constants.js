// Still need to implement:
// Player Initials, 
// WASD as constants like MOVE_UP_KEY,
// Key mappings to messages: player presses {x: y}

const IP = 'localhost';
const PORT = 50541;
const WHOAMI = 'Name: IKT';
const MOVE_UP_KEY = 'Move: up';
const MOVE_DOWN_KEY = 'Move: down';
const MOVE_LEFT_KEY = 'Move: left';
const MOVE_RIGHT_KEY = 'Move: right';
const MESSAGES = {
  g: 'Say: SSSnappy',
  h: 'Say: Deliciousss',
  j: 'Say: SS Zoom Zoom',
  h: 'Say: Ssay My Name',
  k: 'Say: INDIIKSSSS'
}


module.exports = { 
  IP,
  PORT,
  WHOAMI,
  MOVE_UP_KEY,
  MOVE_DOWN_KEY,
  MOVE_LEFT_KEY,
  MOVE_RIGHT_KEY,
  MESSAGES
}