import { buscaLider } from "../../services/lideres.service.js";
import { CardLider } from "../../components/card-lider.component.js";

const lideres = document.createElement('div')
lideres.setAttribute('id', 'p-lista-lideres')

const eventos = () => {
    buscaLider()
    .then((data) => {
            if (data) {
                const divListaLideres = lideres.querySelector('table')
                data.forEach(element => {
                    const cardLider = CardLider(element)
                    divListaLideres.appendChild(cardLider)
                });
            } else {
                console.log('Sem dados', data)
            }
            
        })
        .catch((erro) => {
            console.log(erro)
        })
}

export const Leaders = () => {
    lideres.innerHTML = `
        
    <div class="container">
        <div class="card">
            <h1 class="title">Líderes</h1>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Departamento</th>
                    <th>E-mail</th>
                    <th><a href="#add-leaders"><button class="btn btn-primary">Adicionar</button></a></th>
                </tr>        
            </table>

        </div>
    </div>     

    `

    eventos()
    return lideres
}
