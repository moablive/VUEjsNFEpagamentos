<template>
  <div>
    <div class="container">
      <h1>Cadastro de Usuário</h1>
      <form @submit.prevent="cadastrar" class="mt-4">
        <div class="mb-3">
          <label for="email" class="form-label">Email:</label>
          <input type="email" id="email" v-model="user.email" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="senha" class="form-label">Senha:</label>
          <input type="password" id="senha" v-model="user.senha" class="form-control" required>
        </div>
        <button type="submit" class="btn btn-primary">Cadastrar</button>
      </form>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { cadastrarUsuario } from '../../services/userServices';

const user = ref({
  email: '',
  senha: ''
});

const cadastrar = async () => {
  try {
    const newUser = await cadastrarUsuario(user.value);
    console.log('Usuário cadastrado com sucesso:', newUser);
    window.location.reload();
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
  }
};
</script>

<script>
import { ref } from 'vue';
import Footer from "../nav/Footer.vue";

export default {
  name: 'CadastroUsuario',

  components: {
    'Footer': Footer
  }
}
</script>
