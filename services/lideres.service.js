const btnEditar = document.querySelector("#btneditar");
const bntExcluir = document.querySelector("#btnexcluir");
const bntCadastrar = document.querySelector("#btncadastrar");
const btnLimpar = document.querySelector("#btnlimpar");

const formulario = document.getElementById("formLider");

const inome = document.querySelector(".nome");
const idepartamento = document.querySelector(".departamento");
let liderResultado = null

export function buscaLider() {
  const url = `http://localhost:5000/lideres`
  let response = fetch(url)
      .then(response => response.json())
      .then(data => {
          console.log(data)
      })
  console.log(response)
}

export const AuthService = async (dados) => {
    
  const resposta = await fetch(urlBase + 'auth', {
      headers,
      method: 'POST',
      body: JSON.stringify(dados)
  })

  return await resposta.json()
}

function excluiLider() {
  fetch(`http://127.0.0.1:5000/lideres/${liderResultado.id}`, {
    method: "DELETE",
  })
    .then(response => {
      console.log(response)
    })
    .catch(function (error) {
      console.error("Ocorreu um erro:", error);
    });
  limpaFormulario()
}

function editaLider() {
  console.log(liderResultado)
  const ide = liderResultado.id
  liderResultado = capturarValoresFormulario()
  console.log(liderResultado)
  liderResultado.id = ide
  console.log(liderResultado)

  fetch(`http://localhost:8080/pacientes`, {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(liderResultado),
  })
    .then(function (res) {
      if (res.ok) {
      }
    })
    .catch(function (res) {
      console.log(res);
    });
}

async function cadastraLider() {
  const url = "http://127.0.0.1:5000/lideres";
  
  // Dados que você deseja enviar no corpo da solicitação POST
  const data = {
    nome: "Exemplo",
    departamento: "exemplo"
    // Adicione outros campos conforme necessário
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Adicione outros cabeçalhos conforme necessário
      },
      body: JSON.stringify(data),
    });

    // Verifica se a resposta da API foi bem-sucedida (código de status 2xx)
    if (!response.ok) {
      throw new Error(`Erro na solicitação: ${response.status}`);
    }

    // Converte a resposta para JSON
    const responseData = await response.json();
    
    // Faça algo com os dados da resposta, se necessário
    console.log("Resposta da API:", responseData);

    // Adicione aqui qualquer código adicional que você deseja executar após a conclusão bem-sucedida da solicitação
  } catch (error) {
    // Manipula erros que possam ocorrer durante a solicitação
    console.error("Erro na solicitação:", error.message);
  }
}


function capturarValoresFormulario() {
  const inputs = formulario.elements;
  const valores = {};
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    if (input.name) {
      valores[input.name] = input.value;
    }
  }

  return valores;
}

bntCadastrar.addEventListener("click", function (event) {
  event.preventDefault();
  cadastraLider();  
});

btnEditar.addEventListener("click", function (event) {
  event.preventDefault();
  editaLider();
});

bntExcluir.addEventListener("click", function (event) {
  event.preventDefault();
  excluiLider();
});

btnLimpar.addEventListener("click", function (event) {
  event.preventDefault();
  buscaLider();
})

