document.write("<h1> bem vindo ao exercici 6 aula 01")

var quantidade = prompt ("escreva quantos vai comprar")
var preço = prompt("escreva o preço de cada")
var subtotal = Number( (quantidade)* (preço) )
var porcentagem = Number(((subtotal)/100)*10 )
var final = Number((subtotal)-(porcentagem))
document.write ("<p> o valor subtotal da sua compra e " + subtotal+ "</p>")
document.write ("<p> o valor final da sua compra e " + final+ "</p>")