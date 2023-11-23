const header = document.createElement("header");
header.setAttribute("id", "c-header");

export const Header = () => {
  header.innerHTML = `
  <nav class="topnav">
  <ul>
      <li><a href="#login">Login</a></li>
      <li><a href="#leaders">Líderes</a></li>
      <li><a href="#collaborators">Colaboradores</a></li>
      <li><a href="#meetings">Reuniões</a></li>
  </ul>
</nav>
    `;
  return header;
};
