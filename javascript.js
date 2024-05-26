const teclado = [document.querySelector('.tecla_1'),
document.querySelector('.tecla_2'), document.querySelector('.tecla_3'),
document.querySelector('.tecla_4'),  document.querySelector('.tecla_5'),
document.querySelector('.tecla_6'),  document.querySelector('.tecla_7'),
document.querySelector('.tecla_8'),  document.querySelector('.tecla_9'),
document.querySelector('.tecla_0')
]
var valor1 = []
var num1
var num2
var result

function deleteValor(array){
    let a = array.pop()
    document.querySelector('.output_bar').innerText = array.join("")
}

document.querySelector('.tecla_limpar').addEventListener('click', function(){
    valor1 = []
    document.querySelector('.output_bar').innerText = valor1.join("")
})

teclado.forEach(macaco => 
    macaco.addEventListener('click', function(){
        event.preventDefault()
        if (teclado.indexOf(macaco) === 9){
            valor1.push(0)
        } else {
            valor1.push(teclado.indexOf(macaco) + 1)
        }
        document.querySelector('.output_bar').innerText = valor1.join("")
        console.log(document.querySelector('.output_bar').innerText)
}))

document.querySelector('.tecla_apagar').addEventListener('click', function(){
    deleteValor(valor1)
})

document.querySelector('.soma').addEventListener('click', function(){
    document.querySelector('.operat').innerText = '+'
    num1 = parseInt(valor1.join(""))
    console.log(num1)
    valor1 = []
    document.querySelector('.output_bar').innerText = valor1.join("")
    console.log(valor1[0])
    document.querySelector('.result').innerText = num1
})

document.querySelector('.subtracao').addEventListener('click', function(){
    document.querySelector('.operat').innerText = '-'
    num1 = parseInt(valor1.join(""))
    console.log(num1)
    valor1 = []
    document.querySelector('.output_bar').innerText = valor1.join("")
    console.log(valor1[0])
    document.querySelector('.result').innerText = num1
})

document.querySelector('.multip').addEventListener('click', function(){
    document.querySelector('.operat').innerText = 'x'
    num1 = parseInt(valor1.join(""))
    console.log(num1)
    valor1 = []
    document.querySelector('.output_bar').innerText = valor1.join("")
    console.log(valor1[0])
    document.querySelector('.result').innerText = num1
})

document.querySelector('.split').addEventListener('click', function(){
    document.querySelector('.operat').innerText = '/'
    num1 = parseInt(valor1.join(""))
    console.log(num1)
    valor1 = []
    document.querySelector('.output_bar').innerText = valor1.join("")
    console.log(valor1[0])
    document.querySelector('.result').innerText = num1
})

document.querySelector('.potential').addEventListener('click', function(){
    document.querySelector('.operat').innerText = '^'
    num1 = parseInt(valor1.join(""))
    console.log(num1)
    valor1 = []
    document.querySelector('.output_bar').innerText = valor1.join("")
    console.log(valor1[0])
    document.querySelector('.result').innerText = num1
})

document.querySelector('.percentage').addEventListener('click', function(){
    document.querySelector('.operat').innerText = '%'
    num1 = parseInt(valor1.join(""))
    console.log(num1)
    valor1 = []
    document.querySelector('.output_bar').innerText = valor1.join("")
    console.log(valor1[0])
    document.querySelector('.result').innerText = num1
})

document.querySelector('.resultado').addEventListener('click', function(){
    event.preventDefault()
    document.querySelector('.output_bar').innerText = ''
    num2 = parseInt(valor1.join(""))
    console.log(num2)
    if (document.querySelector('.operat').innerText === '+'){
        result = num1 + num2
        document.querySelector('.result').innerText = `${num1} + ${num2} = ${result}`
    } else if (document.querySelector('.operat').innerText === '-'){
        result = num1 - num2
        document.querySelector('.result').innerText = `${num1} - ${num2} = ${result}`
    } else if (document.querySelector('.operat').innerText === 'x'){
        result = num1 * num2
        document.querySelector('.result').innerText = `${num1} x ${num2} = ${result}`
    } else if (document.querySelector('.operat').innerText === '/'){
        result = num1 / num2
        document.querySelector('.result').innerText = `${num1} / ${num2} = ${result}`
    } else if (document.querySelector('.operat').innerText === '^'){
        result = num1 ** num2
        document.querySelector('.result').innerText = `${num1} ^ ${num2} = ${result}`
    } else if (document.querySelector('.operat').innerText === '%'){
        result = (num2 / 100) * num1
        document.querySelector('.result').innerText = `${num1}% x ${num2} = ${result}`
    }
    
    
})