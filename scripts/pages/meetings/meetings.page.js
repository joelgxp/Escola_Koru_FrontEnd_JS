import { getMeetings } from '../../services/meeting.service.js'
import { CardMeetings } from '../../components/card-meeting.component.js'

const meetings = document.createElement('div')
meetings.setAttribute('id', 'p-meetings')

const eventos = () => {
    getMeetings()
        .then((data) => {
            if (data) {
                const divListaReunioes = meetings.querySelector('table')
                data.forEach(element => {
                    const cardReuniao = CardMeetings(element)
                    divListaReunioes.appendChild(cardReuniao)
                })
            } else {
                console.log('Sem dados', data)
            }
        
        })
        .catch((erro) => {
            console.log(erro)
        })
}

export const Meetings = () => {
    meetings.innerHTML = `
    
    <div class="container">
        <div class="card">
            <h1 class="title">Reuniões Agendadas</h1>

            <table>
                <tr>
                    <th>ID</th>
                    <th>Líder</th>
                    <th>Colaborador</th>
                    <th>Data</th>
                    <th><a href="#add-meetings"><button class="btn btn-primary">Adicionar</button></a></th>
                </tr>
            </table>

        </div>
    </div>

    `
    eventos()
    return meetings
}