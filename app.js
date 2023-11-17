import { NotFound } from './pages/404.page.js'
import { Header } from './pages/header.page.js'
import { Lideres } from './pages/lideres.page.js'
import { Colaboradores } from './pages/colaboradores.page.js'
import { Reunioes } from './pages/reunioesl.page.js'

const ROUTER = {
    "#404": { component: NotFound, private: false, nome: '404' },
    "#header": { component: Header, private: false, nome: 'header' },
    "#lideres": { component: Lideres, private: false, nome: 'lideres' },
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