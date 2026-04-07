function exercicio7()
{
 let n1 = Number (document.getElementById("nota1").value);
 let n2 = Number (document.getElementById("nota2").value);
 let n3 = Number (document.getElementById("nota3").value);

 let media = Number ((n1+n2+n3)/3);

 document.getElementById("media").innerHTML = 
  "<p> sua media e = a " + media + " </p>";
}