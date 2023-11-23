const urlBase = `http://localhost:5000/`

export const getCollaborators = async () => {
  const url = urlBase + 'colaboradores';

  try {
    const resposta = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return await resposta.json();
  } catch (erro) {
    console.error('Ocorreu um erro na busca de colaboradores:', erro);
    throw erro; // Propagar o erro para quem chamou essa função, se necessário
  }
};


export const addCollaborator = async (dados) => {
  const url = urlBase + 'colaboradores'

    const resposta = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dados)
    })
    return await resposta.json()
}

export const deleteCollaborator = async (id) => {
  const url = urlBase + `colaboradores/${id}`;

  try {
    const resposta = await fetch(url, {
      method: 'DELETE',
      body: JSON.stringify({ id }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // Verifica se a exclusão foi bem-sucedida (status 200 OK)
    if (!resposta.ok) {
      throw new Error(`Erro ao excluir colaborador: ${resposta.statusText}`);
    }

    return resposta; // Retorna a resposta diretamente, sem analisar o JSON
  } catch (erro) {
    console.error('Ocorreu um erro ao excluir colaborador:', erro);
    throw erro; // Propagar o erro para quem chamou essa função, se necessário
  }
};






/*
bntCadastrar.addEventListener("click", function (event) {
  event.preventDefault();
  cadastraLider();  
});

btnEditar.addEventListener("click", function (event) {
  event.preventDefault();
  editaLider();
});

bntExcluir.addEventListener("click", function (event) {
  event.preventDefault();
  excluiLider();
});

btnLimpar.addEventListener("click", function (event) {
  event.preventDefault();
  buscaLider();
})
*/
