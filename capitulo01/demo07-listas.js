const minhaLista=[]
const minhaListaDeTarefas=[
    'mandar email',
    'colocar comida para o dog',
    'limpar o quarto'
]

console.log(minhaListaDeTarefas[0])
console.log(minhaListaDeTarefas[1])
console.log(minhaListaDeTarefas[2])

//verificar a quantidade de intens

console.log(minhaListaDeTarefas.length)

// adicionar item
minhaListaDeTarefas.push('formatar computador')
console.log(minhaListaDeTarefas)

//remover ultimo item da lista

//const ultimo=minhaListaDeTarefas.pop()

//console.log(ultimo,minhaListaDeTarefas)

//remover primeiro da lista

//const primeiro=minhaListaDeTarefas.shift()

//console.log(primeiro,minhaListaDeTarefas)

// remover item especifico

//minhaListaDeTarefas.splice(2,1)  // removendo 1 item no caso indice 2

//console.log(minhaListaDeTarefas)

const itens=[
    1,'computador',0.22
]

//verificando se é array

//console.log(Array.isArray(itens))

const lista=[5,4,3,2,1,0]

// ordenando a lista para para string tmb

//console.log(lista.sort())

//concatenar 2 array

const novo=lista.concat(itens)
//console.log(novo)

// juntar arrays em uma string

console.log(itens.join(','))

//verificar o indice de um item

const index=itens.indexOf('computador')
console.log(index)