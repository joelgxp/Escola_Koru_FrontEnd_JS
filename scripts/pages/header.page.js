const header = document.createElement("header");
header.setAttribute("id", "c-header");

export const Header = () => {
  header.innerHTML = `
<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
<div class="container-fluid">
<a class="navbar-brand" href="#">FeedBack</a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarCollapse">
  <ul class="navbar-nav me-auto mb-2 mb-md-0">
    <li class="nav-item">
            <a class="nav-link" href="#lideres">Líder</a>
    </li>
    <li class="nav-item">
            <a class="nav-link" href="#colaboradores">Colaboradores</a>
    </li>
    <li class="nav-item">
            <a class="nav-link" href="#reunioes">Reuniões</a>
    </li>
  
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
      aria-expanded="false">
          Configurações
      </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">teste</a></li>
          <li><a class="dropdown-item" href="#">teste2</a></li>
        </ul>
      </li>
  </ul>
</div>
</div>
</nav>
    `;
  return header;
};
