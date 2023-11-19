import { NotFound } from './scripts/pages/404.page.js'
import { Header } from './scripts/pages/header.page.js'
import { Lideres } from './scripts/pages/lideres.page.js'
import { AddLideres } from './scripts/pages/add-lideres.page.js'
import { Colaboradores } from './scripts/pages/colaboradores.page.js'
import { Reunioes } from './scripts/pages/reunioes.page.js'

const ROUTER = {
    "#404": { component: NotFound, private: false, nome: '404' },
    "#header": { component: Header, private: false, nome: 'header' },
    "#lideres": { component: Lideres, private: false, nome: 'lideres' },
    "#add-lideres": { component: AddLideres, private: false, nome: 'add-lideres' },
    "#colaboradores": { component: Colaboradores, private: false, nome: 'colaboradores' },
    "#reunioes": { component: Reunioes, private: false, nome: 'reunioes' },
}

function redirectPage() {
    const root = document.querySelector('#root')
    const route = ROUTER[window.location.hash] || ROUTER['#404']

    root.innerHTML = null
    root.append(Header())
    root.append(route.component())
}

window.addEventListener('load', () => {
redirectPage()
window.addEventListener('hashchange', redirectPage)
})