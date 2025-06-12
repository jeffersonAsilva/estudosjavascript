function onLoad() {
    //console.log('carregou a tela',Tela,JogoDaMemoria)
    const dependencias={

        tela:Tela ,//a classe Tela é global
        util:Util //classe global
    }
    const jogoDaMemoria= new  JogoDaMemoria(dependencias)
    jogoDaMemoria.inicializar()

}



window.onload=onLoad