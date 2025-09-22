let arrayAmigos = [];
let numeroMaximoAmigos = 5;
let contadorAmigos = 5;
let amigoSorteado = 0;
let nombreValido = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,}$/;

/* Funcion que agrega un amigo a la lista */
function agregarAmigo() {
  /* Obtener el valor del input */
  let amigo = document.getElementById("amigo").value;
  let listaAmigos = document.getElementById("listaAmigos");
  let li = document.createElement("li");

  /* Asignar el texto al nuevo elemento */
  if (document.querySelector("#amigo").value !== "") {
    if (!nombreValido.test(amigo)) {
      alert("Por favor, ingrese un nombre válido (solo letras y espacios, mínimo 2 caracteres)");
      limparCaja();
      return;
    }
    arrayAmigos.push(amigo);
    li.textContent = amigo;
    listaAmigos.appendChild(li);
    contadorAmigos--;
    asignarTextoElemento(
      "h2",
      `Digite el nombre de ${contadorAmigos} ${contadorAmigos == 1 ? "amigo" : "amigos"}`
    );
  } else {
    alert("Por favor, ingrese un nombre");
  }
  limparCaja();
  /* Deshabilitar el input y el boton si se alcanza el maximo de amigos */
  if (arrayAmigos.length >= numeroMaximoAmigos) {
    document.getElementById("amigo").setAttribute("disabled", true);
    document.getElementById("anadir").setAttribute("disabled", true);
    asignarTextoElemento("h2", "Lista completa");
  }
}

/* Funcion que sortea un amigo de la lista */
function sortearAmigo() {
  if (arrayAmigos.length === 0) {
    alert("No hay amigos en la lista");
    return;
  } else {
    if (arrayAmigos.length < 5) {
      alert("Debe agregar 5 amigos para poder sortear");
      return;
    } else {
      let indiceAleatorio = Math.floor(Math.random() * arrayAmigos.length);
      let amigoSorteado = arrayAmigos[indiceAleatorio];
      let resultado = document.getElementById("resultado");
      let li = document.createElement("li");
      li.textContent = `Tu amigo secreto es: ${amigoSorteado}`;
      resultado.appendChild(li);
      document.getElementById("sortear").setAttribute("disabled", true);
    }
  }
}

/* Funcion que asigna un texto a un elemento HTML */
function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

/* Funcion que limpia el campo de texto */
function limparCaja() {
  document.querySelector("#amigo").value = "";
}

/* Funcion que establece las condiciones iniciales */
function condicionesIniciales() {
  asignarTextoElemento("h2", "Digite el nombre de 5 amigos");
  limparCaja();
}

condicionesIniciales();
