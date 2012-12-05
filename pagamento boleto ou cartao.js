
//Basta acrescentar esse script ao legado
if($("body.checkout.finaliza-compra .print").length>0){
	$("body.checkout.finaliza-compra").addClass("boleto");
}
if($("body.checkout.finaliza-compra .janela-debito").length>0){
   $("body.checkout.finaliza-compra").addClass("debito");
}
if($("body.checkout.finaliza-compra .print-boleto").length==0){
   $("body.checkout.finaliza-compra").addClass("cartao");
}