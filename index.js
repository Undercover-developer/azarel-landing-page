const express = require('express');
var bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const os = require("os");

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
const PORT = process.env.port || 80;
const router = express.Router();

const endpoints = {
    home: path.join(__dirname + '/index.html'),
}

app.use(express.static(path.join(__dirname)));
app.use('/', router);
router.get('/', function(req, res) {
    res.sendFile(endpoints.home);
})


app.listen(PORT, (err) => {
    if (err) throw new Error(err);
    console.log(`App is listening on port ${PORT}`)
})