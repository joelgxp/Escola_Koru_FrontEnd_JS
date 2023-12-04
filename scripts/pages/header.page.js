const header = document.createElement("header")
header.setAttribute("id", "p-header")

const eventos = () => {
  const sair = header.querySelector('a')

  sair.addEventListener('click', (e) => {
      e.preventDefault()
      sessionStorage.removeItem('@token')
      sessionStorage.removeItem('@user')
      window.location.href = '/#login'
      window.location.reload()
  })
}

export const Header = () => {
  const usuario = JSON.parse(sessionStorage.getItem('@user'))

  header.innerHTML = `
  <nav class="topnav">
  <ul>
      <li><a href="#login">Login</a></li>
      <li><a href="#leaders">Líderes</a></li>
      <li><a href="#collaborators">Colaboradores</a></li>
      <li><a href="#meetings">Reuniões</a></li>
      <li id="logout"><a href="#login">Sair</a></li>
  </ul>
</nav>
    `
  return header
}
