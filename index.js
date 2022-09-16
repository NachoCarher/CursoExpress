const express = require('express');

const app = express();

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/about', (req, res) => {
    res.send('About Page');
})

app.get('/weather', (req, res) => {
    res.send('The current weather is nice');
})

app.use((req, res) => {
    res.status(404).send('404 Page Not Found');
})

app.listen(3000)
console.log('Server running on port 3000');