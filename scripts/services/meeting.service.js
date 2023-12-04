const urlBase = `http://localhost:5000/`

export const getMeetings = async () => {
  const url = urlBase + 'reunioes'

  try {
    const resposta = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    
    return await resposta.json()
  } catch (erro) {
    console.error('Ocorreu um erro na busca de reunioes:', erro)
    throw erro // Propagar o erro para quem chamou essa função, se necessário
  }
}


export const postMeetings = async (dados) => {
  const url = urlBase + 'reunioes'

    const resposta = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dados)
    })
    return await resposta.json()
}

export const deleteMeetings = async (id) => {
  const url = urlBase + `reunioes/${id}`

  try {
    const resposta = await fetch(url, {
      method: 'DELETE',
      body: JSON.stringify({ id }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    // Verifica se a exclusão foi bem-sucedida (status 200 OK)
    if (!resposta.ok) {
      throw new Error(`Erro ao excluir colaborador: ${resposta.statusText}`)
    }

    return resposta // Retorna a resposta diretamente, sem analisar o JSON
  } catch (erro) {
    console.error('Ocorreu um erro ao excluir colaborador:', erro)
    throw erro // Propagar o erro para quem chamou essa função, se necessário
  }
}