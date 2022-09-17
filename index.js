const express = require("express");

const app = express();

// logger middleware
app.use((req, res, next) => {
    console.log(`Route: ${req.url} Metodo: ${req.method}`);
    next();
});

// profile route
app.get("/profile", (req, res) => {
    res.send("Profile");
});

// isAuth middleware
app.use((req, res, next) => {
    if (req.query.login === "nacho@correo.com") {
        next();
    } else {
        res.send("No tienes permisos para acceder a esta ruta");
    }
});

app.get("/dashboard", (req, res) => {
    res.send("Dashboard page");
});

app.listen(3000);
console.log("Server running on port 3000");
