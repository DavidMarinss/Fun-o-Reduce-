/* .reduce()
Esta função serve para reduzirmos o conteúdo de um Array para apenas um elemento. O exemplo mais clássico é somar todos os valores de um Array. */

const listaNumeros = [1, 2, 3];
const total = listaNumeros.reduce((total,elementoAtual) => total + elementoAtual)
console.log(total)
/* Resultado:
	6
*/
