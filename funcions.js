//Modulo de Desafios... vamos codar....

console.log("Modulo 11 -  Desafios Dev's")

//Primeiro Desafio
/*
    ### Transformar notas escolares 

    Crie um algoritmo que transforme as notas do Sistema
    numérico para sistema de notas em caracteres tipo A B C

    Dados:

    * de 90 para cima - A 
    * entre 80 - 90   - B
    * entre 70 - 79   - C
    * entre 60 - 69   - D
    * menor que  60   - F
    
 */
/*
function getNota(nota){ //Criar uma função para guardar os valores
    let notaA = nota >= 90 && nota <= 100
    let notaB = nota >= 80 && nota <= 89
    let notaC = nota >= 70 && nota <= 79
    let notaD = nota >= 60 && nota <= 69
    let notaF = nota <= 60 && nota >= 0

 let notaFinal;

 if(notaA){
     notaFinal = "A"
 }else if(notaB){
     notaFinal = "B"
 }else if(notaC){
     notaFinal = "C"
 }else if(notaD){
     notaFinal = "D"
 }else if(notaF){
     notaFinal = "F"
 }else{
     notaFinal = "Valor invalido"
 }

 return notaFinal

}
 //Usando o console.log para testar se a logica funcionou

console.log(getNota(100))
console.log(getNota(62))
console.log(getNota(10))
console.log(getNota(72))
console.log(getNota(90))
console.log(getNota(52))
console.log(getNota(0))
console.log(getNota(-62))

*/

//Segundo Desafio
/*
    ### Sistemas de Gastos Familiar

    Crie um objeto que possui 2 propriedades, ambas do tipo array:
        * receitas[]
        *despesas[]

Agora, crie uma função que irá calcular o total de receitas e despesas e ira mostrar 
uma mensagem se a família esta com saldo positivo ou negativo, seguido do valor d o saldo

*/
//Criando o Objeto com as array
let family = {
    incomes: [2500, 72.56, 556.96, 1589.56],
    expenses: [350.65, 268, 176.96, 1453] 
}

function sum(array){
    let total = 0;

    for(let value of array){
        total += value
    }

    return total
}

function calculateBalance(){ //função para calcular os totais
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0 

    let balanceText = "negative"

    if(itsOk){
        balanceText = "positivo"
    }

    console.log(`Seu saldo é ${balanceText}: R$ ${total.toFixed(2)}`) //Formatando a saida de valores

}

calculateBalance()