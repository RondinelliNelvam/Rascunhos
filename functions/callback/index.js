function primeiroBloco() {
  // Aguardar 5 segundos
  setTimeout(function () {
    console.log("Esse é o primeiro bloco de comandos após 5 segundos");
  }, 5000);
}
function segundoBloco() {
  console.log("Esse é o segundo bloco de comandos");
}
primeiroBloco();
segundoBloco();
