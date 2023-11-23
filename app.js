import { NotFound } from './scripts/pages/404.page.js'
import { Header } from './scripts/pages/header.page.js'
import { Leaders } from './scripts/pages/leaders.page.js'
import { AddLeaders } from './scripts/pages/add-leaders.page.js'
import { Colaboradores } from './scripts/pages/colaboradores.page.js'
import { Reunioes } from './scripts/pages/reunioes.page.js'
import { Signup } from './scripts/pages/signup.page.js'
import { Login } from './scripts/pages/login.page.js'

const ROUTER = {
    "#404": { component: NotFound, private: false, nome: '404' },
    "#header": { component: Header, private: false, nome: 'header' },
    "#leaders": { component: Leaders, private: false, nome: 'leaders' },
    "#add-leaders": { component: AddLeaders, private: false, nome: 'add-leaders' },
    "#colaboradores": { component: Colaboradores, private: false, nome: 'colaboradores' },
    "#reunioes": { component: Reunioes, private: false, nome: 'reunioes' },
    "#signup": { component: Signup, private: false, nome: 'signup' },
    "#login": { component: Login, private: false, nome: 'login' }
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