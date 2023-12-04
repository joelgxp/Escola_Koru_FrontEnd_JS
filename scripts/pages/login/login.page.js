import { loginService } from '../../services/login.service.js'

const login = document.createElement('form')
login.setAttribute('id', 'p-login')

const eventos = () => {
    login.addEventListener('submit', (e) => {
        e.preventDefault()

        const fd = new FormData(login)
        const dados = Object.fromEntries(fd)
        console.log(dados)

        loginService(dados)
        .then((sucesso) => {
            console.log(sucesso)
        })
        .catch((erro) => {
            console.log(erro)
        })
    })
}

export const Login = () => {
    login.innerHTML = `
    <div class="container">
        <div class="card-login">
            <form action="">
                <h1 class="title">Login</h1>
                
                <label for="email">E-mail</label>
                <input class="email" type="email" id="email" name="email" placeholder="Digite seu e-mail">

                <label for="password">Senha</label>
                <input class="password" type="text" id="password" name="password" placeholder="Digite sua senha">

                <button class="btn btn-primary">Entrar</button>

            </form>

                <a class="forgot-password" href="#forgot">Esqueceu sua senha?</a>
                <a href="#signup"><button class="btn btn-secondary">Cadastrar-se</button></a>
        </div>
    </div>
    `
    eventos()
    return login
}