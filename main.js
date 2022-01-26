"use strict";

function camposValidos() {
  return document.getElementById("form").reportValidity();
}

function calcularImc(peso, altura) {
  return peso / (altura * altura);
}

function mostrarResultado() {
  const nome = document.getElementById("nome").value;
  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;
  const resultado = document.getElementById("resultado");

  const imc = calcularImc(peso, altura);
  console.log(imc);
  let status;

  if (camposValidos()) {
    if (imc < 18.5) {
      status = " e vc está abaixo do peso";
    } else if (imc < 25 && imc >= 18.5) {
      status = " e vc está com peso ideal";
    } else if (imc < 30 && imc >= 25) {
      status = " e vc está levemente acima do peso";
    } else if (imc < 35 && imc >= 30) {
      status = " e vc está com obsidade grau I";
    } else if (imc < 40 && imc >= 35) {
      status = " e vc está com obsidade grau II";
    } else {
      status = " e vc está com obsidade grau III";
    }

    resultado.textContent = `${nome} seu imc é ${imc.toFixed(2)} ${status}`;
  } else {
    alert("Preencha todos os campos");
    resultado.textContent = ``;
  }
}

document.getElementById("calcular").addEventListener("click", mostrarResultado);
