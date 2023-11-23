
const signup = document.createElement('form')
signup.setAttribute('id', 'p-signup')

const eventos = () => {
    signup.addEventListener('submit', (e) => {
        e.preventDefault()

    })
}

export const Signup = () => {
    signup.innerHTML = `
    <label for="nome">Nome</label>
    <input type="text" name="nome" required>
    
    <label for="email">E-mail</label>
    <input type="email" name="email" required>
    
    <label for="senha">Senha</label>
    <input type="password" name="senha" required>

        <button type="submit">Cadastrar</button>

        <br>
        <p>Já possui conta?<a href="/#login"> Entre aqui!</a></p>
        <br>
    `
    eventos()
    return signup
}