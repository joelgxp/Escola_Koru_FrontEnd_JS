import { getLeaders } from "../../services/leaders.service.js"
import { CardLider } from "../../components/card-lider.component.js"

const lideres = document.createElement('div')
lideres.setAttribute('id', 'p-lista-lideres')
const leadersPerPage = 5
let currentPage = 1
let allLeaders

const eventos = () => {
    getLeaders()
        .then((data) => {
            const leadersAtivos = filtrarPorAtivo(data, 1)
            console.log(data)
            console.log(leadersAtivos)
            allLeaders = leadersAtivos
            displayLeaders()
            setupPaginationButtons()
        })
        .catch((erro) => {
            console.log(erro)
        })
}

export const Leaders = () => {
    lideres.innerHTML = `
    <div class="container">
        <div class="card">
            <h1 class="title">Líderes</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Departamento</th>
                        <th>E-mail</th>
                        <th></th>
                        <th><a href="#add-leaders"><button class="btn btn-primary">Adicionar</button></a></th>
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
    return lideres
}

function getLeadersForPage(page, leadersPerPage) {
    const startIndex = (page - 1) * leadersPerPage
    const endIndex = startIndex + leadersPerPage
    return allLeaders.slice(startIndex, endIndex)
}

function displayLeaders() {
    const tableBody = document.getElementById('table-body')
    const leadersForPage = getLeadersForPage(currentPage, leadersPerPage)
    tableBody.innerHTML = ''  // Limpa o conteúdo anterior antes de adicionar novos líderes
    leadersForPage.forEach(leader => {
        const cardLider = CardLider(leader)
        tableBody.appendChild(cardLider)
    })
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--
        displayLeaders()
    }
}

function nextPage() {
    if (hasMorePages(currentPage, leadersPerPage)) {
        currentPage++
        displayLeaders()
    }
}

function hasMorePages(currentPage, leadersPerPage) {
    const totalLeaders = allLeaders.length
    const totalPages = Math.ceil(totalLeaders / leadersPerPage)
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

function filtrarPorAtivo(lista, ativoFiltrado) {
    return lista.filter(leader => leader.ativo === ativoFiltrado)
}



