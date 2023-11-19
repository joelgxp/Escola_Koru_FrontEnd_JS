import { deleteLider } from '../services/lideres.service.js'
const cardLider = document.createElement('div')
cardLider.classList.add('c-card-lider')

const eventos = (element, clonedCardContact) => {
    const [clonedAnchorDelete] = clonedCardContact.querySelectorAll('button')

    clonedAnchorDelete.addEventListener('click', (e) => {
        e.preventDefault()
        const confirm = window.confirm(`Deseja deletar o contato ${element.nome}?`)

        if (confirm) {
            deleteLider(element.id)
                .then(() => {
                    clonedCardContact.remove()
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
    
        <div class="container">
            ${data.id}
            ${data.nome}
            ${data.departamento}            
            <button class="btn btn-danger">Deletar</button>            
        </div>
    
    `

    /* 
    Quando você retorna cardContact.cloneNode(true), você está criando uma cópia do 
    elemento cardContact com todos os seus filhos e atributos. Isso significa que a 
    cópia não terá nenhum evento de clique anexado ao elemento "a" dentro dela.
    */
    const clonedCardContact = cardLider.cloneNode(true)
    // Capturando todos elementos "a" para poder adicionar o evento de click a cópia do cardContact

    eventos(data, clonedCardContact)
    return clonedCardContact
}