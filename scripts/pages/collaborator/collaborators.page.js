import { getCollaborators } from '../../services/collaborators.service.js'
import { CardCollaborator } from '../../components/card-collaborator.component.js'

const collaborators = document.createElement('div')
collaborators.setAttribute('id', 'p-list-colaboradores')

const eventos = () => {
    getCollaborators()
    .then((data) => {
            if (data) {
                const divListaColaboradores = collaborators.querySelector('table')
                data.forEach(element => {
                    const card = CardCollaborator(element)
                    divListaColaboradores.appendChild(card)
                });
            } else {
                console.log('Sem dados', data)
            }
            
        })
        .catch((erro) => {
            console.log(erro)
        })
}

export const Collaborators = () => {
    collaborators.innerHTML = `
    <div class="container">
        <div class="card">
            <h1 class="title">Colaboradores</h1>

            <table>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Departamento</th>
                    <th>E-mail</th>
                    <th><a href="#add-collaborator"><button class="btn btn-primary">Adicionar</button></a></th>
                </tr>
            </table>

        </div>
    </div>

    `
    eventos()
    return collaborators;
}