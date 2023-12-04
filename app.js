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
    "#404": { component: NotFound, private: false },
    "#header": { component: Header, private: false },
    "#leaders": { component: Leaders, private: false },
    "#add-leaders": { component: AddLeaders, private: false },
    "#edit-leaders": { component: EditLeaders, private: false },
    "#collaborators": { component: Collaborators, private: false },
    "#add-collaborator": { component: AddCollaborator, private: false },
    "#meetings": { component: Meetings, private: false },
    "#add-meetings": { component: AddMeetings, private: false },
    "#signup": { component: Signup, private: false },
    "#login": { component: Login, private: false },
    "#forgot": { component: ForgotPassword, private: false }
}

function redirectPage() {
    const root = document.querySelector('#root')
    const route = ROUTER[window.location.hash] || ROUTER['#404']

    root.innerHTML = null
    root.append(Header())
    root.append(route.component())
}

window.addEventListener('load', () => {
    if (!window.location.hash) {
        window.location.hash = "#login"
    }
    redirectPage()
    window.addEventListener('hashchange', redirectPage)
})