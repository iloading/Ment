import axios from 'axios';

//-----------REGISTO
//ETAPA 1 - Verificar email no Registo
export const verifyEmailExists = (email) => axios.post('https://ment-ua.herokuapp.com/auth/verify-email', email);
//ETAPA 3 - Avatares
export const avatares = () => axios.get('https://ment-ua.herokuapp.com/auth/avatares');


//ETAPA 4 - Pedido de lista de Escolas
export const listaEscolas = (pesquisa) => axios.post('https://ment-ua.herokuapp.com/auth/search/schools', pesquisa);
//ETAPA 4 - Pedido de lista de Grupos Disciplinares
export const listaGruposDisciplinares = () => axios.post('https://ment-ua.herokuapp.com/auth/courses');

//ETAPA 4 - Pedido de Registo de nova conta
export const register = (data) => axios.post('https://ment-ua.herokuapp.com/auth/register', data);

//-----------REGISTO
//-----------CONTEXT

export const login = (data) => axios.post("https://ment-ua.herokuapp.com/auth/login", data);
export const checkLoggedIn = () => axios.get('https://ment-ua.herokuapp.com/auth/loggedIn');
export const getLoggedUser = () => axios.post('https://ment-ua.herokuapp.com/auth/getLoggedUser');
export const logout = () => axios.get('https://ment-ua.herokuapp.com/auth/logout');


//-----------DASHBOARD
export const dashboardInfo = () => axios.post('https://ment-ua.herokuapp.com/dashboardInfo');

//-----------BANCO
export const bancoInfo = () => axios.post('https://ment-ua.herokuapp.com/bancoInfo');

//-----------SESSOES DE DESTAQUE
export const destaqueInfo = () => axios.post('https://ment-ua.herokuapp.com/destaqueInfo');

//-----------PERFIL DE EQUIPA
export const perfilequipaInfo = (dados) => axios.post('https://ment-ua.herokuapp.com/perfilequipaInfo', dados);
export const equipaInfo = (id) => axios.post('https://ment-ua.herokuapp.com/perfilequipaInfo/equipa', id);

//-----------CRIAR SESSAO
export const minhasEquipas = () => axios.post('https://ment-ua.herokuapp.com/perfil/minhasEquipas');
export const carregarEscolaOwner = () => axios.post('https://ment-ua.herokuapp.com/perfil/minhaEscola');
export const listaGrausEnsino = () => axios.post('https://ment-ua.herokuapp.com/criarSessao/grausDeEnsino');
export const criarSessao = (dados) => axios.post('https://ment-ua.herokuapp.com/criarSessao/', dados);

//-----------Sessao
export const sessaoInfo = (id) => axios.post('https://ment-ua.herokuapp.com/sessao/', id);

//-----------Minhas Equipas
export const minhasEquipasInfo = (id) => axios.post('https://ment-ua.herokuapp.com/minhasequipas/', id);

//-----------CRIAR EQUIPA
export const carregarMentores = (pesquisa) => axios.post('https://ment-ua.herokuapp.com/criarEquipa/carregarMentores/', pesquisa);
export const criarEquipa = (dados) => axios.post('https://ment-ua.herokuapp.com/criarEquipa/', dados);
