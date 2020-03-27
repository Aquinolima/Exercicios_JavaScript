 // Exercícios - Aula 26-03

        // Exercício 01 - Desenvolver um programa JavaScript 
        // que efetue a soma de todos os números que se encontram entre os números de 1 até 10;

        document.write("<b>Resolução exercício 01</b> <br>");
        var cont;
        var soma = 0;
        var dNum;
        soma = eval(soma);
        cont = eval(cont);
        document.write("Dado os números <br>");
        for (cont = 1; cont <= 10; cont++) {
            dNum = cont + ", ";
              
            document.write(dNum);

            soma = soma + cont;
            
        };
        document.write("<br>");
        document.write("A soma dos números é: " + soma);

        // Exercício 02 - Escreva um programa em JavaScript
        // que leia um valor A e um valor final B e imprima a sequência dos números entre ele.

        document.write("<br><br><b>Resolução exercício 02</b> <br>");
        var valorA, valorB, sequencia;
        alert("Digite dois valores para ver a sequência de números entre eles!");
        valorA = prompt("Digite o primeiro valor!");
        valorA = eval(valorA);
        valorB = prompt("Digite outro valor maior que o primeiro digitado!");
        valorB = eval(valorB);
        document.write("A sequência dos números é: <br>");
        for (sequencia = valorA; sequencia <= valorB; sequencia++) {
            
            document.write(sequencia, ", ");
            
        }
        // Exercício 03 - Escreva um programa em JavaScript 
        // que escreva na tela os números ímpares entre 50 e 100.
    document.write("<br><br><b>Resolução exercício 03</b> <br>");
       var num = 50, impar= "";
        while (num<=100){
      //Concatena os números impares
        impar += !(num%2 == 0 )?num+", ":"";
        num++;
     };
      document.write(impar);