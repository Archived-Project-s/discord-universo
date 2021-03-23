//------------EXPRESS----------------
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 5000; //porta padrão

app.use(cors());
//configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//definindo as rotas
const router = express.Router();
app.use('/', router);
app.use(express.static(__dirname));
app.use(express.static("amigos"));

//inicia o servidor
app.listen(port);
console.log('API funcionando!');

//-----------------------------------

router.get('/', (req, res) =>{
    res.send
    res.sendFile("./", { root: 'amigos' });
});

router.get('/friends', (req, res) =>{
    res.sendFile("./friends/", { root: 'amigos' });
});