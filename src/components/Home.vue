<template>
    <div>
        <h1>HOME PAGE</h1>
        
    <!-- //EXEMPLO DE COMPOENTES -->
        <cadastrar />
    </div>
</template>

<script>

    //EXEMPLO DE COMPOENTES
import CadastrarUsuario from "./CadastrarUsuario.vue"

export default {
    name: 'Home',

    //EXEMPLO DE COMPOENTES
    components: {
        'cadastrar': CadastrarUsuario
     }
}
</script>

