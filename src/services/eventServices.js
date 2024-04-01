import axios from 'axios';
import EventModel from '../Models/EventMODEL.js';

const urlEventLocalHost = 'http://localhost:5147';

export async function getEvento() {
  try {
    const response = await axios.get(`${urlEventLocalHost}/api/evento`);
    if (response.data && response.data.length > 0) {
      return response.data.map(evento => new EventModel(
        evento.id,
        evento.cnpj,
        evento.numeroNF,
        evento.razaoSocial,
        new Date(evento.dataEmissao),
        new Date(evento.dataVencimento),
        evento.nomeVendedor,
        evento.tituloEvento,
        evento.endereco,
        evento.status,
        evento.status_pagamento
      ));
    } else {
      return [];
    }
  } catch (error) {
    throw new Error('Erro ao buscar eventos:', error);
  }
}

export async function getEventoByID(eventId) {
  try {
    const response = await axios.get(`${urlEventLocalHost}/api/evento/${eventId}`);
    if (response.data) {
      const eventoData = response.data;
      return new EventModel(
        eventoData.id,
        eventoData.cnpj,
        eventoData.numeroNF,
        eventoData.razaoSocial,
        new Date(eventoData.dataEmissao),
        new Date(eventoData.dataVencimento),
        eventoData.nomeVendedor,
        eventoData.tituloEvento,
        eventoData.endereco,
        eventoData.status,
        eventoData.status_pagamento
      );
    } else {
      throw new Error('Evento não encontrado');
    }
  } catch (error) {
    throw new Error('Erro ao obter evento:', error);
  }
}

export async function marcarComoPago(eventId) {
  return await axios.post(`${urlEventLocalHost}/api/evento/Pagar/${eventId}`);
}

export async function marcarComoNaoPago(eventId) {
  return await axios.post(`${urlEventLocalHost}/api/evento/NaoPagar/${eventId}`);
}
