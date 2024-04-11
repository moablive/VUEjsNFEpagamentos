<template>
    <div class="container-jumbo">
        <div class="table-responsive">
            <table class="table table-striped table-hover">
                <thead class="table-dark">
                    <tr>
                        <th>Telecon</th>
                        <th>Vendedor</th>
                        <th>Nome</th>
                        <th>CNPJ</th>
                        <th>Contato</th>
                        <th>Email</th>
                        <th>País</th>
                        <th>Estado</th>
                        <th>Cidade</th>
                        <th>Bairro</th>
                        <th>Rua/Av</th>
                        <th>Número</th>
                        <th>Complemento</th>
                        <th>CEP</th>
                        <th>EDITAR</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="cliente in clientes" :key="cliente.id">
                        <td>{{ cliente.codigO_TELECON }}</td>
                        <td>{{ cliente.nomeVendedor }}</td>
                        <td>{{ cliente.nome }}</td>
                        <td>{{ cliente.cnpj }}</td>
                        <td>{{ cliente.contato.trim() }}</td>
                        <td>{{ cliente.email }}</td>
                        <td>{{ cliente.pais }}</td>
                        <td>{{ cliente.estado }}</td>
                        <td>{{ cliente.cidade }}</td>
                        <td>{{ cliente.bairro }}</td>
                        <td>{{ cliente.ruA_AV }}</td>
                        <td>{{ cliente.numero }}</td>
                        <td>{{ cliente.complemento }}</td>
                        <td>{{ cliente.cep.trim() }}</td>
                        <td><button class="btn btn-primary btn-sm">Editar</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <Footer />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getClientes, getVendedorNomePorCnpj } from '../../services/clientesServices.ts';

const clientes = ref([]);

onMounted(async () => {
    try {
        console.log('Buscando clientes...');
        let clientesTemp = await getClientes();
        console.log('Clientes recebidos:', clientesTemp);

        // Atualizando cada cliente com o nome do seu vendedor
        for (const cliente of clientesTemp) {
            if (cliente.cnpj) {
                try {
                    cliente.nomeVendedor = await getVendedorNomePorCnpj(cliente.cnpj);
                } catch (error) {
                    console.error(`Erro ao buscar o nome do vendedor para o CNPJ ${cliente.cnpj}: `, error);
                    cliente.nomeVendedor = 'Nome não encontrado';
                }
            } else {
                cliente.nomeVendedor = 'CNPJ não disponível';
            }
        }

        clientes.value = clientesTemp;
    } catch (error) {
        console.error("Erro ao buscar clientes: ", error);
    }
});
</script>



// COMPONENTS
<script>
import Footer from "../nav/Footer.vue";

export default {
    name: 'Clientes',

    components: {
        'Footer': Footer
    }
}
</script>



<style>
.table {
    min-width: 1200px;
}

.btn-sm {
    padding: .25rem .5rem; 
    font-size: .875rem; 
    line-height: 1.5; 
}
</style>