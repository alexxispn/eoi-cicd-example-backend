const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send(`Estoy ahora mismo en la rama MAIN y tengo esta variable de entorno EOI ${process.env.EOI}`);
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});