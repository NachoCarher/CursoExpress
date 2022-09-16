const express = require("express");

const app = express();

// express primero procesa las peticiones, por eso se ponen antes estos metodos
// procesa como texto el body de la petición que envía el cliente
app.use(express.text());

// procesa como json el body de la petición que envía el cliente
app.use(express.json());

// procesa como formulario el body de la petición que envía el cliente
app.use(express.urlencoded({ extended: false }));

// cliente envia datos al servidor
app.post('/user', (req, res) => {
    console.log(req.body);
    res.send('Nuevo usuario creado')

})

app.listen(3000);
console.log("Server running on port 3000");
