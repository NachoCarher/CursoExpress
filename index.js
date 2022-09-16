const express = require("express");

const app = express();

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// envia un archivo al cliente
app.get("/miarchivo", (req, res) => {
  res.sendFile("./color_4.png", { root: __dirname });
});

// envia información de un usuario
app.get("/user", (req, res) => {
  res.json({
    name: "John",
    lastname: "Fernandez",
    age: 25,
    points: [1, 2, 3, 4, 5],
    address: {
      street: "Calle 1",
      city: "Bogota",
    },
  });
});

app.listen(3000);
console.log("Server running on port 3000");
