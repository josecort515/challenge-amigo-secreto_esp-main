// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const listaAmigos = document.getElementById('listaAmigos'); // Obtiene el elemento de la lista de amigos
const lista = [];
const resultado = document.getElementById('resultado');

function agregarAmigo() {
  let input = document.getElementById('amigo');
  let nombre = input.value;
  // Valida que el nombre no sea una cadena vacía o solo espacios en blanco antes de agregarlo a la lista
  if (nombre !== '' && nombre.trim() !== '') {
    // Agrega el nombre a la lista de nombres
    lista.push(nombre);
    // Crea un nuevo elemento de lista para mostrar el nombre agregado
    let li = document.createElement('li');
    li.textContent = nombre; // Establece el texto del elemento de lista al nombre
    listaAmigos.appendChild(li); // Añade el nuevo elemento de lista a la lista de amigos
    input.value = "";// Limpia el campo de entrada después de agregar el nombre
  } else {
    alert('El nombre debe ser una cadena no vacía.');
  }
}

function sortearAmigo(){
    // Validad que la lista de nombres no esté vacía antes de realizar el sorteo
    if (lista.length === 0) {
        alert('No hay nombres para sortear.');
        resultado.textContent = ''; // Limpia el resultado si no hay nombres
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * lista.length); // Genera un índice aleatorio entre 0 y la longitud de la lista
    let nombreGanador = lista[indiceAleatorio];// Obtiene el nombre del ganador usando el índice aleatorio
    resultado.textContent = `El ganador es: ${nombreGanador}`; // Muestra el nombre del ganador en el resultado
    lista.splice(indiceAleatorio, 1); // Elimina el nombre del ganador de la lista para evitar que se repita en futuros sorteos
    listaAmigos.removeChild(listaAmigos.childNodes[indiceAleatorio]); // Elimina el elemento de la lista de amigos correspondiente al ganador
   
}