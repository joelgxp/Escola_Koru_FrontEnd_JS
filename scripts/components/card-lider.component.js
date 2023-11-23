import { deleteLider } from '../services/lideres.service.js'

const cardLider = document.createElement('tr')
cardLider.classList.add('c-card-lider')

const eventos = (element, clonedCard) => {
    const [clonedAnchorDelete] = clonedCard.querySelectorAll('button')

    clonedAnchorDelete.addEventListener('click', (e) => {
        e.preventDefault()
        const confirm = window.confirm(`Deseja deletar o contato ${element.nome}?`)

        if (confirm) {
            deleteLider(element.id)
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

export const CardLider = (data) => {
    cardLider.innerHTML = `

                <td>${data.id}</td>
                <td>${data.nome}</td>
                <td>${data.departamento}</td>
                <td>${data.email}</td>
                <td><button class="btn btn-secondary">Deletar</button></td>
       
    `

    const clonedCard = cardLider.cloneNode(true)

    eventos(data, clonedCard)
    return clonedCard
}