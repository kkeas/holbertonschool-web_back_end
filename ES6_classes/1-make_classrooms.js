
const ClassRoom = require('./0-classroom.js');

function initializeRooms() {
  const rooms = [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34)
  ];

  return rooms;
}
