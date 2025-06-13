//metodos estáticos nao podem acessar o this
//por isso, nao vamos colocar util no construtor
const util=Util

const ID_CONTEUDO='conteudo'
const ID_BTN_JOGAR='jogar'
const ID_MENSAGEM='mensagem'
const CLASSE_INVISIBLE='invisible'
const ID_CARREGANDO='carregando'
const ID_CONTADOR='contador'
const ID_MOSTRARTUDO='mostrarTudo'
const MENSGAGENS={
  sucesso:{
     texto:'Combinação correta !',
     classe:'alert-success'
  },
  erro:{
    texto:'Combinação incorreta',
    classe:'alert-danger'
  }
}
class Tela {
   static obterCodigoHtml(item) {
    return `
            <div class="col-md-3">
             <div class="card" style="width: 50%;"onclick="window.verificarSelecao('${item.id}','${item.nome}')" >
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

  static exibirHerois(nomeHeroi,img){
    const elementosHtml=document.getElementsByName(nomeHeroi)
    //para cada elemento encontrado na tela, vamos alterar
    //para a imagem inicial dele
    //com o forEach, para cada item, dentro dos () setamos o valor de imagem
    elementosHtml.forEach(item=>(item.src=img))
  }

  static async exibirMensagem(sucesso=true){
    const elemento=document.getElementById(ID_MENSAGEM)
    if(sucesso){
      elemento.classList.remove(MENSGAGENS.erro.classe)
      elemento.classList.add(MENSGAGENS.sucesso.classe)
      elemento.innerText=MENSGAGENS.sucesso.texto
    }else{
      elemento.classList.remove(MENSGAGENS.sucesso.classe)
      elemento.classList.add(MENSGAGENS.erro.classe)
      elemento.innerText=MENSGAGENS.erro.texto
    }
    elemento.classList.remove(CLASSE_INVISIBLE)
    await util.timeout(2000)
    elemento.classList.add(CLASSE_INVISIBLE)

  }

  static exibirCarregando(mostrar=true){
    const carregando=document.getElementById(ID_CARREGANDO)
    if(mostrar){
      carregando.classList.remove(CLASSE_INVISIBLE)
      return
    }
    carregando.classList.add(CLASSE_INVISIBLE)
  }
  static iniciarContador(){
    let contarAte=3
    const elementoContador=document.getElementById(ID_CONTADOR)
    //vamos substituir o texto começando $$contador segundos
    //onde está o $$contador adicionaremos o valor
    const indentificadorNoTexto='$$contador'
    const textoPadrao=` Começando em ${indentificadorNoTexto} segundos...`
    //vamos criar uma função em linha para autalizar o texto
    //a cada segundo
    const atualizarTexto=()=>
      (elementoContador.innerHTML=textoPadrao.replace(indentificadorNoTexto,contarAte--))

    atualizarTexto()
    //cada segundo vai chamar a funçao atualizar texto
    //essa função vai substituir o $$contador pelo `contarAt` 
    //diminuindo o valor
    //retornamos o idDoIntervalo para para ele mais tarde
    const idIntervalo=setInterval(atualizarTexto,1000)
    return idIntervalo

  }

  static limparContador(idIntervalo){
    clearInterval(idIntervalo)
    document.getElementById(ID_CONTADOR).innerHTML=' '
  }

  static configurarBotaoMostrarTudo(funcaoOnclick){
    const btnMostrarTudo=document.getElementById(ID_MOSTRARTUDO)
    btnMostrarTudo.onclick=funcaoOnclick
  }
    
}
