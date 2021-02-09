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

/*
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

*/


//### Celsius em Fahrenheit

/*
    Criar uma função que receba uma string em celsius ou
    fahrenheit e faça a transformação de uma unidade para
    a outra.

    Dados:

    C = (F - 32) * 5/9
    F = C * 9/5 + 32

*/

/*
function transformDegree(degree){
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    //Fluxo de Erro
    if(!celsiusExists && !fahrenheitExists){
        throw new Error('Grau não identificado') 
    }

    //fluxo ideal, F => C
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'


    //Fluxo alternativo C => F
    if(celsiusExists){ //Não se usa 'let' para aproveitar as variaveis do escopo anterior 
        updatedDegree = Number(degree.toUpperCase().replace("C", ""))
        formula = (celsius) => (celsius) * 9/5 + 32
        degreeSign = 'F'
    }

    return formula(updatedDegree) + degreeSign


}

try{
    console.log(transformDegree('100C'))
    console.log(transformDegree('50F'))
    transformDegree('80P')
} catch (error){
    console.log(error.message) //Para mostrar apenas a mensagem de erro
}

*/

// ##Buscando e contando dados em  Arrays ##
/*
    Baseando no Array de Livros por Categoria abaixo, faça os seguintes desafios

    *Contar o número de categorias e o número de livros em cada categorias
    *Contar o número de autores 
    *Mostrar livros do autor Augusto Cury
    *Transformar a função acima em uma função que irá receber o nome
    do autor e devolver os livros desse autor.
 */

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai poble",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
       ],
    },

    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituivel",
                author: "Augusto Cury"
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            }
        ],
    },
];

// *Contar o número de categorias e o número de livros em cada categorias
const totalCategories = booksByCategory.length

console.log('O Total de Categoria encontrados é ',totalCategories);
for(let category of booksByCategory){
    console.log('Total de Livros da Categoria: ', category.category, " é ", category.books.length)
    //console.log(category.books.length)
}

//*Contar o número de autores 
function countAuthors(){
    let authors = [];

    for(let category of booksByCategory){ //Verifica as categorias  books
        for(let book of category.books){ //verifica cada  book da categoria
            if(authors.indexOf(book.author) == -1){ //Verifica os autores
                authors.push(book.author) 
            }
        }
    }
    console.log("Total de autores: ", authors.length)
}

countAuthors();

// *Mostrar livros do autor Augusto Cury

function booksOfAugustoCury(){
    let books = [];

    for(let category of booksByCategory){ //Verifica as categorias  books
        for(let book of category.books){ //verifica cada  book da categoria
            if(book.author === 'Augusto Cury'){ //Verifica o autor
                books.push(book.title)
            }
        }
    }
    console.log("Total de Livros de Augusto Cury ", books)
}

  booksOfAugustoCury()



//*Transformar a função acima em uma função que irá receber o nome
//do autor e devolver os livros desse autor.

  function booksOfAuthor(author){
    let books = [];

    for(let category of booksByCategory){ //Verifica as categorias  books
        for(let book of category.books){ //verifica cada  book da categoria
            if(book.author === author ){ //Verifica o autor
                books.push(book.title)
            }
        }
    }
    console.log(`Livros do Autor ${author}: ${books.join(", ")}`)
}

  booksOfAuthor('George S. Clason')

