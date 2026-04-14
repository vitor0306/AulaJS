function exercicio11()
{
let quilometro = Number (document.getElementById("quilometro").value);
let valorq = Number (document.getElementById("valorq").value);
let tempo = Number (document.getElementById("tempo").value);

let valorf = Number ( (valorq) * (quilometro) ) + Number((tempo) * 0.50) ;

 document.getElementById("vl").innerHTML = "<p> o valor final e " + valorf + " </p>";
}