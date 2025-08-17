const { users } = require('../data/mockDb');

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('User connected');

    socket.on('join', (userId) => {
      socket.join(userId);
      console.log(`User ${userId} joined their room`);
    });

    socket.on('message', ({ senderId, receiverId, text }) => {
      const sender = users.find(u => u.id === senderId);
      if (sender) {
        sender.messages.push({ to: receiverId, text });
      }
      io.to(receiverId).emit('message', { from: senderId, text });
    });

    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });
};
