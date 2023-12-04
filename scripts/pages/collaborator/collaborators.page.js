import { getCollaborators } from '../../services/collaborators.service.js'
import { CardCollaborator } from '../../components/card-collaborator.component.js'

const collaborators = document.createElement('div')
collaborators.setAttribute('id', 'p-list-colaboradores')
const collaboratorsPerPage = 5
let currentPage = 1
let allCollaborators

const eventos = () => {
    getCollaborators()
        .then((data) => {
            allCollaborators = data
            displayCollaborators()
            setupPaginationButtons()
        })
        .catch((erro) => {
            console.log(erro)
        })
}

export const Collaborators = () => {
    collaborators.innerHTML = `
    <div class="container">
        <div class="card">
            <h1 class="title">Colaboradores</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Departamento</th>
                        <th>E-mail</th>
                        <th><a href="#add-collaborator"><button class="btn btn-primary">Adicionar</button></a></th>
                    </tr>
                </thead>
                <tbody id="table-body"></tbody>
            </table>
            <div id="pagination-buttons">
                <button class="btn btn-primary" id="prevPageBtn">Anterior</button>
                <button class="btn btn-primary" id="nextPageBtn">Próxima</button>
            </div>
        </div>
    </div>

    `
    eventos()
    return collaborators
}

function getCollaboratorsForPage(page, collaboratorsPerPage) {
    const startIndex = (page - 1) * collaboratorsPerPage
    const endIndex = startIndex + collaboratorsPerPage
    return allCollaborators.slice(startIndex, endIndex)
}

function displayCollaborators() {
    const tableBody = document.getElementById('table-body')
    const collaboratorsForPage = getCollaboratorsForPage(currentPage, collaboratorsPerPage)
    tableBody.innerHTML = ''  // Limpa o conteúdo anterior antes de adicionar novos colaboradores
    collaboratorsForPage.forEach(collaborator => {
        const cardCollaborator = CardCollaborator(collaborator)
        tableBody.appendChild(cardCollaborator)
    })
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--
        displayCollaborators()
    }
}

function nextPage() {
    if (hasMorePages(currentPage, collaboratorsPerPage)) {
        currentPage++
        displayCollaborators()
    }
}

function hasMorePages(currentPage, collaboratorsPerPage) {
    const totalCollaborators = allCollaborators.length
    const totalPages = Math.ceil(totalCollaborators / collaboratorsPerPage)
    return currentPage < totalPages
}

function setupPaginationButtons() {
    const prevPageBtn = document.getElementById('prevPageBtn')
    const nextPageBtn = document.getElementById('nextPageBtn')

    if (prevPageBtn) {
        prevPageBtn.addEventListener('click', prevPage)
    }

    if (nextPageBtn) {
        nextPageBtn.addEventListener('click', nextPage)
    }
}
