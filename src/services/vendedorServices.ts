import axios from "axios";
import {  VendedorModel } from "../Models/VendedorMODEL";

var urlAPI = import.meta.env.VITE_urlEventLocalHost;


export async function getVendedores(): Promise<VendedorModel[]> {
    try {
        const response = await axios.get(`${urlAPI}/api/Vendedores`);
        return response.data;
    } catch (error) {
        throw new Error("Erro ao buscar Vendedores: " + error);
    }
}


export async function deleteVendedor(id: number): Promise<void> {
    try {
        await axios.delete(`${urlAPI}/api/Vendedores/${id}`);
    } catch (error) {
        throw new Error("Erro ao deletar Vendedor: " + error);
    }
}