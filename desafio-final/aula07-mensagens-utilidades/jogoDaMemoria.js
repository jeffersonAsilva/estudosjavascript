class JogoDaMemoria{
    constructor({tela,util}){
        this.tela=tela
        this.util=util
        this.heroisIniciais=[
            {img:'./arquivo/batman.png',nome:'batman'},
            {img:'./arquivo/flash.png',nome:'flash'},
            {img:'./arquivo/mulher.png',nome:'mulher'},
            {img:'./arquivo/robin.png',nome:'robin'},
        ]
        this.iconePadrao='./arquivo/ninja.png',
        this.heroisEscondidos=[]
        this.heroisSelecionados=[]
        
    }

    //para usar this, nao podemos usar static
    inicializar(){

        //vai pegar todas as funções da classe tela
        //colocar todos os herois na tela
        this.tela.atualizarImagens(this.heroisIniciais)
        //força a tela a usar o THIS de jogo da memoria
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
        this.tela.configurarBotaoVerificarSelecao(this.verificarSelecao.bind(this))
    }

   async embaralhar(){
        const copias=this.heroisIniciais
        //duplicar os itens
        .concat(this.heroisIniciais)
        //entrar em cada item e criar um id aletaorio
        .map(item=>{
        return Object.assign({},item,{id:Math.random()/0.5})
        })
        //ordernar
        .sort(()=>Math.random() - 0.5)

        this.tela.atualizarImagens(copias)
        this.tela.exibirCarregando()
        //vamos esperar 1 segundo para atualizar a tela
       await this.util.timeout(1000)
       this.esconderHerois(copias)
       this.tela.exibirCarregando(false)
    }

    esconderHerois(herois){
        //vamos trocar a imagem de todos os herois existentes
        //pelo icone padrão
        //como fizemos no construtor, vamos extrair somente o necessario
        //usando a sintaxe ({cheve:1}) estamos falando que vamos retornar
        //oque tiver dentro dos parenteses
        //quando nao usamos :(exemplo do id), JS entende que o nome
        //é o mesmo do valor. Ex. id:id, vira id,
        const heroisOcultos=herois.map(({nome,id})=>({
            id,
            nome,
            img:this.iconePadrao
        }))
        //atualizamos a tela com os herois ocultos
        this.tela.atualizarImagens(heroisOcultos)
        //guardamos os herois para trabalhar com eles depois
        this.heroisOcultos=heroisOcultos
    }
    exibirHerois(nomeHeroi){
        //vamos procurar esse heroi pelo nome em nossos heroisIniciais
        //vamos obter somente a imagem dele
        const {img}=this.heroisIniciais.find(({nome})=>nomeHeroi===nome)
        //vamos criar a funcao na tela, para exibir somente o heroi selecionado
        this.tela.exibirHerois(nomeHeroi,img)
    }
    verificarSelecao(id,nome){
        const item={id,nome}
        //vamos verificar a quantidade de herois selecionados
        //e tomar ação se escolheu certo ou errado
        const heroisSelecionados=this.heroisSelecionados.length
        switch (heroisSelecionados) {
            case 0:
                //adiciona a escolha a lista,esperando pela proxima
                //clicada
                this.heroisSelecionados.push(item)
                break;
            case 1:
                //se a  quantidade de escolhidos for 1, significa
                //que o usuario só pode escolher mais um
                //vamos obter o primeiro item da lista
                const [opcao1]=this.heroisSelecionados
                //zerar itens para não selecionar mais de dois
                this.heroisSelecionados=[]
                //conferimos se os nomes e ids batem conforme esperado
                if(opcao1.nome===item.nome && opcao1.id !==item.id){
                    this.exibirHerois(item.nome)
                    //como padrão true não precisa passar nada
                    this.tela.exibirMensagem()
                    //para execução
                    return
                }
                    
                
               this.tela.exibirMensagem(false)
                //fim do case
               
                break;


        
            default:
                break;
        }
    }

    jogar(){
        this.embaralhar()
    }
}