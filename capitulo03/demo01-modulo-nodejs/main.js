const Matematica =require('./matematica'  )

//console.log(Matematica.somar(2,3))

const realine=require('readline')

const terminal=realine.createInterface({
    input:process.stdin,
    output:process.stdout
})

terminal.question('Insira primeiro valor \n',v1=>{
    terminal.question('insira o segundo valor\n',v2=>{
        terminal.question('insira a operacao\n',operacao=>{
            const resultado=Matematica[operacao](
                Number(v1),Number(v2)
            )
            console.log(`
                Operação ${operacao} de ${v1} e ${v2} é ${resultado}`)
        })
    })
    terminal.close()
})

