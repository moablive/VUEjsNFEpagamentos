import axios from 'axios';
import UserLogin from '../Models/UserLogin';

var urlAPI = import.meta.env.VITE_urlEventLocalHost

export async function cadastrarUsuario(userLogin: UserLogin): Promise<UserLogin> {
    try {
      const response = await axios.post(`${urlAPI}/api/UserLogin`, userLogin);
      return response.data;
    }
    catch (error) {
    throw new Error('Erro ao buscar eventos:' + error);
    }
}
  