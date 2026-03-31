function exercicio3()
{
 let valor = Number (document.getElementById("valor").value);
 let taxa = Number (document.getElementById("taxa").value);
 let tempo = Number (document.getElementById("tempo").value);

let parcela = Number (valor * (taxa * taxa) / 100 * tempo );

 document.getElementById("parcela").innerHTML = 
  "<p> o valor da parcela e " + parcela + " </p>";
}