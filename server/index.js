const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const DIST = path.join(__dirname, '../dist');
const HTMLFILE = path.join(DIST, 'index.html');

app.get('/test', (req, res) => {
    res.send('test pass');
});

app.get('/', (req,res) => {
    res.status(200).sendFile(HTMLFILE);
});

app.listen(port, () => {
    console.log('App listening on port', port);
});