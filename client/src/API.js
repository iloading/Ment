import axios from 'axios';

//-----------REGISTO
//ETAPA 1 - Verificar email no Registo
export const verifyEmailExists = (email) => axios.post('http://localhost:3001/auth/verify-email', email);
//ETAPA 3 - Avatares
export const avatares = () => axios.get('http://localhost:3001/auth/avatares');


//ETAPA 4 - Pedido de lista de Escolas
export const listaEscolas = (pesquisa) => axios.post('http://localhost:3001/auth/search/schools', pesquisa);
//ETAPA 4 - Pedido de lista de Grupos Disciplinares
export const listaGruposDisciplinares = () => axios.post('http://localhost:3001/auth/courses');

//ETAPA 4 - Pedido de Registo de nova conta
export const register = (data) => axios.post('http://localhost:3001/auth/register', data);

//-----------REGISTO
//-----------CONTEXT

export const login = (data) => axios.post("http://localhost:3001/auth/login", data);
export const checkLoggedIn = () => axios.get('http://localhost:3001/auth/loggedIn');
export const getLoggedUser = () => axios.post('http://localhost:3001/auth/getLoggedUser');
export const logout = () => axios.get('http://localhost:3001/auth/logout');


//-----------DASHBOARD
export const dashboardInfo = () => axios.post('http://localhost:3001/dashboardInfo');

//-----------BANCO
export const bancoInfo = () => axios.post('http://localhost:3001/bancoInfo');

//-----------SESSOES DE DESTAQUE
export const destaqueInfo = () => axios.post('http://localhost:3001/destaqueInfo');

//-----------PERFIL DE EQUIPA
export const perfilequipaInfo = (dados) => axios.post('http://localhost:3001/perfilequipaInfo', dados);
export const equipaInfo = (id) => axios.post('http://localhost:3001/perfilequipaInfo/equipa', id);

//-----------CRIAR SESSAO
export const minhasEquipas = () => axios.post('http://localhost:3001/perfil/minhasEquipas');
export const carregarEscolaOwner = () => axios.post('http://localhost:3001/perfil/minhaEscola');
export const listaGrausEnsino = () => axios.post('http://localhost:3001/criarSessao/grausDeEnsino');
export const criarSessao = (dados) => axios.post('http://localhost:3001/criarSessao/', dados);

//-----------Sessao
export const sessaoInfo = (id) => axios.post('http://localhost:3001/sessao/', id);

//-----------Minhas Equipas
export const minhasEquipasInfo = (id) => axios.post('http://localhost:3001/minhasequipas/', id);

//-----------CRIAR EQUIPA
export const carregarMentores = (pesquisa) => axios.post('http://localhost:3001/criarEquipa/carregarMentores/', pesquisa);
export const criarEquipa = (dados) => axios.post('http://localhost:3001/criarEquipa/', dados);

//-----------EDITAR SESSAO
export const editarSessao = (dados) => axios.post('http://localhost:3001/sessao/editarSessao/', dados);
export const publicarSessao = (id) => axios.post('http://localhost:3001/sessao/publicarSessao/', id);

