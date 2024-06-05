function saoAnagramas(str1, str2) {
  if (str1.length !== str2.length) {
      return false;
  }
  
  const normalize = str => str.toLowerCase().split('').sort().join('');
  
  return normalize(str1) === normalize(str2);
}

// Exportando a função para ser usada em testes
module.exports = saoAnagramas;
