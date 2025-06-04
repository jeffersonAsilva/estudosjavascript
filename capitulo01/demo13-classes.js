class Heroi{
   atacar() {
        console.log('atacou !')
    }
    defender(){
        console.log('defendeu !!')
    }
}

const heroi=new Heroi()
//heroi.atacar()
//heroi.defender()

//usando construtor

class Heroi2 {
    constructor(nome,idade) {
        this.nome=nome
        this.idade=idade
    }
    atacar(){
        console.log(`
            A ${this.nome} atacou !`)
    }
}

const heroi2=new Heroi2('drow', 20)
//heroi2.atacar()

//helpers

class Heroi3{
    static obterAnoNascimento(idade){
        return 2025-idade
    }
}

console.log(`
     data nascimento heroi ${Heroi3.obterAnoNascimento(41)}`)
