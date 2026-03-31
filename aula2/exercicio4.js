function exercicio4()
{
 let base = Number (document.getElementById("base").value);
 let altura = Number (document.getElementById("altura").value);
 
let area = Number (base*altura) * 2 ;

 document.getElementById("area triangulo").innerHTML = 
  "<p> area triangulo = a" + area + " </p>";
}