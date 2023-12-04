import { postMeetings } from '../../services/meeting.service.js'
import { getLeaders } from '../../services/leaders.service.js'
import { getCollaborators } from '../../services/collaborators.service.js'


const addMeetings = document.createElement('form')
addMeetings.setAttribute('id', 'p-add-meetings')

const eventos = () => {
    addMeetings.addEventListener('submit', (e) => {
        e.preventDefault()

        const fd = new FormData(addMeetings)
        
        const selectLider = document.getElementById('id_lider')
        const selectedValue = selectLider.options[selectLider.selectedIndex].value

        const selectColaborador = document.getElementById('id_colaborador')
        const selectedValue2 = selectColaborador.options[selectColaborador.selectedIndex].value

        fd.append('id_lider', selectedValue)
        fd.append('id_colaborador', selectedValue2)

        console.log(Object.fromEntries(fd))

        postMeetings(Object.fromEntries(fd))
            .then(() => {
                window.alert("Reunião criada com sucesso")
                window.location.reload()
            })
            .catch((erro) => {
                console.log(erro)
            })
    })

    getLeaders()
    .then((data) => {
        if (data) {
            const selectLider = document.getElementById('id_lider')
            data.forEach(element => {
                const option = document.createElement('option')
                option.setAttribute('value', element.id)
                option.textContent = element.nome
                selectLider.appendChild(option)
            })
        } else {
            console.log('Sem dados', data)
        }
    })

    getCollaborators()
    .then((data) => {
        if (data) {
            const selectColaborador = document.getElementById('id_colaborador')
            data.forEach(element => {
                const option = document.createElement('option')
                option.setAttribute('value', element.id)
                option.textContent = element.nome
                selectColaborador.appendChild(option)
            })
        } else {
            console.log('Sem dados', data)
        }
    })

}

export const AddMeetings = () => {    
    addMeetings.innerHTML = `
    <div class="container">
        <div class="card-meeting">    
            <form action="">
            <h1 class="title">Criar ou Editar Reunião</h1>
            
                <label for="lider" class="form-label">Líder</label>
                <select class="lider" id="id_lider"></select>
            
            
                <label for="colaborador">Colaborador</label>
                <select class="lider" id="id_colaborador"></select>

                <label for="data">Data</label>
                <input class="data" type="date" id="data" name="data_reuniao" placeholder="Digite a data">
            
            </form>
            <div class="buttons">
            <button class="btn btn-primary">Agendar</button>
            </div>
        </div>  
    </div>

    `
    eventos()
    return addMeetings
}