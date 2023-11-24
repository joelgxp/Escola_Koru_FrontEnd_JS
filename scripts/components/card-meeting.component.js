import { deleteMeetings } from '../services/meeting.service.js'

const cardMeetings = document.createElement('tr')
cardMeetings.classList.add('c-card-meetings')

const eventos = (element, clonedCard) => {
    const [clonedAnchorDelete] = clonedCard.querySelectorAll('button')

    clonedAnchorDelete.addEventListener('click', (e) => {
        e.preventDefault()
        const confirm = window.confirm(`Deseja deletar o contato ${element.nome}?`)

        if (confirm) {
            deleteMeetings(element.id)
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

export const CardMeetings = (data) => {
    cardMeetings.innerHTML = `
        
        <td>${data.id}</td>
        <td>${data.lider.nome}</td>
        <td>${data.colaborador.nome}</td>
        <td>${data.data}</td>
        <td><button class="btn btn-secondary">Deletar</button></td>
       
    `

    const clonedCard = cardMeetings.cloneNode(true)

    eventos(data, clonedCard)
    return clonedCard
}