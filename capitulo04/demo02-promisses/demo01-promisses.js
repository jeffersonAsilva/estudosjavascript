const readline=require('readline')
const terminal=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

function questionAsync(texto){
    return new Promise((resolve, reject) => {
        terminal.question(`${texto}\n`,resolve)
    })
}
let nome=''
let telefone=''

Promise.resolve()
.then(()=>questionAsync('Qual seu nome ?'))
.then(respostaNOme=>{
    if(!respostaNOme) throw new Error('campo vazio')
    nome=respostaNOme
})
.then(()=>questionAsync('Qual seu telefone ?'))
.then(respostaTelefone=>{
     if(!respostaTelefone) throw new Error('campo vazio')
    telefone=respostaTelefone
})
.then(()=>{
    console.log(`Nome: ${nome}, Telefone: ${telefone}`)
})
.catch(error=>{console.log('deu ruim',error.stack)})
.finally(()=>terminal.close())