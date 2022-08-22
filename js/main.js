function validarNombre(nombre) {
  if (nombre.length === 0) {
    return "Este campo debe tener al menos 1 caracter";
  }
  if (nombre.length >= 50) {
    return "Este campo debe tener menos de 50 caracteres";
  }
  if (!/^[A-z]+$/.test(nombre)) {
    return "Este campo solo acepta letras";
  }
  return "";
}

function validarCiudad(ciudad) {
  if (ciudad.length === 0) {
    return "Este campo debe tener una ciudad seleccionada";
  }
  return "";
}

function validarDescripcion(descripcion) {
  if (descripcion.length === 0) {
    return "Este campo debe tener al menos 1 caracter";
  }
  if (descripcion.length >= 100) {
    return "Este campo debe tener menos de 100 caracteres";
  }
  if (!/^[A-z0-9\s]+$/.test(descripcion)) {
    return "Este campo solo acepta numeros y letras";
  }
  return "";
}

function validarFormulario(event) {
  event.preventDefault();

  const $form = document.formulario;

  const nombre = $form.nombre.value;
  const ciudad = $form.ciudad.value;
  const descripcion = $form["descripcion-regalo"].value;

  const errorNombre = validarNombre(nombre);
  const errorCiudad = validarCiudad(ciudad);
  const errorDescripcion = validarDescripcion(descripcion);

  const errores = {
    nombre: errorNombre,
    ciudad: errorCiudad,
    "descripcion-regalo": errorDescripcion,
  };

  const esExito = manejarErrores(errores) === 0;

  if (esExito) {
    $form.classList.add("oculto");
    document.querySelector("#exito").classList.remove("oculto");

    setTimeout(function () {
      window.location.href = "./wishlist.html";
    }, 5000);
  }
}

function manejarErrores(errores) {
  const llaves = Object.keys(errores);
  let contadorErrores = 0;

  llaves.forEach(function (llave) {
    const error = errores[llave];
    const $errores = document.querySelector("#errores");

    if (error) {
      contadorErrores++;
      document.formulario[llave].classList.add("error");

      const $error = document.createElement("li");
      $error.textContent = error;
      $errores.appendChild($error);
    } else {
      $errores.innerHTML = "";
      document.formulario[llave].classList.remove("error");
    }
  });

  return contadorErrores;
}

const $form = document.formulario;
$form.onsubmit = validarFormulario;
