const express = require('express');
const router = express.Router();
const axios = require('axios');
const fetch = require('node-fetch');
const characters = require('../utils/characters.json');

// /characters
router.get('/', (req, res) => {
    const { consulta } = req.query
    console.log(req.query);
    // const consulta = req.query.consulta
    if (consulta) {
        return res.json(characters.filter(personaje => personaje.lastName.toLowerCase() === consulta.toLowerCase()));
    }
    return res.json(characters);
})

router.get('/quotes', (req, res) => {
    const error = { error: 'Hubo un problema al comunicarse con la api' }
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
        .then(quote => {
            return res.json(quote.data)
        })
        .catch(err => {
            return res.status(500).send(error)
            // return res.sendStatus(500);
            // return res.status(500).send('Server Error');
        })
    // const promesa2 = axios.get('http://hp-api.herokuapp.com/api/characters')
    //     .then(quote => {
    //         return res.json(quote.data)
    //     })
    //     .catch(err => {
    //         return res.status(500).send(error)
    //         // return res.sendStatus(500);
    //         // return res.status(500).send('Server Error');
    //     })
    // Promise.all([promesa1, promesa2])
    //     .then(promesas => {
    //     })
    // console.log(http.get)

    // fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    //     .then(data => data.json())
    //     .then(quote => {
    //         return res.json(quote)
    //     })
    //     .catch(err => {
    //         return res.status(500).send(error)
    //         // return res.sendStatus(500);
    //         // return res.status(500).send('Server Error');
    //     })
})

module.exports = router;