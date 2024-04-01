export default class EventModel {
  constructor(id, cnpj, numeroNF, razaoSocial, dataEmissao, dataVencimento, nomeVendedor, tituloEvento, endereco, status, status_pagamento) {
    this.id = id;
    this.cnpj = cnpj;
    this.numeroNF = numeroNF;
    this.razaoSocial = razaoSocial;
    this.dataEmissao = dataEmissao;
    this.dataVencimento = dataVencimento;
    this.nomeVendedor = nomeVendedor;
    this.tituloEvento = tituloEvento;
    this.endereco = endereco;
    this.status = status;
    this.status_pagamento = status_pagamento;
  }
}