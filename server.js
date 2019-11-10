const express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    app = express()

app.use(express.static(__dirname + '/knell/dist/knell'));

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./knell/dist/knell/index.html"))
});

app.listen(8000, () => console.log('listening on port 8000'));