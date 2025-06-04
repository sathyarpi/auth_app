const express = require('express');
const router = express.Router();
const profile = require('../controllers/profileController');

router.get('/:username', profile.getProfile);
router.post('/update', profile.updateProfile);

module.exports = router;
