import { buscaLider } from "../services/lideres.service.js";
import { CardLider } from "../components/card-lider.component.js";

const lideres = document.createElement('div')
lideres.setAttribute('id', 'p-lista-lideres')

const eventos = () => {
    buscaLider()
    .then((data) => {
            if (data) {
                const divListaLideres = lideres.querySelector('#lista-lideres')
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

export const Lideres = () => {
    lideres.innerHTML = `

    <div class="container">
    <a href="#add-lideres"><button class="btn btn-success">Cadastrar Lider</button></a>
    <h2>Lideres</h2>
    </div>
    <div id="lista-lideres">

    `

    eventos()
    return lideres
}
