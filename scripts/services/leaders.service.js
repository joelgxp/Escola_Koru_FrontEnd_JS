const urlBase = `http://localhost:5000/`

export const getLeaders = async () => {
  const url = urlBase + 'lideres'

  try {
    const resposta = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return await resposta.json()
  } catch (erro) {
    console.error('Ocorreu um erro na busca de líderes:', erro)
    throw erro
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


export const createLeader = async (dados) => {
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

export const deleteLeader = async (id, dados) => {
  
  const url = urlBase + `lideres/${id}/ativo`
  
    const resposta = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dados)
    })
    console.log(dados)
    if (!resposta.ok) {
      throw new Error(`Erro ao excluir líder: ${resposta.statusText}`)
    }
    return resposta.json()
}
export const editarLider = async (id, dadosAtualizados) => {
  const url = urlBase + `lideres/${id}`

  const resposta = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dadosAtualizados)
  })
  console.log(dadosAtualizados)

  if (!resposta.ok) {
    throw new Error(`Erro ao editar líder: ${resposta.statusText}`)
  }

  return resposta.json()
}







/*
bntCadastrar.addEventListener("click", function (event) {
  event.preventDefault()
  cadastraLider()  
})

btnEditar.addEventListener("click", function (event) {
  event.preventDefault()
  editaLider()
})

bntExcluir.addEventListener("click", function (event) {
  event.preventDefault()
  excluiLider()
})

btnLimpar.addEventListener("click", function (event) {
  event.preventDefault()
  getLeaders()
})
*/
