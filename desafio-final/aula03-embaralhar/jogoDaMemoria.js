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
        //força a tela a usar o THIS de jogo da memoria
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
    }

    embaralhar(){
        const copias=this.heroisIniciais
        //duplicar os itens
        .concat(this.heroisIniciais)
        //entrar em cada item e criar um id aletaorio
        .map(item=>{
        return Object.assign({},item,{id:Math.random()/0.5})
        })
        //ordernar
        .sort(()=>Math.random()-0.5)

        this.tela.atualizarImagens(copias)
    }

    jogar(){
        this.embaralhar()
    }
}