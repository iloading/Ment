const cookieParser = require('cookie-parser');
const express = require('express');
const cors = require('cors');

const { Prohairesis } = require('prohairesis')
const env = require('./env');

const db = new Prohairesis(env.CLEARDB_DATABASE_URL)
const app = express();

app.use(express.json());

app.use(
    cors({
        'origin': 'https://ment-9ad64.web.app',
        'credentials': true
    })
);

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
