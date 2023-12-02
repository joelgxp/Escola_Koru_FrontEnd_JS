import { createLeader } from '../../services/leaders.service.js'

const signup = document.createElement('form')
signup.setAttribute('id', 'p-signup')

const eventos = () => {
    signup.addEventListener('submit', (e) => {
        e.preventDefault()

        const fd = new FormData(signup)
        const dadosFormulario = Object.fromEntries(fd)

        createLeader(dadosFormulario)
            .then(() => {
                window.alert("Usuario criado com sucesso")
                window.location.href = '/#login'
            })
            .catch((erro) => {
                console.log(erro)
            })
    })
}

export const Signup = () => {
    signup.innerHTML = `
    <div class="container">
        <div class="card-login">    
            <form action="">
            <h1 class="title">Criar Líder</h1>
            
                <label for="nome" class="form-label">Nome</label>
                <input class="nome" type="text" id="nome" name="nome" placeholder="Digite o nome">
            
            
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
    return signup
}