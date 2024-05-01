import axios from "axios";
import { ClientesMODEL } from "../Models/ClientesMODEL";

var urlAPI = import.meta.env.VITE_urlEventLocalHost;

export async function getClientes(): Promise<ClientesMODEL[]> {
    try {
        const response = await axios.get(`${urlAPI}/api/clientes`);
        return response.data;
    } catch (error) {
        throw new Error("Erro ao buscar eventos: " + error);
    }
}

export async function getVendedorNomePorCnpj(cnpj: string): Promise<string> {
    try {
        const response = await axios.get(`${urlAPI}/api/clientes/VendedorPorCnpj/${cnpj}`);
        return response.data;
    } catch (error) {
        throw new Error("Erro ao buscar o nome do vendedor: " + error);
    }
}
