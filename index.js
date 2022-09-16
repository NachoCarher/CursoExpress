const express = require("express");

const app = express();

// con : lo que viene después son parámetros
app.get('/hello/:username', (req, res) => {
    console.log(req.params);
    console.log(req.params.username);
    res.send(`Hello ${req.params.username.toUpperCase()}`);
});

app.get('/add/:x/:y', (req, res) => {
    const { x, y } = req.params;
    res.send(`El resultado es ${parseInt(x) + parseInt(y)}`);
});

app.listen(3000);
console.log("Server running on port 3000");
