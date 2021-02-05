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
