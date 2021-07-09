const cookieParser = require('cookie-parser');
const express = require('express');
const cors = require('cors');
/* const mysql = require('mysql2') */
const db = require('./config/db');
const app = express();

app.use(express.json());

app.use(function (req, res) {
    console.log(req.headers.origin);
    /*  cors({
         origin: [`${req.headers.origin}`],
         credentials: true,
     }) */
});
// Add headers
/* app.use(function (req, res) {


    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', `${req.headers.origin}`);

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware

}); */
app.use(cookieParser());


// Routes
const usersRoute = require('./routes/Users')
app.use('/auth', usersRoute);

const dashboardRoute = require('./routes/Dashboard')
app.use('/dashboardInfo', dashboardRoute);

const bancoRoute = require('./routes/Banco')
app.use('/bancoInfo', bancoRoute);

const destaqueRoute = require('./routes/Destaque')
app.use('/destaqueInfo', destaqueRoute);

const perfilequipaRoute = require('./routes/PerfilEquipa')
app.use('/perfilequipaInfo', perfilequipaRoute);

const criarSessao = require('./routes/CriarSessao')
app.use('/criarSessao', criarSessao);

const perfil = require('./routes/Perfil')
app.use('/perfil', perfil);

const sessao = require('./routes/Sessao')
app.use('/sessao', sessao);

const minhasEquipas = require('./routes/MinhasEquipas')
app.use('/minhasequipas', minhasEquipas);

const criarEquipas = require('./routes/CriarEquipa')
app.use('/criarEquipa', criarEquipas);


app.get('/', async (req, res) => {
    await res.send('We are on home')
})

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3001;
}
app.listen(port);
