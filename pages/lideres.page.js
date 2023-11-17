import { AuthService } from '../services/lideres.service.js'
const lideres = document.createElement('div')
lideres.setAttribute('id', 'p-lideres')

export const Lideres = () => {
  AuthService()
  lideres.innerHTML = `
  <div class="container">
    <div id="box-cadastro-lider">
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
    </div>

    <div id="botoes">
      <button id="btncadastrar" class="btn btn-success">Cadastrar</button>
      <button id="btnlimpar" class="btn btn-secondary">TESTE</button>
    </div>
  </div>
  
`;
  window.location.hash = '#lideres';
  return lideres;
}
