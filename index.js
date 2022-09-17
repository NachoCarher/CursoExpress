const express = require("express");

const app = express();

// cualquier ruta que vaya a mi aplicación pasa antes por este middleware (función)
app.use((req, res, next) => {
    console.log(`Route: ${req.url} Metodo: ${req.method}`);

    //si no llamo a next, la petición se queda aquí
    next();
});

app.get("/profile", (req, res) => {
    res.send("profile page");
});

app.listen(3000);
console.log("Server running on port 3000");
