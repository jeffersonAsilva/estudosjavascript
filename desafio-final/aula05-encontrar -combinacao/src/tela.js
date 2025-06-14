const ID_CONTEUDO='conteudo'
const ID_BTN_JOGAR='jogar'
class Tela {
   static obterCodigoHtml(item) {
    return `
            <div class="col-md-3">
             <div class="card" style="width: 50%;" onclick="window.verificarSelecao('${item.id}','${item.nome}')" >
                <img src="${item.img}" name=${item.nome} class="card-img-top" alt="...">
            </div>
            <br/>
        </div>
    `
}
static configurarBotaoVerificarSelecao(funcaoOnclick){
  window.verificarSelecao=funcaoOnclick
}
 static alteraConteudoHtml(codigoHtml){
    const conteudo =document.getElementById(ID_CONTEUDO)
    conteudo.innerHTML=codigoHtml
 }

  static gerarStringHTMLPelaImagem(itens){
    //para cada item da lista, vai executar a função obterCodigoHtml
    //ao final, vai concatenar tudo em uma unica string
    //muda array para string
    return itens.map(Tela.obterCodigoHtml).join('')
  }

  static atualizarImagens(itens){

    const codigoHtml=Tela.gerarStringHTMLPelaImagem(itens)
    Tela.alteraConteudoHtml(codigoHtml)
  }

  static configurarBotaoJogar(funcaoOnclick){

    const btnJogar=document.getElementById(ID_BTN_JOGAR)
    btnJogar.onclick=funcaoOnclick
  }
}