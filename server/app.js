const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
require('./db/mongo');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/auth', require('./routes/authRoutes'));
app.use('/profile', require('./routes/profileRoutes'));

app.listen(5000, () => console.log('🚀 Backend running on port 5000'));
