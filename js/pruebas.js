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

  console.assert(
    validarNombre("12132") === "Este campo solo acepta letras",
    "Validar nombre no valido que el nombre use solo letras"
  );

  console.assert(
    validarNombre("Junior") === "",
    "Validar nombre fallo con un nombre valido"
  );
}

function probarValidarCiudad() {
  console.assert(
    validarCiudad("") === "Este campo debe tener una ciudad seleccionada",
    "Validar ciudad no valido que una ciudad sea selecciona"
  );
  console.assert(
    validarCiudad("Chaco") === "",
    "Validar ciudad fallo con una ciudad correcta."
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

  console.assert(
    validarDescripcion("Quiero -2- legos y una bicicleta#") ===
      "Este campo solo acepta numeros y letras",
    "Validar descripcion no valido que la descripcion solo use numeros y letras"
  );

  console.assert(
    validarDescripcion("Quiero 2 legos y una bicicleta") === "",
    "Validar descripcion fallo con una descripcion correcta"
  );
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcion();
