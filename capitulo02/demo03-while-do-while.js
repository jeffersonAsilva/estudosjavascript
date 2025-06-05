let termoDeParada=true
let contador=0
while (termoDeParada) {
    termoDeParada=contador<10
    if (contador %2 ===0) {
        console.log('Numero par',contador)
    }
    contador +=1
}