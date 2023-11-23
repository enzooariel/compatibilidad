import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/pages/HomePage.vue'
import EquiposPage from './components/pages/EquiposPage.vue'
import ContactosPage from './components/pages/ContactosPage.vue'
// Modelo de equipos
import EsaoteNuevos from './components/equipos/EsaoteNuevos.vue'
import EsaoteViejosCarros from './components/equipos/EsaoteViejosCarros.vue'
import EsaoteViejosPortatil from './components/equipos/EsaoteViejosPortatil.vue'
import WisonicPortatil from './components/equipos/WisonicPortatil.vue'
// Modelo de Trx
import TrxOmega from './components/trx/TrxOmega.vue'
import TrxSigma from './components/trx/TrxSigma.vue'
import TrxClover from './components/trx/TrxClover.vue'
import TrxClassC from './components/trx/TrxClassC.vue'
import TrxMl70 from './components/trx/TrxMl70.vue'
import TrxAlpha from './components/trx/TrxAlpha.vue'
import TrxGamma from './components/trx/TrxGamma.vue'






let routes = [
    {
        path: "/",
        component: HomePage,
    },
    {
        path: "/equipos",
        component: EquiposPage,
    },
    {
        path: "/contactos",
        component : ContactosPage
    },
    {
        path: "/esaotenuevos",
        component : EsaoteNuevos
    },
    {
        path: "/esaoteviejoscarros",
        component : EsaoteViejosCarros
    },
    {
        path: "/esaoteviejosportatil",
        component : EsaoteViejosPortatil
    },
    {
        path: "/wisonicportatil",
        component : WisonicPortatil
    },
    { 
        path: "/trxomega",
        component : TrxOmega
    },
    { 
        path: "/trxsigma",
        component : TrxSigma
    },
    { 
        path: "/trxclover",
        component : TrxClover
    },
    { 
        path: "/trxclassc",
        component : TrxClassC
    },
    { 
        path: "/trxml70",
        component : TrxMl70
    },
    { 
        path: "/trxalpha",
        component : TrxAlpha
    },
    { 
        path: "/trxgamma",
        component : TrxGamma
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router