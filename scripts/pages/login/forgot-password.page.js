

const forgotPassword = document.createElement('div')
forgotPassword.setAttribute('id', 'p-forgot-password')




export const ForgotPassword = () => {

    forgotPassword.innerHTML = `
    <div class="container">
        <div class="card-login">
            <h1 class="title">Esqueceu sua senha?</h1>

            <label for="user">E-mail</label>
            <input class="user" type="text" id="user" placeholder="Digite seu e-mail">

            <button class="btn btn-primary">Recuperar senha</button>

            <a href="#login"><button class="btn btn-secondary">VOLTAR</button></a>
        </div>
    </div>
`

    return forgotPassword
}