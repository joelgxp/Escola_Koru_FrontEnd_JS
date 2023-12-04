import { getAllLeaders, editarLider } from "../../services/leaders.service.js"

const editLeader = document.createElement('div')
editLeader.setAttribute('id', 'p-editar-lider')

const eventos = () => {
    const url = new URL(window.location.href)
    const params = url.searchParams
    const idLider = params.get('id')

    getAllLeaders(idLider)
        .then((data) => {

            editLeader.innerHTML = `
                <div class="container">
                    <div class="card-leader">
                        <form id="editForm">
                            <h1 class="title">Editar Líder</h1>

                            <label for="nome" class="form-label">Nome</label>
                            <input class="nome" type="text" id="nome" name="nome" value="${data.nome || ''}">

                            <label for="departamento">Departamento</label>
                            <input class="departamento" type="text" id="departamento" name="departamento" value="${data.departamento || ''}">

                            <label for="email">E-mail</label>
                            <input class="email" type="email" id="email" name="email" value="${data.email || ''}">

                            <div class="buttons">
                                <button type="button" class="btn btn-primary" id="editarBtn">Editar</button>
                            </div>
                        </form>
                    </div>
                </div>
            `

            const editForm = editLeader.querySelector('#editForm')
            const editarBtn = editLeader.querySelector('#editarBtn')

            editarBtn.addEventListener('click', () => {
                const formData = new FormData(editForm)
                const dadosFormulario = Object.fromEntries(formData)

                editarLider(idLider, dadosFormulario)
                    .then(() => {
                        window.alert("Líder editado com sucesso")
                        window.location.href = '/#leaders'
                    })
                    .catch((erro) => {
                        console.log(erro)
                    })
            })
        })
        .catch((erro) => {
            console.log(erro)
        })
}

export const EditLeaders = () => {
    eventos()
    return editLeader
}

