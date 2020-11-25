const express = require('express');
const router = express.Router();
let personas = [];
let id = 1;
router.get('/', (req, res) => {
    res.render('index')
})

router.get('/ver', (req, res) => {
    // res.json(personas);
    res.render('lista', {
        personas
    });
})

router.post('/add', (req, res) => {
    const { name, lastname } = req.body
    personas.push({ id, name, lastname })
    id++

    res.redirect('/formulario');
})

router.delete('/persona/:id', (req, res) => {
    const { id } = req.params
    personas = personas.filter(el => el.id !== parseInt(id))

    return res.redirect('/formulario/ver');
})
module.exports = router