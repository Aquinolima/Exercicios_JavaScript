// Exercícios - Aula 19-03

// Exercício 01 - Escreva um programa para ler 2 valores 
// (considere que não serão informados valores iguais) e escrever o maior deles;
document.write("<b>Resolução exercício 01</b> <br>");
alert("Qual valor é maior?");
var valorA, valorB;

valorA = prompt("Digite um valor");
valorA = eval(valorA);
valorB = prompt("Digite outro valor diferente");
valorB = eval(valorB);

if (valorA > valorB) {
    alert("O maior valor é: " + valorA);
    document.write("O maior valor é: ", valorA);
} else {
    if (valorA == valorB) {
        alert("Os valores dígitados são iguais! \n" + valorA + " e " + valorB);
        document.write("Os valores dígitados são iguais! <br>", valorA, " e ", valorB);
    } else {
        alert("O maior valor é: " + valorB);
        document.write("O maior valor é: ", valorB);
    }
}
// Exercício 02 - Escreva um programa para ler o ano de nascimento de uma pessoa 
// e escrever uma mensagem que diga se ela poderá ou não votar este ano 
// (não é necessário considerar o mês em que ela nasceu).
document.write("<br><br><b>Resolução exercício 02</b> <br>");
alert("Será que você poderá votar esse ano?");
var idade, anoNasc;
anoNasc = prompt("Digite o ano que você nasceu!");
anoNasc = eval(anoNasc);

idade = 2020 - anoNasc;
if (idade >= 18) {
    alert("Você poderá votar esse ano!");
    document.write("Você poderá votar esse ano!");
} else {
    alert("Você NÃO poderá votar esse ano!");
    document.write("Você <b>NÃO </b> poderá votar esse ano!");
}


// Exercício 03 - Escreva um programa para ler 3 valores inteiros 
// (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente;
document.write("<br><br><b>Resolução exercício 03</b> <br>");
alert("Escreva três valores e os veja em ordem crescente!");
var numA, numB, numC;

numA = prompt("Digite o primeiro valor!");
numA = eval(numA);
numB = prompt("Digite o segundo valor!");
numB = eval(numB);
numC = prompt("Digite o terceiro valor!");
numC = eval(numC);

var numbers = [numA, numB, numC];
numbers.sort(function (a, b) {
    return a - b;
});
alert("A sequência é: \n" + numbers);
document.write("A sequência é: <br>", numbers);
