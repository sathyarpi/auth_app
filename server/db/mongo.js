const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/user_profiles', { useNewUrlParser: true })
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB error:', err));

module.exports = mongoose