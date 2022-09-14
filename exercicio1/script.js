// # Exercício 1

// a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.
// function string() {
//   console.log('Olá, Luana!')
// }
// string()
// b) Declare uma função que imprima a tabuada do 6. Chame esta função.
// function tabuada6() {
//   for (let i = 0; i <= 10; i++) console.log('Tabuada: 6 x ' + i + ' = ' + 6 * i)
// }
// tabuada6()
// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__
const string = () => {
  console.log('Olá, Luana!')
}
string()

const tabuada6 = () => {
  for (let i = 0; i <= 10; i++) console.log('Tabuada: 6 x ' + i + ' = ' + 6 * i)
}
tabuada6()
