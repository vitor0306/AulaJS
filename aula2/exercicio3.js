function Exercicio3()
{
 let valor = Number (documnt.getelementByid("valor").value);
 let taxa = Number (documnt.getelementByid("taxa").value);
 let tempo = Number (documnt.getelementByid("tempo").value);
let parcela = Number ((valor) * (((taxa) * (taxa)) / 100) * (tempo) )

 document.getElementById("parcela").innerHTML = 
 "<p>a temperatura em celsius e " + celsius + " </p>";
}