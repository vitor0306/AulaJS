function Exercicio2()
{
 let farenheit = Number (documnt.getelementByid("farenheit").value);

let celsius = Number(((farenheit)-32)*5) / 9

 document.getElementById("celsius").innerHTML = 
 "<p>a temperatura em celsius e " + celsius + " </p>";
}