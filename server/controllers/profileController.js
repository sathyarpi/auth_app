const Profile = require('../models/Profile');

exports.getProfile = async (req, res) => {
  const { username } = req.params;
  const profile = await Profile.findOne({ username });
  res.json(profile);
};

exports.updateProfile = async (req, res) => {
  const { username, age, dob, contact } = req.body;
  const updated = await Profile.findOneAndUpdate(
    { username },
    { age, dob, contact },
    { upsert: true, new: true }
  );
  res.json(updated);
};
