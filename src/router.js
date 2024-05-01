import { createRouter, createWebHistory } from 'vue-router'

//=> src/components/home
import Home from "./components/home/Home.vue"

//=> src/components/event
import Evento from './components/event/Event.vue'
import EventoDetail from './components/event/EventoDetail.vue'
import EventoPagamento from './components/event/EventoPagamento.vue'

//=> src/components/partner
import Vendedor from './components/partner/Vendedor.vue'

//=> src/components/user
import CadastrarUsuario from "./components/user/CadastrarUsuario.vue"
import LoginUsuario from "./components/user/LoginUsuario.vue"

//=> src/components/Client
import Clientes from "./components/Client/Clientes.vue"

const routes = [
    { path: '/', component: Home },
    { path: '/Evento', component: Evento },
    { path: '/evento/:id', component: EventoDetail, name: 'EventoDetail' },
    { path: '/evento/:id/pagamento', component: EventoPagamento, name: 'EventoPagamento' },
    { path: '/vendedor', component: Vendedor },
    { path: '/Clientes', component: Clientes },
    { path: '/CadastrarUsuario', component: CadastrarUsuario, name: 'CadastrarUsuario'},
    { path: '/LoginUsuario', component: LoginUsuario, name: 'LoginUsuario'}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;
