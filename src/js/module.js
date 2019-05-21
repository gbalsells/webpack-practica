class Cliente {
  constructor (nombre, email, tecnologia, msje) {
    this._nombre = nombre;
    this._email = email;
    this._tecnologia = tecnologia;
    this._msje = msje;
  }
}


const formulario = document.getElementById("formulario")
const closeButton = document.getElementById('close-modal');
const modal = document.getElementById('modal');


var listadoClientes = localStorage.getItem('clientes')
listadoClientes = JSON.parse(listadoClientes)
if (!listadoClientes) {
  listadoClientes = []
}

function controlCliente(cliente) {
  return (cliente._nombre && cliente._msje && cliente._email && cliente._tecnologia)
}

formulario.addEventListener("submit", function(event) {
  event.preventDefault();
  cliente = new Cliente (formulario.nombre.value, formulario.email.value, formulario.tecnologia.value, formulario.msje.value)
  if (controlCliente(cliente)) {
    toggleModal();
    listadoClientes.push(cliente)
    formulario.reset();
    localStorage.setItem('clientes', JSON.stringify(listadoClientes));
  } else {
    alert('No puede dejar campos vacíos')
  }  
});

closeButton.addEventListener('click', toggleModal);

function toggleModal(){
  modal.classList.toggle('hidden');
}
