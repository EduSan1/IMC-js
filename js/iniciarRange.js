'use strict'

const iniciarRange = (idRange) => {
    const atualizarValor = () => {
      document.getElementById(
        `valor-${idRange}`
      ).textContent = document.getElementById(idRange).value;
    };
    document.getElementById(idRange).addEventListener("input", atualizarValor);
  };

  export {
      iniciarRange
  }