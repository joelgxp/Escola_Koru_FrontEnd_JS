const colaboradores = document.createElement('div')
colaboradores.setAttribute('id', 'p-colaboradores')

export const Colaboradores = () => {
    colaboradores.innerHTML = `
    <div class="container">
        <div id="box-cadastro-paciente">
            <form action="" class="row g-1">
                <h1 class="">Colaboradores</h1>
                <div class="col-md-12">
                    <label for="id" class="form-label">ID:</label>
                    <input type="number" id="id" class="form-control id" name="id" maxlength="11">
                    <button id="btnconsultar" class="btn btn-dark">Consultar</button>
                </div>
                <div class="col-md-4">
                    <label for="nome" class="form-label">Nome:</label>
                    <input type="text" id="nome" class="form-control nome" name="nome">
                </div>
                <div class="col-md-4">
                    <label for="departamento" class="form-label">Departamento:</label>
                    <input type="text" id="departamento" class="form-control departamento" name="departamento">
                </div>
                <div id="botoes">
                    <button type="button" id="btneditar" class="btn btn-primary">Editar</button>
                    <button type="button" id="btnexcluir" class="btn btn-danger">Excluir</button>
                </div>
            </form>
        </div>

        `;
        window.location.hash = '#colaboradores';
        return colaboradores;
}