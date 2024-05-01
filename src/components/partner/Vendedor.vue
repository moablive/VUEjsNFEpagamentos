<template>
  <div class="container mt-4">
    <h1 class="mb-4">Vendedores</h1>
    <div class="row">
      <div v-for="vendedor in vendedores" :key="vendedor.id" class="col-md-4 mb-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ vendedor.nome }}</h5>
            <h6 class="card-subtitle mb-2 text-muted" v-if="vendedor.codigO_VENDEDOR || vendedor.codigO_VENDEDOR === 0">
              Código: {{ vendedor.codigO_VENDEDOR }}
            </h6>
            <h6 class="card-subtitle mb-2 text-muted" v-else>
              Código não disponível
            </h6>
            <p class="card-text">
              Email: {{ vendedor.email || 'Não informado' }}<br>
              Contato: {{ vendedor.contato || 'Não informado' }}
            </p>
            <button class="btn btn-danger" @click="handleDeleteVendedor(vendedor.id)">Deletar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br><br><br>
  <Footer />
</template>


<script setup>
import { onMounted, ref } from 'vue';
import { getVendedores, deleteVendedor } from '../../services/vendedorServices';
import Footer from '../nav/Footer.vue';

const vendedores = ref([]);

onMounted(async () => {
  try {
    vendedores.value = await getVendedores();
    console.log('Vendedores recebidos:', vendedores.value);
  } catch (error) {
    console.error("Falha ao carregar vendedores:", error);
  }
});

const handleDeleteVendedor = async (id) => {
  try {
    await deleteVendedor(id);
    vendedores.value = vendedores.value.filter(v => v.id !== id);
  } catch (error) {
    console.error("Erro ao deletar vendedor:", error);
  }
}
</script>

// COMPONENTS
<script>
import Footer from "../nav/Footer.vue";

export default {
  name: 'Event',

  components: {
    'Footer': Footer
  }
}
</script>
