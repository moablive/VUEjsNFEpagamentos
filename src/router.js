import { createRouter, createWebHistory } from 'vue-router'
import Evento from './components/Evento.vue'
import EventoDetail from './components/EventoDetail.vue' 
import Vendedor from './components/Vendedor.vue'
import Home from "./components/Home.vue"
import CadastrarUsuario from "./components/CadastrarUsuario.vue"

const routes = [
    { path: '/', component: Home },
    { path: '/evento', component: Evento },
    { path: '/evento/:id', component: EventoDetail, name: 'EventoDetail' },
    { path: '/vendedor', component: Vendedor },
    { path: '/CadastrarUsuario', component: CadastrarUsuario, name: 'CadastrarUsuario'}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;
