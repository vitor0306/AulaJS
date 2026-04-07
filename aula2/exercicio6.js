function exercicio6()
{
 let preço = Number (document.getElementById("preço").value);
 let quanti = Number (document.getElementById("quanti").value);

let subtotal = Number (quanti*preço);
let desconto = Number (subtotal/10);
let final = Number (subtotal-desconto);
 document.getElementById("a").innerHTML = 
  "<p> o subtotal e" + subtotal + " o desconto e " + desconto + " e o valor final e " + final + " </p>";
}