const { users } = require('../data/mockDb');

exports.likeUser = (req, res) => {
  const user = req.user;
  const targetId = parseInt(req.params.targetId);
  const target = users.find(u => u.id === targetId);

  if (!target) return res.status(404).json({ error: 'Target user not found' });

  if (!user.liked.includes(targetId)) {
    user.liked.push(targetId);
  }

  if (target.liked.includes(user.id) && !user.matches.includes(targetId)) {
    user.matches.push(targetId);
    target.matches.push(user.id);
    return res.json({ match: true });
  }

  res.json({ match: false });
};

exports.getMatches = (req, res) => {
  const user = req.user;
  const matchedUsers = user.matches.map(id => users.find(u => u.id === id));
  res.json(matchedUsers);
};
