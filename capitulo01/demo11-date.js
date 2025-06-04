//meses começam do zero
const dataaniversario=new Date(2020,0,20)
//console.log(dataaniversario)

const primeiraDataDoJS=new Date(0)
//console.log(primeiraDataDoJS)

const hoje= new Date()
//console.log(hoje.toString())
//console.log(hoje.toLocaleDateString())

//formato global recomendado!
//console.log(hoje.toISOString())

const dia=hoje.getDate()

console.log(`Dia :${hoje.getDate()}
            Mês :${hoje.getMonth()}
            Ano:${hoje.getFullYear()}
            Hora:${hoje.getHours()}
            Minuto:${hoje.getMinutes()}
            Segundos:${hoje.getSeconds()}`)