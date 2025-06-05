window.onload=()=>{
    console.log('tela caregou')

    const btn=document.getElementById('btnCalcular')
    btn.onclick=click

    function valorInput(id){
        const item=document.getElementById(id)
        return item.value
    }

    function click(){
        const tipoOperacao=valorInput('tipoOperacao')
        const valor1=valorInput('valor1')
        const valor2=valorInput('valor2')
        const resultado=Matematica[tipoOperacao](valor1,valor2)
        document.getElementById('resultado').innerText=`A operação de ${tipoOperacao}, ${valor1} por ${valor2} é ${resultado}`
    }
    
}