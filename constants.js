// Still need to implement:
// Player Initials, 
// WASD as constants like MOVE_UP_KEY,
// Key mappings to messages: player presses {x: y}

const IP = 'localhost';
const PORT = 50541;
const MOVE_UP_KEY = 'Move: up';
const MOVE_DOWN_KEY = 'Move: down';
const MOVE_LEFT_KEY = 'Move: left';
const MOVE_RIGHT_KEY = 'Move: right';
const MESSAGES = {
  i: 'Say: Soom Soom',
  j: 'Say: Boop',
  k: 'Say: Yum',
  l: 'Say: SsnacksS'
}


module.exports = { 
  IP,
  PORT,
  MOVE_UP_KEY,
  MOVE_DOWN_KEY,
  MOVE_LEFT_KEY,
  MOVE_RIGHT_KEY,
  MESSAGES
}