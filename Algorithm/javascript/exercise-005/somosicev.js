function SomosiCEV(numero) {
  if (numero % 3 === 0 && numero % 5 === 0) {
      return "SomosiCEV";
  } else if (numero % 3 === 0) {
      return "Somos";
  } else if (numero % 5 === 0) {
      return "iCEV";
  } else {
      return numero;
  }
}

// Exportando a função para ser usada em testes
module.exports = SomosiCEV;
