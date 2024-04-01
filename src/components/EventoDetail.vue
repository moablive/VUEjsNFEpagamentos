<template>
  <div class="container mt-5">
    <h2 class="mb-4">Detalhes do Evento</h2>
    <div v-if="evento">
      <div class="card shadow-sm">
        <div class="card-header">
          <h5 class="card-title">{{ evento.tituloEvento }}</h5>
        </div>
        <div class="card-body">
          <p class="card-text"><strong>ID:</strong> {{ evento.id }}</p>
          <p class="card-text"><strong>CNPJ:</strong> {{ evento.cnpj }}</p>
          <p class="card-text"><strong>Número NF:</strong> {{ evento.numeroNF }}</p>
          <p class="card-text"><strong>Razão Social:</strong> {{ evento.razaoSocial }}</p>
          <p class="card-text"><strong>Data de Emissão:</strong> {{ formatarData(evento.dataEmissao) }}</p>
          <p class="card-text"><strong>Data de Vencimento:</strong> {{ formatarData(evento.dataVencimento) }}</p>
          <p class="card-text"><strong>Nome do Vendedor:</strong> {{ evento.nomeVendedor }}</p>
          <p class="card-text"><strong>Endereço:</strong> {{ evento.endereco }}</p>
          <p class="card-text"><strong>Status:</strong> {{ evento.status }}</p>
          <p class="card-text"><strong>Status de Pagamento:</strong> {{ evento.status_pagamento }}</p>
          
          <!-- Botão para marcar como pago -->
          <button class="btn btn-success me-2" @click="marcarComoPagoEvento(evento.id)" v-if="evento.status_pagamento !== 'Pago'">
            Marcar como Pago
          </button>
          
          <!-- Botão para marcar como não pago -->
          <button class="btn btn-danger" @click="marcarComoNaoPagoEvento(evento.id)" v-if="evento.status_pagamento !== 'Não Pago'">
            Marcar como Não Pago
          </button>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Nenhum evento encontrado.</p>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { getEventoByID, marcarComoPago, marcarComoNaoPago } from '../services/eventServices.js';

const router = useRouter();
const evento = ref(null);

onMounted(async () => {
  try {
    const eventId = router.currentRoute.value.params.id;
    evento.value = await getEventoByID(eventId);
  } catch (error) {
    console.error('Erro ao buscar detalhes do evento:', error);
  }
});

const formatarData = (data) => {
  if (!data) return '';
  return new Date(data).toLocaleDateString();
};

// Função para marcar o evento como pago
const marcarComoPagoEvento = async (eventId) => {
  try {
    await marcarComoPago(eventId);
    window.location.reload(); // Reload da página
  } catch (error) {
    console.error('Erro ao marcar o evento como pago:', error);
  }
};

// Função para marcar o evento como não pago
const marcarComoNaoPagoEvento = async (eventId) => {
  try {
    await marcarComoNaoPago(eventId);
    window.location.reload(); // Reload da página
  } catch (error) {
    console.error('Erro ao marcar o evento como não pago:', error);
  }
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}

.card {
  width: 100%;
}

.card-title {
  color: #333;
}

.card-text {
  color: #555;
}

.card-text strong {
  color: #000;
}
</style>
