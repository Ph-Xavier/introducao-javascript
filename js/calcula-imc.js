var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdIMC = paciente.querySelector(".info-imc");

  var pesoEValido = validaPeso(peso);
  var alturaEValido = validaAltura(altura);

  if (!pesoEValido) {
    tdIMC.textContent = "Peso inválido!";
    paciente.classList.add("paciente-invalido");
  }

  if (!alturaEValido) {
    tdIMC.textContent = "Altura inválida!";
    paciente.classList.add("paciente-invalido");
  }

  if (pesoEValido && alturaEValido) {
    var imc = calculaIMC(peso, altura);
    tdIMC.textContent = imc;
  }
}

function calculaIMC(peso, altura) {
  var imc = 0;

  imc = peso / (altura * altura);

  return imc.toFixed(2);
}

function validaPeso(peso) {
  if (peso >= 0 && peso < 1000) {
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura) {
  if (altura >= 0 && altura < 3.0) {
    return true;
  } else {
    return false;
  }
}
