import axios from 'axios';

//-----------REGISTO
//Verificar email no Registo
export const verifyEmailExists = (email) => axios.post('http://localhost:3001/auth/verify-email', email);
//Pedido de Registo de nova conta
export const register = (data) => axios.post('http://localhost:3001/auth/register', data);

//-----------REGISTO