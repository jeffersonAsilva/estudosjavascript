const readLine=require('readline')

const terminal=readLine.createInterface({
    input:process.stdin,
    output:process.stdout
})

//terminal.question('qual seu nome?',(msg)=>{
//    console.log('vc escreveu',msg)
//    terminal.close()
//})

const questoes={
    menuInicial:{
        texto:textoMenu,
        fn:menuInicial
    }
}

function menuInicial(msg) {
    const opcao=Number(msg)
    if(isNaN(opcao)){
        throw new Error("Não é um numero",msg)
        
    }
    switch (opcao) {
        case 0:
            console.log('saindo....')
            terminal.close()
            break;
        case 1:
            console.log('mnu inicial')
            break;
    
        default:
            console.log('opcao invalida.')
            terminal.close()
            break;
    }
}

terminal.question(
    questoes.menuInicial.texto,
    questoes.menuInicial.fn
)
