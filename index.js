const express = require('express');
const app = express()


app.get('/', (req, res) => {
    res.send(
        {
            response: 'API fincionando en el puerto 3000'
        }
    )
})

app.get('/version', (req, res) => {

    let apiInfo = {
        name: 'api-1',
        version: '1.0',
        author: 'Fernando Romo',
        licence: 'MIT'
    }

    res.status(200).send(apiInfo)
})

app.post('/', (req, res) => {

    res.status(200).send(
        {
            ip: req.ip,
            host: req.host
        }
    )
})

app.listen('3000', () => {
    console.log('Puerto 3000')
})