//const root = document.querySelector('#root')
const lideres = document.createElement('div')
lideres.setAttribute('id', 'p-lideres')

export const Lideres = () => {
  lideres.innerHTML = `
  <div class="container">
    <div id="box-cadastro-lider">
      <form action="" class="row g-1">
        <h1>Líderes</h1>        
        <div class="col-md-4">
          <label for="nome" class="form-label">Nome:</label>
          <input type="text" id="nome" class="form-control nome" name="nome">
        </div>
        <div class="col-md-4">
          <label for="departamento" class="form-label">Departamento:</label>
          <input type="text" id="departamento" class="form-control departamento" name="departamento">
        </div>
        <div id="botoes">
          <button id="btncadastrar" class="btn btn-success">Cadastrar</button>
          <button id="btnlimpar" class="btn btn-secondary">Limpar</button>
        </div>
      </form>
    </div>

    <card class="card"></card>
      <div id="box-lista-lideres">
        <div id="lista-lideres"></div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nome</th>
              <th scope="col">Departamento</th>
            </tr>
          </thead>
          <tbody>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td><button type="button" id="btneditar" class="btn btn-primary">Editar</button></td>
            <td><button type="button" id="btnexcluir" class="btn btn-danger">Excluir</button></td>
          </tbody>
        </table>
      </div>
    </card>
  </div>
    
`;
  window.location.hash = '#lideres';
  return lideres;
}