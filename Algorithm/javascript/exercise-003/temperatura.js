function converterTemperatura(temperatura, escala) {
  if (escala === 'C') {
      return (temperatura * 9/5) + 32;
  } else if (escala === 'F') {
      return (temperatura - 32) * 5/9;
  } else {
      throw new Error("Escala inválida! Use 'C' para Celsius ou 'F' para Fahrenheit.");
  }
}

// Exportando a função para ser usada em testes
module.exports = converterTemperatura;
