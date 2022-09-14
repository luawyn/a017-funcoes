// # Exercício 2
// Declare e chame as funções abaixo:

// a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.
function calcularSoma(numero1, numero2) {
  return numero1 + numero2
}
console.log(calcularSoma(23, 68))
// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
function maiorOuIgual(numero1, numero2) {
  return numero1 >= numero2
}
console.log(maiorOuIgual(4, 8))
// c) Uma função que receba um número e imprima se ele é par ou não
function paridade(numero) {
  if (numero % 2 === 0) {
    console.log(`O número ${numero} é par!`)
  } else {
    console.log(`O número ${numero} é ímpar!`)
  }
}
paridade(7)
// d) Uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela contendo apenas letras maiúsculas.
function mensagem(texto) {
  console.log(texto.length)
  console.log(texto.toUpperCase())
}
mensagem('Eu amo o Dolfs')
