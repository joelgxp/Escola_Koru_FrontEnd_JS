import { createLeader } from '../../services/leaders.service.js'

const addLeaders = document.createElement('form')
addLeaders.setAttribute('id', 'p-adicionar-lider')

const eventos = () => {
  addLeaders.addEventListener('submit', (e) => {
    e.preventDefault()

    const fd = new FormData(addLeaders)
    const dadosFormulario = Object.fromEntries(fd)

    createLeader(dadosFormulario)
      .then(() => {
        window.alert("Lider criado com sucesso")
        window.location.href = '/#leaders'
      })
      .catch((erro) => {
        console.log(dadosFormulario)
        console.log(erro)
      })
  })
}

export const AddLeaders = () => {

  addLeaders.innerHTML = `
  <div class="container">
    <div class="card-leader">    
        <form action="">
        <h1 class="title">Criar Líder</h1>
          
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
  return addLeaders
}
