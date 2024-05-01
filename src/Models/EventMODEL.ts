export interface EventModel {
  id: number;
  Status: string;
  CNPJ: string;
  NumeroNF: string;
  RazaoSocial: string;
  DataEmissao: Date;
  DataVencimento: Date; 
  TituloEvento: string;
  Endereco: string;
  status_pagamento: string;
  CODIGO_VENDEDOR: number;
  NomeVendedor: string;
}
export default EventModel;