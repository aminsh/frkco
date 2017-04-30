"use strict";

const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h1>FRK Co</h1>');
});

app.listen(port, () => console.log(`${port} is listening ...`));