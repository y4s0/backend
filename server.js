const express = require('express')

const app = express();

app.use('/', function(req, res) {
    return res.json({"success":"Ok","message":"Login successfully"})
})

app.listen('5000', function() {
    console.log("App is listining");
})