const express = require('express');
const path = require('path')
const port = process.env.PORT || 1337
const app = express();
const characters = require(path.join(__dirname, 'routes/characters'))
const formulario = require(path.join(__dirname, 'routes/formulario'))
const bodyParser = require('body-parser');
const fs = require('fs');
// app.get(listar u obtener)
// app.post(crear)
// app.put(actualizar)
// app.delete(borrar)

//archivos staticos son css, js, imagenes, videos
// /characters/ralph

app.use(bodyParser.json())
// app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
// app.use(express.urlencoded())

app.use('/img', express.static(path.join(__dirname, 'img')))

app.set('view engine', 'ejs')
app.set('views', './views/')

app.get('/', (req, res) => {
    return res.send('Bienvenido a la api de los henrysimpsons')
})
app.use('/characters', characters)

app.use('/formulario', formulario)
// app.get('/:img', (req, res) => {
//     // const img  = req.params.img
//     const { img } = req.params
//     console.log(img);
//     fs.readFile('./img/' + img + '.png', (err, data) => {
//         if (err) return res.sendStatus(404);
//         return res.write(data);
//     })
// })

// body-parser.urlencoded === express.urlencoded

app.listen(port, () => {
    console.log(`Listening in ${port}`)
})