import axios from 'axios';


export const verifyEmailExists = (email) => axios.post('http://localhost:3001/auth/verify-email', email);