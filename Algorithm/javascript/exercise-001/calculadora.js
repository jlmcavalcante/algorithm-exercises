// Função calculadora
function calculadora(num1, num2, operacao) {
  switch(operacao) {
      case '+':
          return num1 + num2;
      case '-':
          return num1 - num2;
      case '*':
          return num1 * num2;
      case '/':
          return num1 / num2;
      default:
          throw new Error("Operação inválida!");
  }
}

// Exportando a função para ser usada em testes
module.exports = calculadora;
