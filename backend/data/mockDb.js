const users = [
  { id: 1, name: 'User A', liked: [3], matches: [], messages: [] },
  { id: 2, name: 'User B', liked: [], matches: [], messages: [] },
  { id: 3, name: 'User C', liked: [], matches: [], messages: [] },
  { id: 4, name: 'User D', liked: [1], matches: [], messages: [] } // User D already liked User A
];

module.exports = { users };
