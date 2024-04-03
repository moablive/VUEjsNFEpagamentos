<template>
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <div class="container-fluid">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Evento" class="nav-link">Evento</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/vendedor" class="nav-link">Vendedor</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownUser" role="button" aria-expanded="false">Usuário</a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownUser">
            <li><router-link to="/CadastrarUsuario" class="dropdown-item">Cadastrar</router-link></li>
            <li><router-link to="/LoginUsuario" class="dropdown-item">Login</router-link></li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>


<style scoped>
.nav-item {
  list-style-type: none;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
}

.nav-link:hover {
  background-color: blue;
  border-radius: 0.25rem;
}

.dropdown-menu {
  display: none;
  position: absolute;
  background-color: black;
  padding: 0.5rem 0;
  z-index: 1000;
}

.dropdown-menu a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  display: block;
}

.dropdown-menu a:hover {
  background-color: blue;
}

.dropdown:hover .dropdown-menu {
  display: block;
}
</style>