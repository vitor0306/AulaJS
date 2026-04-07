function exercicio8()
{
 let n1 = Number (document.getElementById("peso").value);
 let n2 = Number (document.getElementById("altura").value);

let imc = Number (n1/(n2*n2));

 document.getElementById("imc").innerHTML = 
  "<p> seu IMC e = a" + imc + " </p>";
}