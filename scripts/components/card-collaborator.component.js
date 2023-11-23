import { deleteCollaborator } from '../services/collaborators.service.js'

const cardCollaborator = document.createElement('tr')
cardCollaborator.classList.add('c-card-collaborator')

const eventos = (element, clonedCard) => {
    const [clonedAnchorDelete] = clonedCard.querySelectorAll('button')

    clonedAnchorDelete.addEventListener('click', (e) => {
        e.preventDefault()
        const confirm = window.confirm(`Deseja deletar o contato ${element.nome}?`)

        if (confirm) {
            deleteCollaborator(element.id)
                .then(() => {
                    clonedCard.remove()
                    window.location.reload()
                })
                .catch((erro) => {
                    console.log(erro)
                })
        }
    }) 

}

export const CardCollaborator = (data) => {
    cardCollaborator.innerHTML = `

                <td>${data.id}</td>
                <td>${data.nome}</td>
                <td>${data.departamento}</td>
                <td>${data.email}</td>
                <td><button class="btn btn-secondary">Deletar</button></td>
       
    `

    const clonedCard = cardCollaborator.cloneNode(true)

    eventos(data, clonedCard)
    return clonedCard
}