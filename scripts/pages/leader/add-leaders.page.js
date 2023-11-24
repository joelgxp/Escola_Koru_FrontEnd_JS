import { criarLider } from '../../services/lideres.service.js'

const adicionarLideres = document.createElement('form')
adicionarLideres.setAttribute('id', 'p-adicionar-lider')

const eventos = () => {
  adicionarLideres.addEventListener('submit', (e) => {
    e.preventDefault()

    const fd = new FormData(adicionarLideres)
    const dadosFormulario = Object.fromEntries(fd)

    criarLider(dadosFormulario)
      .then(() => {
        window.alert("Lider criado com sucesso")
        window.location.reload()
      })
      .catch((erro) => {
        console.log(dadosFormulario)
        console.log(erro)
      })
  })
}

export const AddLeaders = () => {

  adicionarLideres.innerHTML = `
  <div class="container">
    <div class="card">    
        <form action="">
        <h1 class="title">Criar ou Editar Líder</h1>
          
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
  return adicionarLideres
}
