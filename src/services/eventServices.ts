import axios from 'axios';
import EventModel from '../Models/EventMODEL.ts';

var urlAPI = import.meta.env.VITE_urlEventLocalHost

export async function getEvento(): Promise<EventModel[]> {
  try {
    const response = await axios.get(`${urlAPI}/api/evento`);
    return response.data;
  }
  catch (error) {
  throw new Error('Erro ao buscar eventos:' + error);
  }
}

export async function getEventoByID(eventId: number): Promise<EventModel> {
  try {
    const response = await axios.get(`${urlAPI}/api/evento/${eventId}`);
    return response.data;
    } 

  catch (error) {
    throw new Error('Erro ao obter evento:' + error);
  }
}

export async function marcarComoPago(eventId: number) {
  return await axios.post(`${urlAPI}/api/evento/Pagar/${eventId}`);
}

export async function marcarComoNaoPago(eventId: number) {
  return await axios.post(`${urlAPI}/api/evento/NaoPagar/${eventId}`);
}
