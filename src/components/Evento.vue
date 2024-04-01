<template>
  <div class="container mt-5">
    <h2 class="mb-4">Eventos</h2>
    <div v-if="eventos.length > 0">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Título do Evento</th>
            <th scope="col">Data de Emissão</th>
            <th scope="col">Data de Vencimento</th>
            <th scope="col">Nome do Vendedor</th>
            <th scope="col">Status BOLETO</th>
            <th scope="col">Status PAGAMENTO</th>
            <th scope="col">Detalhes</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="evento in eventos" :key="evento.id" :class="{'table-success': evento.status_pagamento === 'Pago', 'table-danger': evento.status_pagamento === 'NaoPago'}">
            <td>{{ evento.tituloEvento }}</td>
            <td>{{ formatarData(evento.dataEmissao) }}</td>
            <td>{{ formatarData(evento.dataVencimento) }}</td>
            <td>{{ evento.nomeVendedor }}</td>
            <td>{{ evento.status }}</td>
            <td>{{ evento.status_pagamento }}</td>
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
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { getEvento } from '../services/eventServices.js';

const eventos = ref([]);
const router = useRouter();

onMounted(async () => {
  try {
    eventos.value = await getEvento();
  } catch (error) {
    console.error('Erro ao buscar eventos:', error);
  }
});

const formatarData = (data) => {
  if (!data) return '';
  return new Date(data).toLocaleDateString();
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}
</style>
