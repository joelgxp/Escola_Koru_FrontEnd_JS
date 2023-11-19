import { deleteLider } from '../services/lideres.service.js'
const cardLider = document.createElement('div')
cardLider.classList.add('c-card-lider')

const eventos = (element, clonedCardContact) => {
    const [clonedAnchorDelete] = clonedCardContact.querySelectorAll('a')

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
    <section id="section">
        <div id="div-card-contact-nome">
            ${data.nome}
            <div id="div-card-contact-links">
            <a href="/#contacts">Deletar</a>
            <a href="/?id-contact=${data.id}#contact-details">Visualizar</a>
            </div>
        </div>
    </section>
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