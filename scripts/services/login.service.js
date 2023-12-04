
const urlBase = `http://localhost:5000/`

export const loginService = async (dados) => {
    const url = urlBase + 'lideres'

    const resposta = await fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    return await resposta.json()

}