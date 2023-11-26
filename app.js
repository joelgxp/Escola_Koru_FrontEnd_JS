import { NotFound } from './scripts/pages/404.page.js'
import { Header } from './scripts/pages/header.page.js'
import { Leaders } from './scripts/pages/leader/leaders.page.js'
import { AddLeaders } from './scripts/pages/leader/add-leaders.page.js'
import { EditLeaders } from './scripts/pages/leader/edit-leaders.page.js'
import { Collaborators } from './scripts/pages/collaborator/collaborators.page.js'
import { AddCollaborator } from './scripts/pages/collaborator/add-collaborator.page.js'
import { Meetings } from './scripts/pages/meetings/meetings.page.js'
import { AddMeetings } from './scripts/pages/meetings/add-meetings.page.js'
import { Signup } from './scripts/pages/login/signup.page.js'
import { Login } from './scripts/pages/login/login.page.js'
import { ForgotPassword } from './scripts/pages/login/forgot-password.page.js'

const ROUTER = {
    "#404": { component: NotFound, private: false, nome: '404' },
    "#header": { component: Header, private: false, nome: 'header' },
    "#leaders": { component: Leaders, private: false, nome: 'leaders' },
    "#add-leaders": { component: AddLeaders, private: false, nome: 'add-leaders' },
    "#edit-leaders": { component: EditLeaders, private: false, nome: 'edit-leaders' },
    "#collaborators": { component: Collaborators, private: false, nome: 'collaborators' },
    "#add-collaborator": { component: AddCollaborator, private: false, nome: 'add-collaborator' },
    "#meetings": { component: Meetings, private: false, nome: 'meetings' },
    "#add-meetings": { component: AddMeetings, private: false, nome: 'add-meetings' },
    "#signup": { component: Signup, private: false, nome: 'signup' },
    "#login": { component: Login, private: false, nome: 'login' },
    "#forgot": { component: ForgotPassword, private: false, nome: 'forgot-password' }
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