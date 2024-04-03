import { createRouter, createWebHistory } from 'vue-router'

//=> src/cpmponents/home
import Home from "./components/home/Home.vue"

//=> src/cpmponents/event
import Evento from './components/event/Event.vue'
import EventoDetail from './components/event/EventoDetail.vue'

//=> src/cpmponents/partner
import Vendedor from './components/partner/Vendedor.vue'

//=> src/cpmponents/user
import CadastrarUsuario from "./components/user/CadastrarUsuario.vue"
import LoginUsuario from "./components/user/LoginUsuario.vue"

const routes = [
    { path: '/', component: Home },
    { path: '/Evento', component: Evento },
    { path: '/evento/:id', component: EventoDetail, name: 'EventoDetail' },
    { path: '/vendedor', component: Vendedor },
    { path: '/CadastrarUsuario', component: CadastrarUsuario, name: 'CadastrarUsuario'},
    { path: '/LoginUsuario', component: LoginUsuario, name: 'LoginUsuario'}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;
