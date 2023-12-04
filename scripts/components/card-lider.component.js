
import { deleteLeader, editarLider } from '../services/leaders.service.js'

const cardLider = document.createElement('tr')
cardLider.classList.add('c-card-lider')

const eventos = (element, clonedCard) => {
    const [clonedAnchorDelete] = clonedCard.getElementsByClassName('btn btn-danger')

    clonedAnchorDelete.addEventListener('click', (e) => {
        e.preventDefault()
        const confirm = window.confirm(`Deseja deletar o contato ${element.nome}?`)

        if (confirm) {
            const dados = {ativo: 0}
            deleteLeader(element.id, dados)
                .then(() => {
                    window.alert("Líder deletado com sucesso.")
                    window.location.reload()
                })
                .catch((erro) => {
                    console.log(erro)
                })
        }
    })

    const [clonedAnchorEdit] = clonedCard.getElementsByClassName('btn btn-secondary')
        
    clonedAnchorEdit.addEventListener('click', (e) => {
        e.preventDefault()

        window.location.href = `?id=${element.id}#edit-leaders`
    })

}

export const CardLider = (data) => {
    cardLider.innerHTML = `

        <td>${data.id}</td>
        <td>${data.nome}</td>
        <td>${data.departamento}</td>
        <td>${data.email}</td>
        <td><button class="btn btn-secondary">Editar</button></td>
        <td><button class="btn btn-danger">Deletar</button></td>
       
    `

    const clonedCard = cardLider.cloneNode(true)

    eventos(data, clonedCard)
    return clonedCard
}