// 1 .Declare uma Variável de nome Weight.
let Weight;
// 2 .Que tipo de dado é a variável acima?
//console.log(typeof weight)

/*

	3. Declare uma variável e atribua valores para cada um dos dados:
		*name: String
		*age: Number(integer)
		*stars: Number (float)
		*isSubscribed: Boolean
*/
let name = "Willie"
let age = "35"
let stars = "5.5"
let isSubscribed = true

//console.log(name, age, stars, isSubscribed)

/*
	4. A variável student abaixo é de que tipo de dados?
	4.1 Atribua a ela as mesmas propriedades e valores do exercicio 3.
	4.2 Mostre no console a seguinte mensagem:
		<name> de idade <age> pesa <weight> kg.

		Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedades do objeto

*/

let student = {
	//Tipo Objeto
	name: "Jonh",
	age: "20",
	weight: "70.5",
	stars: 4.8,
	isSubscribed: true
};

//console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

/*
	5. Declare uma variável do tipo Array, de nome students e
	 atribua a ela nenhum valor ou seja, somente a Array vazia. 

*/
let students = []
//console.log(students)

/*
	6. Reatribua valor para a variável  acima, colocando
	 dentro dela o objeto student da questão 4.
	  (Não copie e cole o  objeto, mas usar o objeto criado e inserindo ele no Array)
*/

students = [
	student
]

//console.log(students)

/*
	7.Coloque no console o valor da posição zero do Array acimal.

 */

 //console.log(students[0])

 /*
	8. Crie um novo student e coloque na posição 1 do Array students
 */
let student02 = {
	name: "José",
	age: "22",
	weight: 7.55,
	stars: 4.9,
	isSubscribed: false

}

students = [
	student, 
	student02
]

//console.log(students)


/*
	9.Sem rodar o código responda qual é a resposta do
	codigo abaixo e por que? Após sua resposta, rode
	 o código e veja se você acertou.
*/
//console.log(a)
var a = 1

/*
	Resposta, vai aparecer a mensagem de 'undefined', pois a 
	variavel foi criada e atribuido um valor apos o console. log.
*/ 