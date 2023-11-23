
const editarLider = document.createElement('div')
editarLider.setAttribute('id', 'p-editar-lider')



export const EditarLider = () => {
    editarLider.innerHTML = `
        <div>
            <h1>Título</h1>
            <p>Seu parágrafo aqui.</p>
        </div>
    `;
    return editarLider;
}

const eventos = () => {
// Adicione este código no seu arquivo JavaScript
function editarLider(id, nome, departamento) {
    // Preencha os campos do modal com os dados atuais do líder
    document.getElementById('novoNome').value = nome;
    document.getElementById('novoDepartamento').value = departamento;
    // Adicione outros campos conforme necessário

    // Abra o modal
    var editarLiderModal = new bootstrap.Modal(document.getElementById('editarLiderModal'));
    editarLiderModal.show();
}

function salvarEdicaoLider() {
    // Obtenha os novos dados do formulário
    const novoNome = document.getElementById('novoNome').value;
    const novoDepartamento = document.getElementById('novoDepartamento').value;
    // Obtenha outros campos conforme necessário

    // Execute a lógica de atualização do líder aqui (usando fetch, por exemplo)

    // Feche o modal após salvar as alterações
    var editarLiderModal = new bootstrap.Modal(document.getElementById('editarLiderModal'));
    editarLiderModal.hide();
}    
}


eventos()
