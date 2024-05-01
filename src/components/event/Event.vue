<template>
  <div>
    <div class="container mt-5">
      <h2 class="mb-4">Eventos</h2>
      <div v-if="eventos.length > 0">
        <table class="table table-bordered">
          <thead class="table-dark">
            <tr>
              <th scope="col">Título do Evento</th>
              <th scope="col">CNPJ</th>
              <th scope="col">Data de Emissão</th>
              <th scope="col">Data de Vencimento</th>
              <th scope="col">Status BOLETO</th>
              <th scope="col">Status PAGAMENTO</th>
              <th scope="col">Nome Vendedor</th>
              <th scope="col">Detalhes</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="evento in eventos" :key="evento.id" :class="{'table-success': evento.status_pagamento === 'Pago', 'table-danger': evento.status_pagamento === 'NaoPago'}">
              <td>{{ evento.tituloEvento }}</td>
              <td>{{ evento.cnpj }}</td>
              <td>{{ formatarData(evento.dataEmissao, false) }}</td>
              <td>{{ formatarData(evento.dataVencimento, true) }}</td>
              <td>{{ evento.status }}</td>
              <td>{{ evento.status_pagamento }}</td>
              <td>{{ evento.nomeVendedor }}</td>
              <td>
                <router-link :to="{ name: 'EventoDetail', params: { id: evento.id } }" class="btn btn-primary">
                  <i class="fas fa-info-circle"></i> Detalhar
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else>
        <p>Nenhum evento encontrado.</p>
      </div>
    </div>
    <Footer />
  </div>
  <footer />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getEvento, getVendedorPorCnpj } from '../../services/eventServices.ts';

const eventos = ref([]);

onMounted(async () => {
  try {
    let eventosTemp = await getEvento();

    for (let evento of eventosTemp) {
      console.log(`Processando evento com ID: ${evento.id} e CNPJ: ${evento.cnpj}`);
      if (evento.cnpj && evento.id) {
        try {
          let nomeVendedor = await getVendedorPorCnpj(evento.cnpj, evento.id);
          evento.nomeVendedor = nomeVendedor;
        } catch (error) {
          console.error(`Erro ao buscar o nome do vendedor para o evento ID ${evento.id} e CNPJ ${evento.cnpj}:`, error);
          evento.nomeVendedor = 'Nome não encontrado';
        }
      } else {
        evento.nomeVendedor = 'Informação insuficiente para busca';
      }
    }

    eventos.value = eventosTemp;
  } catch (error) {
    console.error('Erro geral ao buscar eventos:', error);
  }
});

const formatarData = (data, apenasData) => {
  if (!data) return '';
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  
  if (apenasData) {
    return new Date(data).toLocaleDateString(undefined, options);
  }
  return new Date(data).toLocaleString();
};
</script>


//=> COMPONENTS
<script>
import Footer from "../nav/Footer.vue";

export default {
  name: 'Event',

  components: {
    'Footer': Footer
  }
}
</script>

<style scoped>
.container {
  margin-top: 20px;
}

.table th, .table td {
  white-space: nowrap;
}

.table td {
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
