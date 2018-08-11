function enviar(){
  var nome = document.getElementById("txt-name");
  //se o valor na variavel nome for difetente de vazio
  if(nome.value != ""){
    //Mostrar mensagem com nome
    alert("obrigado "+ nome.value +", mas essa área está em desenvolvimento");
  }else {
    //mostrar mensagem generica
    alert("Obrigado , mas essa área está em desenvolviment");
  }

}
