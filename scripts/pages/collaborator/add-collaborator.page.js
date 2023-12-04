import { postCollaborator } from '../../services/collaborators.service.js'

const addCollaborator = document.createElement('form')
addCollaborator.setAttribute('id', 'p-add-collaborator')

const eventos = () => {
    addCollaborator.addEventListener('submit', (e) => {
        e.preventDefault()
    
        const fd = new FormData(addCollaborator)
        const dadosFormulario = Object.fromEntries(fd)

        postCollaborator(dadosFormulario)
            .then(() => {
                window.alert("Colaborador criado com sucesso")
                window.location.href = '/#collaborators'
            })
            .catch((erro) => {
                console.log(dadosFormulario)
                console.log(erro)
            })
    })
}

export const AddCollaborator = () => {

    addCollaborator.innerHTML = `
    <div class="container">
        <div class="card-collaborator">    
            <form action="">
                <h1 class="title">Criar Colaborador</h1>
                  
                    <label for="nome" class="form-label">Nome</label>
                    <input class="nome" type="text" id="nome" name="nome" placeholder="Digite o nome">
                  
                    <label for="password" class="form-label">Senha</label>
                    <input class="password" type="text" id="password" name="password" placeholder="Digite sua senha">
                  
                    <label for="departamento">Departamento</label>
                    <input class="departamento" type="text" id="departamento" name="departamento" placeholder="Digite o departamento">

                    <label for="email">E-mail</label>
                    <input class="email" type="text" id="email" name="email" placeholder="Digite o e-mail">

            </form>
            <div class="buttons">
                <button class="btn btn-primary">Cadastrar</button>
            </div>
        </div>
    </div>
    `

    eventos()
    return addCollaborator
}