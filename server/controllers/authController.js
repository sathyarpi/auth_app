const bcrypt = require('bcrypt');
const pool = require('../db/mysql')

exports.signup = async (req, res) => {
  const { username, password } = req.body;

  try {
    const hashed = await bcrypt.hash(password, 10);

    await pool.execute(
      'INSERT INTO users (username, password) VALUES (?, ?)',
      [username, hashed]
    );

    res.json({ success: true });
  } catch (e) {
    console.error('❌ Signup failed:', e); // <- See exact error
    res.status(500).json({ error: 'Signup failed' });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const [rows] = await pool.execute('SELECT * FROM users WHERE username = ?', [username]);

    if (rows.length === 0) {
      // User not found
      return res.status(401).json({ success: false, message: 'Invalid username or password' });
    }

    const user = rows[0];
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      // Password does not match
      return res.status(401).json({ success: false, message: 'Invalid username or password' });
    }

    // Login success
    return res.json({ success: true, username: user.username });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
