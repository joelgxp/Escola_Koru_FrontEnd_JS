const login = document.createElement('div')
login.setAttribute('id', 'p-login')

const eventos = () => {
    login.addEventListener('submit', (e) => {
        e.preventDefault()

    })
}

export const Login = () => {
    login.innerHTML = `
    <div class="container">
        <div class="card">
            <h1 class="title">Login</h1>

            <label for="user">Usuário</label>
            <input class="user" type="text" id="user" placeholder="Digite seu usuário">

            <label for="password">Senha</label>
            <input class="password" type="text" id="password" placeholder="Digite sua senha">

            <a class="forgot-password" href="/forgot-password.html">Esqueceu sua senha?</a>

            <button class="btn btn-primary">Entrar</button>

            <button class="btn btn-secondary">Cadastrar-se</button>
        </div>
    </div>
    `
    eventos()
    return login
}