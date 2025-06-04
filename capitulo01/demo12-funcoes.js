function queDiaEhoje() {
    const data=new Date()
    console.log(`hoje é dia: ${data.getDate()}`)
}

queDiaEhoje()

function soma(valor1,valor2) {
    return valor1+valor2
}

const idade=20
const tamanho=10
const resultado=soma(idade,tamanho)

console.log('resultado: ',resultado)


const funcionario1={
    nome:'zezinho',
    desconto:0.2,
    salarioBruto:2000,
    salarioLiquido:0
}
const funcionario2={
    nome:'maria',
    desconto:0.1,
    salarioBruto:2500,
    salarioLiquido:0
}

function calcularDesconto(salarioBruto,desconto) {
    return salarioBruto-(salarioBruto*desconto)
}

funcionario1.salarioLiquido=calcularDesconto(funcionario1.salarioBruto,funcionario1.desconto)
funcionario2.salarioLiquido=calcularDesconto(funcionario2.salarioBruto,funcionario2.desconto)

console.log(`
    Salario funcionario1:${funcionario1.salarioLiquido}
    Salario funcionario2: ${funcionario2.salarioLiquido}`
    )