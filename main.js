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
  let span = null;
  // const verde = document.getElementById("verde");

  const imc = calcularImc(peso, altura);
  console.log(imc);
  let status;

  if (camposValidos()) {
    if (imc < 18.5) {
      status = " e vc está abaixo do peso";
      span = document.createTextNode("");
    } else if (imc < 25 && imc >= 18.5) {
      status = ` e vc está com peso ideal,`;
      span = document.createElement("span");
      span.setAttribute("class", "verde");
      let texto = document.createTextNode(" Legal!");
      span.appendChild(texto);
      // const verde = document.getElementById("verde").textContent="Nice";
      // let verde = document.getElementById("verde");
      // Mytxt = document.createTextNode("New text");
      // verde.appendChild(Mytxt);
      // Myspan = document.getElementById("SpanID");
      // Mytxt = document.createTextNode("New text");
      // Myspan.appendChild(Mytxt);
      // document.getElementById("SpanID").textContent="New Text";
      
    } else if (imc < 30 && imc >= 25) {
      status = " e vc está levemente acima do peso";
      span = document.createTextNode("");
    } else if (imc < 35 && imc >= 30) {
      status = " e vc está com obsidade grau I";
      span = document.createTextNode("");
    } else if (imc < 40 && imc >= 35) {
      status = " e vc está com obsidade grau II";
      span = document.createTextNode("");
    } else {
      status = " e vc está com obsidade grau III";
      span = document.createElement("span");
      span.setAttribute("class", "vermelho");
      let texto = document.createTextNode(" Cuidado!");
      span.appendChild(texto);

    }      
    resultado.textContent = `${nome} seu imc é ${imc.toFixed(2)} ${status}`;
    resultado.appendChild(span);

  } else {
    alert("Preencha todos os campos");
    resultado.textContent = ``;
  }
}

document.getElementById("calcular").addEventListener("click", mostrarResultado);
