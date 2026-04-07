function exercicio9()
{
 let pr = Number (document.getElementById("principal").value);
 let taxa = Number (document.getElementById("taxa").value);
 let tempo = Number (document.getElementById("tempo").value);

let mon = Number (pr*(1+(taxa*tempo)));

 document.getElementById("montante").innerHTML = 
  "<p> o montante e = a " + mon + " </p>";
}