const mongoose = require('mongoose');
const {MONGO_URL} = require('./config');

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(err => console.log('DATABASE CONNECT ERROR: ' + err));