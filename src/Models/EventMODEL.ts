export interface EventModel {
  id: number;
  CNPJ: string;
  NumeroNF: string;
  RazaoSocial: string;
  DataEmissao: Date;
  DataVencimento: Date;
  NomeVendedor: string;
  TituloEvento: string;
  Endereco: string;
  Status: string;
  status_pagamento: string;
}