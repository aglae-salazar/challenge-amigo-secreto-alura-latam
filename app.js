let listaAmigos = [];
let numeroMaximoAmigos = 5;

/* Funcion que agrega un amigo a la lista */
function agregarAmigo() {
  if (document.querySelector("#amigo").value !== "") {
    if (listaAmigos.length < numeroMaximoAmigos) {
      let amigo = document.getElementById("amigo").value;
      listaAmigos.push(amigo);
      console.log(listaAmigos);
    } else {
      alert(`No se pueden agregar más de ${numeroMaximoAmigos} amigos`);
    }
  } else {
    alert("Por favor, ingrese un nombre");
  }
  limparCaja();
}

/* Funcion que sortea un amigo de la lista */
function sortearAmigo() {
  if (listaAmigos.length === 0) {
    alert("No hay amigos en la lista");
    return;
  } else {
    if (listaAmigos.length < 2) {
      alert("Debe haber al menos 2 amigos en la lista");
      return;
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
  asignarTextoElemento(
    "h2",
    `Digite el nombre de ${numeroMaximoAmigos} ${numeroMaximoAmigos == 1 ? "amigo" : "amigos"}`
  );
  limparCaja();
}

condicionesIniciales();
