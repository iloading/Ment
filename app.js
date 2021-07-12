const cookieParser = require('cookie-parser');
const express = require('express');
const cors = require('cors');
/* const mysql = require('mysql2') */
const db = require('./config/db');
const app = express();

app.use(express.json());
/* app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true,
})); */
app.use(cookieParser());


// Routes
const usersRoute = require('./routes/Users')
app.use('/api/auth', usersRoute);

const dashboardRoute = require('./routes/Dashboard')
app.use('/api/dashboardInfo', dashboardRoute);

const bancoRoute = require('./routes/Banco')
app.use('/api/bancoInfo', bancoRoute);

const destaqueRoute = require('./routes/Destaque')
app.use('/api/destaqueInfo', destaqueRoute);

const perfilequipaRoute = require('./routes/PerfilEquipa')
app.use('/api/perfilequipaInfo', perfilequipaRoute);

const criarSessao = require('./routes/CriarSessao')
app.use('/api/criarSessao', criarSessao);

const perfil = require('./routes/Perfil')
app.use('/api/perfil', perfil);

const sessao = require('./routes/Sessao')
app.use('/api/sessao', sessao);

const minhasEquipas = require('./routes/MinhasEquipas')
app.use('/api/minhasequipas', minhasEquipas);

const criarEquipas = require('./routes/CriarEquipa')
app.use('/api/criarEquipa', criarEquipas);


/* app.get('/', async (req, res) => {
    await res.send('We are on home')
}) */

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
    // Handle React routing, return all requests to React app
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));


/* app.listen(3001, () => {
    console.log('Server is running on port 3001');
}); */