document.write ("<h2>entrada de dados </h2>");

var numero1 = prompt("digite o numero 1");
var numero2 = prompt("digite o numero 2");

document.write("Numero 1 =" + numero1 + "<br>");
document.write("Numero 2 =" + numero2 + "<br>");

document.write ("<h2>operações aeitméticas</h2>");
var resultado;

resultado = Number( numero1) + Number (numero2);
document.write("A soma dos numeros é " + resultado +"<br>" );
resultado2 = Number( numero1) - Number (numero2);
resultado3 = Number( numero1) * Number (numero2);
resultado4 = Number( numero1) / Number (numero2);
document.write("A diferença entre os numeros é " + resultado2 +"<br>" );
document.write("o produt dos numeros é " + resultado3 +"<br>" );
document.write("A divisão entre os numeros é " + resultado4 +"<br>" );
