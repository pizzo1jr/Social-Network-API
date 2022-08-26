const express = require('express');
const mongoose = require('mongoose');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-media-API', {
    useNewUrlParser: true,

    useUnifiedTopology: true
});

mongoose.set('debug', true);

app.use(require('./routes/index'));

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));