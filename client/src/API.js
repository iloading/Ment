import axios from 'axios';

//-----------REGISTO
//ETAPA 1 - Verificar email no Registo
export const verifyEmailExists = (email) => axios.post('/api/auth/verify-email', email);
//ETAPA 3 - Avatares
export const avatares = () => axios.get('/api/auth/avatares');


//ETAPA 4 - Pedido de lista de Escolas
export const listaEscolas = (pesquisa) => axios.post('/api/auth/search/schools', pesquisa);
//ETAPA 4 - Pedido de lista de Grupos Disciplinares
export const listaGruposDisciplinares = () => axios.post('/api/auth/courses');

//ETAPA 4 - Pedido de Registo de nova conta
export const register = (data) => axios.post('/api/auth/register', data);

//-----------REGISTO
//-----------CONTEXT

export const login = (data) => axios.post("/api/auth/login", data);
export const checkLoggedIn = () => axios.get('/api/auth/loggedIn');
export const getLoggedUser = () => axios.post('/api/auth/getLoggedUser');
export const logout = () => axios.get('/api/auth/logout');


//-----------DASHBOARD
export const dashboardInfo = () => axios.post('/api/dashboardInfo');

//-----------BANCO
export const bancoInfo = () => axios.post('/api/bancoInfo');

//-----------SESSOES DE DESTAQUE
export const destaqueInfo = () => axios.post('/api/destaqueInfo');

//-----------PERFIL DE EQUIPA
export const perfilequipaInfo = (dados) => axios.post('/api/perfilequipaInfo', dados);
export const equipaInfo = (id) => axios.post('/api/perfilequipaInfo/equipa', id);

//-----------CRIAR SESSAO
export const minhasEquipas = () => axios.post('/api/perfil/minhasEquipas');
export const carregarEscolaOwner = () => axios.post('/api/perfil/minhaEscola');
export const listaGrausEnsino = () => axios.post('/api/criarSessao/grausDeEnsino');
export const criarSessao = (dados) => axios.post('/api/criarSessao/', dados);

//-----------Sessao
export const sessaoInfo = (id) => axios.post('/api/sessao/', id);
/* export const isOwner = (id) => axios.post('/api/sessao/isOwner', id); */

//-----------Minhas Equipas
export const minhasEquipasInfo = (id) => axios.post('/api/minhasequipas/', id);

//-----------CRIAR EQUIPA
export const carregarMentores = (pesquisa) => axios.post('/api/criarEquipa/carregarMentores/', pesquisa);
export const criarEquipa = (dados) => axios.post('/api/criarEquipa/', dados);

//-----------EDITAR SESSAO
export const editarSessao = (dados) => axios.post('/api/sessao/editarSessao/', dados);
export const publicarSessao = (id) => axios.post('/api/sessao/publicarSessao/', id);

