const notFound = document.createElement('div')
notFound.setAttribute('id', 'p-not-found')

export const NotFound = () => {
    notFound.innerHTML = `
    <div class="container">
        <h1>Página não encontrada :(</h1>
        
    </div>
    `
    window.location.hash = '#404'
    return notFound
}