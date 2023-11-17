const reunioes = document.createElement('div')
reunioes.setAttribute('id', 'p-reunioes')

export const Reunioes = () => {
    reunioes.innerHTML = `
    
    <div class="container">
        <h1>Reuniões</h1>
    </div>

    `;
    window.location.hash = '#reunioes';
    return reunioes;
}