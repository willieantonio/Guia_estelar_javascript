console.log("Vamos os modulos 9, 10 e 11")

//if ... else (Controle de decisões)
//let temperature = 36.2

//if (temperature >= 37.5) {
//    console.log('Febre Alta')
//}else if(temperature < 37.5 && temperature >= 37){
//    console.log('Febre Moderada')
//}else {
//    console.log('Saudável')
//}

/*
let temperature = 37.1
let hightTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(hightTemperature){
    console.log('Febre Alta')
}else if(mediumTemperature){
    console.log('Febre Moderada')
}else{
    console.log('Saldavel')
}

*/

//switch (cases)
/*
function calculate(number1, operator, number2) {
    let result

    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
            console.log('não implementado')
            break
    }
    return result
}

console.log(calculate(4, '+', 88))

*/

/*
//Sobre
// throw

function sayMyName(name = ''){
    if(name === ''){
        throw 'Nome é Obrigatório'
    }
    console.log(name)
}

//try...catch
try{
    sayMyName('Willie')
}catch(e){
    console.log(e)
}

console.log('após ao try/catch')

*/

/*
//Estrutura de repetição
// for


for(let i = 100; i > 0; i--){
    if(i === 5){
        continue;
    }
    console.log(i)
}
*/

/*
//Estrutura de repetição
//while

let i = 0;
while(i < 10){
    console.log(i)
    i++
}

*/

/*
//for .. of

let name1 = 'willie'
let names = ['João', 'Paulo', 'Pedro']

for(let name1 of names){
    console.log(name1)
}

for(let char of name1){
    console.log(char)
}

*/


//for ... in (loop em um objeto)

let person ={
    name1: 'John',
    age: 30,
    weight: 88.6
}

for(let propety in person){
    console.log(propety) // Formas de acessar
    console.log(person[propety]) // ou
    console.log(person.name1) // ou
    console.log(person["name1"]) // e essa
}