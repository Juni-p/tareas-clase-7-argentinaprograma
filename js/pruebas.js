function probarValidarNombre() {
  console.assert(
    validarNombre("") === "Este campo debe tener al menos 1 caracter",
    "Validar nombre no validó que el nombre no sea vacío"
  );

  console.assert(
    validarNombre(
      "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
    ) === "Este campo debe tener menos de 50 caracteres",
    "Validar nombre no validó que el nombre sea menor a 50 caracteres"
  );
}

function probarValidadCiudad() {
  console.assert(
    validadCiudad("") === "Este campo debe tener una ciudad seleccionada",
    "Validar ciudad no valido que una ciudad sea selecciona"
  );
}

function probarValidarDescripcion() {
  console.assert(
    validarDescripcion("") === "Este campo debe tener al menos 1 caracter",
    "Validar descripcion no valido que la descripion no sea vacio "
  );

  console.assert(
    validarDescripcion(
      "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
    ) === "Este campo debe tener menos de 100 caracteres",
    "Validar descripcion no valido que la descripcion sea menor a 100 caracteres"
  );
}

probarValidarNombre();
probarValidadCiudad();
probarValidarDescripcion();
