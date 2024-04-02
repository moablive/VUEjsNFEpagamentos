<template>
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
  </template>
  
  
  <script>
  import { cadastrarUsuario } from '../services/userLoginServices.ts'; 
  
  export default {
    data() {
      return {
        user: {
          email: '',
          senha: ''
        }
      };
    },
    methods: {
      async cadastrar() {
        try {
          const newUser = await cadastrarUsuario(this.user);
          console.log('Usuário cadastrado com sucesso:', newUser);
          window.location.reload();
        } catch (error) {
          console.error('Erro ao cadastrar usuário:', error);
         
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos específicos para este componente, se necessário */
  </style>
  