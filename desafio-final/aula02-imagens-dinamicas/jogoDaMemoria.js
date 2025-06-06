class JogoDaMemoria{
    constructor({tela}){
        this.tela=tela
        this.heroisIniciais=[
            {img:'./arquivo/batman.png',nome:'batman'},
            {img:'./arquivo/flash.png',nome:'flash'},
            {img:'./arquivo/mulher.png',nome:'mulher'},
            {img:'./arquivo/robin.png',nome:'robin'},
        ]
        
    }

    //para usar this, nao podemos usar static
    inicializar(){

        //vai pegar todas as funções da classe tela
        //colocar todos os herois na tela
        this.tela.atualizarImagens(this.heroisIniciais)
    }
}