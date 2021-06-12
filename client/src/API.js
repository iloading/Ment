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