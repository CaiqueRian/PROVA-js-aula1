/* [JS-A01] Considere três notas (n1, n2, n3) e seus respectivos pesos (p1, p2, p3). Calcule a média ponderada das notas e atribua o resultado à variável "media". Após o cálculo, exiba a média ponderada no console.

OBS: Para calcular a média ponderada multiplica os valores das notas pelos valores dos pesos, e divide pelas somas de todos os pesos. Lembre-se de declarar valores para os pesos e para as notas. */


const nota1 = Number(prompt("Digite sua primeira nota"))
const nota2 = Number(prompt("Digite sua segunda nota"))
const nota3 = Number(prompt("Digite sua terceira nota"))
let peso1 = Number(prompt("Digite o peso dessa primeira avaliação"))
let peso2 = Number(prompt("Digite o peso dessa segunda avaliação"))
let peso3 = Number(prompt("Digite o peso dessa terceira avaliação"))


let pesoTotal = peso1 + peso2 + peso3;

let media = (nota1 * peso1) + (nota2 + peso2) + (nota3 * peso3) / pesoTotal
console.log(media);

if(media >= 6){
  console.log("Aprovado");
}else{
  console.log("Reprovado");
}