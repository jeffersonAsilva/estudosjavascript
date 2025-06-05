const textoPar='par'
const textoImpar='impar'

//for (let index = 0; index < 10; index++) {
//    const element = index %2 ===0?textoPar:textoImpar
//    console.log(`O numero ${index} e ${element}`)
//    
//}

const lista=[
    {
    id:parseInt(Math.random()*10),
    nome:'danilo',
    poder:'dev'
    },
    {
    id:parseInt(Math.random()*10),
    nome:'teresa',
    poder:'adm'
    }

]
// interação através do indice
//for (let index = 0; index < lista.length; index++) {
//    const item= lista[index];
//    
//    console.log(`
//         id:${item.id}
//         nome:${item.nome}
//         `)
//}

//for in  it atraves do indice

for (const index in lista) {
    const item=lista[index]
    console.log('Nome',item.nome)
}

//for of intereçao atraves do item nao precisa do index

for (const item of lista) {
    console.log(item.nome)
}
