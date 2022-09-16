const express = require('express');

const app = express();

// Routes
app.get('/products', (req, res) => {
    res.send('Lista de productos');
})

app.post('/products', (req, res) => {
    res.send('creando productos');
})

app.put('/products', (req, res) => {
    res.send('actualizando producto');
})

app.delete('/products', (req, res) => {
    res.send('eliminando un producto');
})

app.patch('/products', (req, res) => {
    res.send('actualizando una parte del producto');
})
app.use((req, res) => {
    res.status(404).send('404 Page Not Found');
})

app.listen(3000)
console.log('Server running on port 3000');