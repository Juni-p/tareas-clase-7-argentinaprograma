const $form = document.formulario;

const nombre = $form.nombre.value;
const ciudad = $form.ciudad.value;
const descripcion = $form["descripcion-regalo"].value;

function validarNombre(nombre) {
  if (nombre.length === 0) {
    return "Este campo debe tener al menos 1 caracter";
  }
  if (nombre.length >= 50) {
    return "Este campo debe tener menos de 50 caracteres";
  }
}

function validadCiudad(ciudad) {
  if (ciudad.length === 0) {
    return "Este campo debe tener una ciudad seleccionada";
  }
}

function validarDescripcion(descripcion) {
  if (descripcion.length === 0) {
    return "Este campo debe tener al menos 1 caracter";
  }
  if (descripcion.length >= 100) {
    return "Este campo debe tener menos de 100 caracteres";
  }
}
