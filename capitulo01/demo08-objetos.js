const heroi={
    nome:'Thor',
    idade:1000,
    sexo:'Masculino'
}

//console.log('nome',heroi.nome)
//console.log('idade',heroi['idade'])
//console.log('sexo',heroi.sexo)

//saber as chaves
console.log(Object.keys(heroi))

//saber valores
console.log(Object.values(heroi))

//juntar dos obj

const pessoa={
     tamanho:'10 metros'
}

const novoObj=Object.assign(heroi,pessoa)

console.log(novoObj)

//deletando uma chave do obj

delete novoObj.nome
console.log(novoObj)

