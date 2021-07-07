const cookieParser = require('cookie-parser');
const express = require('express');
const cors = require('cors');
/* const mysql = require('mysql2') */
const db = require('./config/db');
const app = express();

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true,
}));
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

// const minhasEquipas = require('./routes/MinhasEquipas')
// app.use('/minhasequipas', minhasEquipas);


/* app.get('/', async (req, res) => {
    await res.send('We are on home')
}) */


app.listen(3001, () => {
    console.log('Server is running on port 3001');
});