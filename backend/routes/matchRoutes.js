const express = require('express');
const { likeUser, getMatches } = require('../controllers/matchController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/like/:targetId', protect, likeUser);
router.get('/matches', protect, getMatches);

module.exports = router;
