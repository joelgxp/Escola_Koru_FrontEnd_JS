const urlBase = `http://localhost:5000/`

export const buscaLider = async () => {
  const url = urlBase + 'lideres';

  try {
    const resposta = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return await resposta.json();
  } catch (erro) {
    console.error('Ocorreu um erro na busca de líderes:', erro);
    throw erro;
  }
}

export const getAllLeaders = async (id) => {
  const url = urlBase + `lideres/${id}`
  try {
    const resposta = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return await resposta.json()
  } catch (erro) {
    console.error('Ocorreu um erro na busca de lideres:', erro)
    throw erro
  }
}


export const criarLider = async (dados) => {
  const url = urlBase + 'lideres'

    const resposta = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dados)
    })
    return await resposta.json()
}

export const deleteLider = async (id) => {
  const url = urlBase + `lideres/${id}`;

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
      throw new Error(`Erro ao excluir líder: ${resposta.statusText}`);
    }

    return resposta; // Retorna a resposta diretamente, sem analisar o JSON
  } catch (erro) {
    console.error('Ocorreu um erro ao excluir líder:', erro);
    throw erro; // Propagar o erro para quem chamou essa função, se necessário
  }
}
export const editarLider = async (id, dadosAtualizados) => {
  const url = urlBase + `lideres/${id}`;

  const resposta = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dadosAtualizados)
  });

  if (!resposta.ok) {
    throw new Error(`Erro ao editar líder: ${resposta.statusText}`);
  }

  return resposta.json();
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
