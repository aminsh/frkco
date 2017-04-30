"use strict";

const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/public');
app.use('/', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index.html');
});

app.listen(port, () => console.log(`${port} is listening ...`));