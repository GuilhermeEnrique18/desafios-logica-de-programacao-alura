//Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

alert("Bem vindo ao programa contagem progressiva!");

let contador = 0;
let contadorUsuario= prompt("Informe um número para contagem: ");

while(contador <= contadorUsuario){
    console.log(`valor = ${contador}`);
    contador++
  
}

