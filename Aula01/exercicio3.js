document.write("<h1> bem vindo ao exercici 3 aula 01")

var valor = prompt ("digite o valor da prestação em atraso")
var taxa = prompt ("digite o valor da taxa em porcentagem")
var tempo = prompt ("digite o tempo de dias de atraso")
var valorparcela = Number(valor)+((valor)*((taxa)*(taxa)/100 )*(tempo))
document.write("<p> o valor da parcela e" +valorparcela+ "</p>" )