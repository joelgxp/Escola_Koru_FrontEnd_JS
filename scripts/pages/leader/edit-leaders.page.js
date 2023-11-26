import { buscaLider } from "../../services/lideres.service.js";

const editLeader = document.createElement('div')
editLeader.setAttribute('id', 'p-editar-lider')

const eventos = () => {
    const url = new URL(window.location.href)
    const params = url.searchParams
    const idLider = params.get('id')

    buscaLider(idLider)
        .then(( data ) => {
            console.log(data)

            editLeader.innerHTML = `
                <div class="container">
                    <div class="card-leader">
                        <h1 class="title">Editar Líder  ${data[idLider].nome}</h1>

                        <label for="nome" class="form-label">Nome</label>
                        <input class="nome" type="text" id="nome" name="nome" placeholder="Digite o nome">

                        <label for="departamento">Departamento</label>
                        <input class="departamento" type="text" id="departamento" name="departamento" placeholder="Digite o departamento">

                        <label for="email">E-mail</label>
                        <input class="email" type="email" id="email" name="email" placeholder="Digite o e-mail">

                        <div class="buttons">
                            <button class="btn btn-primary">Cadastrar</button>
                        </div>
                    </div>
                </div>

                    `
        })
        .catch((erro) => {
            console.log(erro)
        })
}

export const EditLeaders = () => {
    editLeader.innerHTML = `
    <div class="container">
    <div class="card-leader">    
        <form action="">
        <h1 class="title">Editar Líder</h1>
          
            <label for="nome" class="form-label">Nome</label>
            <input class="nome" type="text" id="nome" name="nome" placeholder="Digite o nome">
          
          
            <label for="departamento">Departamento</label>
            <input class="departamento" type="text" id="departamento" name="departamento" placeholder="Digite o departamento">

            <label for="email">E-mail</label>
            <input class="email" type="email" id="email" name="email" placeholder="Digite o e-mail">
          
        </form>
        <div class="buttons">
          <button class="btn btn-primary">Cadastrar</button>
        </div>
    </div>  
  </div>
`
    eventos()
    return editLeader;
}

