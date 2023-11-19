import { criarLider } from '../services/lideres.service.js'

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
      })
      .catch((erro) => {
        console.log(dadosFormulario)
        console.log(erro)
      })
  })
}


export const AddLideres = () => {

  adicionarLideres.innerHTML = `
  <div class="container">    
      <form action="" class="row g-1">
        <h1>Líderes</h1>        
        <div class="col-md-4">
          <label for="nome" class="form-label">Nome:</label>
          <input type="text" id="nome" name="nome">
        </div>
        <div class="col-md-4">
          <label for="departamento" class="form-label">Departamento:</label>
          <input type="text" id="departamento" name="departamento">
        </div>
      </form>
    <div id="botoes">
      <button class="btn btn-success">Cadastrar</button>
    </div>
  </div>  
`
  eventos()
  return adicionarLideres
}
