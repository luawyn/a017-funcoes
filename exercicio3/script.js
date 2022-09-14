// # Exercício 3

// Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor uma das operações básicas (soma, subtração, multiplicação e divisão).
function calcularSoma(numero1, numero2) {
  return numero1 + numero2
}
console.log(calcularSoma(23, 68))

function calcularSubtracao(numero1, numero2) {
  return numero1 - numero2
}
console.log(calcularSubtracao(23, 68))

function calcularMultiplicacao(numero1, numero2) {
  return numero1 * numero2
}
console.log(calcularMultiplicacao(23, 68))

function calcularDivisao(numero1, numero2) {
  return numero1 / numero2
}
console.log(calcularDivisao(23, 68))
// Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, imprima no console o resultado das operações
perguntaNumero1 = +prompt('Numero 1')
perguntaNumero2 = +prompt('Numero 2')

console.log(calcularSoma(perguntaNumero1, perguntaNumero2))
console.log(calcularSubtracao(perguntaNumero1, perguntaNumero2))
console.log(calcularMultiplicacao(perguntaNumero1, perguntaNumero2))
console.log(calcularDivisao(perguntaNumero1, perguntaNumero2))
