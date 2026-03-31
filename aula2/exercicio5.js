function exercicio5()
{
 let lado = Number (document.getElementById("lado").value);

let area = Number (lado*lado);

 document.getElementById("area-quadrado").innerHTML = 
  "<p> area-quadrado e = a " + area + " </p>";
}