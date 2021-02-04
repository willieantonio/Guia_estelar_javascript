/*


//function expression
//function anonymous
//parâmetros (parameters)
const sum = function (number1, number2) {
	total = number1 + number2
	return total
}

let number1 = 34
let number2 = 25


console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)


//function scope

let subject 

function createThink(){
	subject = 'study'
	return subject
}

console.log(subject)
console.log(createThink())
console.log(subject)


//function hoisting

sayMyName()

function sayMyName(){
	console.log('Willie')
}


//arrow function

const sayMyname = () =>{
	console.log('Willie')
}

sayMyname()


//callback function
//Chamar de volta a função 

function sayMyName(name){
	console.log(name)
}

sayMyName(
	() =>{
		console.log('Estou em uma Callback')
	}
)


//Funções construtoras

//	Function() construtor

//	*expressão new
//	*criar um novo objeto
//	*this keyword




function Person(name){
	this.name = name
	this.walk = function(){
		return this.name + " está andando"
	}
}

const willie = new Person("Willie")
const jonh = new Person("Jonh")
console.log(willie.walk())
console.log(jonh.walk())


/*

	Prototype

	*prototype-based language
	*prototype chaining
	*__proto__

*/

/*
	
	Type Conversion (typecasting) vc Type coersion
	*Alteração de um tipo de dado para outro tipo

*/

/*

//Manipulando Strings e Números

// Transformando String em Número e Número em String


let string = "123"
console.log(Number(string))
//let number = 321
//console.log(String(number))


//Manipulando Strings e Números

//Contar quantos caracteres tem uma palavra e quantos digitos tem um número

//let word = "Paralelepipedo"
//console.log(word.length)
//let number = 4562585858
//console.log(String(number).length)


//Manipulando Strings e Números

//Transformar um número quebrado em 2 casas decimais 
//e trocar ponto por vírgula

let number = 11254689.23568
console.log(number.toFixed(2).replace(".", ","))


//Manipulando Strings e Números

//Transforme letras minúsculas em maiúsculas.
// Faça o contrário disso também

let word = "Programar é muito bom!!"
console.log(word.toUpperCase()) //Tudo em  Maiúscula
console.log(word.toLowerCase()) //Tudo em Minúscula



//Manipulação de Strings

//Verificar se o texto contém a palavra Amor

let pharse = "Eu quero viver o Amor!"
console.log(pharse.includes("Amor"))


//Manipulando Strings e Arrays

//Separe um texto que contem espaços, em um 
//novo array onde cada texto é uma posição do array.
//Depois disso , transforme o array em um texto e onde ra espaços, coloque _

let phrase = "Hoje tem café bem quente?"
let myArray = phrase.split(" ") //Transformando de String em Array
let phraseWithUnderscore = myArray.join("_") //Transformando de Array em String novamente
console.log(phraseWithUnderscore.toLowerCase())

//Manipulando Array'

//Criar Array com construtor
let nubArray = new Array('a', 'b', 'c')
console.log(nubArray)

//Manipulando Array

//Contar elementos de um Array 

console.log(["a", {type: "array"},
function() {
	return "alo"
},].length)


//Manipulando Arrays

//Transformar uma cadeia de caracteres em elementos de um array

let words = "manipulação"
console.log(Array.from(words))



//Manipulando Arrays

let techs = ["html", "css", "js"]

//adicionar um item no fim
techs.push("node.js")
//adicionar no começo
techs.unshift("sql")
//remover do fim
//techs.pop()
//remover do começo
//techs.shift()
//pegar somente alguns elementos do array
//console.log(techs.slice(1,3))
//remover 1 ou mais itens em quelquer posição do arrays
//techs.splice(1, 2)
//encontrar a posição de um elemento no array
let index =  techs.indexOf('css')
techs.splice(index, 1)
console.log(index)


/*
	Expressões e Operadores

	--Expressions
	--Operators
		Binary
		Unary
		Ternary
*/
/*
let number3 = 11

console.log(number3)
console.log(--number3)
console.log(++number3)
console.log(true ? 'alo' : 'nada') //se for true mostre 'alo' se false mostre 'nada'


/*
	New
		*left-hand-side expression
		*criar um novo objeto
*/
/*
let name1 = new String('Willie') // nome
name1.surName = "Antonio" // Sobrenome
let age1 = new Number(30) //Idade
console.log(name1, age1)

let date = new Date('2021-11-02')
console.log(date.__proto__)


//
//	#Operadores unários
//	typeof
//	delete
//

const person = {
	name: 'willie',
	age: 25,
}
delete person.age

console.log(person)

*/

/*
//#Operadores Aritimeticos

//Multiplicação (*)
console.log("Multiplicação "+ 3.56 * 89.9)
//divisão (/)
console.log("Divisão "+ 798 / 54)
//soma (+)
console.log("Soma "+ 568 + 895)
//subtração (-)
console.log("Subtração "+ (8457 - 786))

//resto da divição (%)
let remainder 
remainder = 11 % 10
console.log("O resto da divisão é "+ remainder)

//incremento (++)
let increment = 0
increment++
increment++
console.log(increment)

//decremento (--)
let decrement = 10
decrement--
decrement--
console.log(decrement--)

//exponencial (**)
console.log(3**2)

*/


//Operadores de Comparação

//Ira comparar valores e retornar um Boolean como resposta a comparação

let one = 1
let two = 2

// ==  igual
console.log(one == 1)
console.log(one == "1")

// !=  diferente
console.log(one != two)
console.log(one != 1)
console.log(one != "1")

// === estritamente igual (Deve ser exatamente igual)
console.log(one === "1") 
console.log(one === 1)

// !== estritamente diferente
console.log(two === "2")
console.log(two === 2)

// >   Maior
console.log(one > two)
console.log(two > one)

// >=  Maior igual
console.log(one >= two)
console.log(two >= 2)

// <   Menor
console.log( one < two)
console.log(two < 2)
// <=  Menor igual