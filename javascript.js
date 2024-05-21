const teclado = [document.getElementById('tecla_1'),
document.getElementById('tecla_2'), document.getElementById('tecla_3')
]
var valor1 = []
var num1
var num2
var result

function deleteValor(array){
    let a = array.pop()
    document.getElementById('output_bar').innerText = array.join("")
}

document.getElementById('tecla_limpar').addEventListener('click', function(){
    valor1 = []
    document.getElementById('output_bar').innerText = valor1.join("")
})

teclado.forEach(macaco => 
    macaco.addEventListener('click', function(){
        event.preventDefault()
        valor1.push(teclado.indexOf(macaco) + 1)
        document.getElementById('output_bar').innerText = valor1.join("")
        console.log(document.getElementById('output_bar').innerText)
}))

document.getElementById('tecla_apagar').addEventListener('click', function(){
    deleteValor(valor1)
})


document.getElementById('soma').addEventListener('click', function(){
    document.getElementById('operat').innerText = '+'
    num1 = parseInt(valor1.join(""))
    console.log(num1)
    valor1 = []
    document.getElementById('output_bar').innerText = valor1.join("")
    console.log(valor1[0])
    document.getElementById('result').innerText = num1
})

document.getElementById('resultado').addEventListener('click', function(){
    event.preventDefault()
    document.getElementById('output_bar').innerText = ''
    num2 = parseInt(valor1.join(""))
    console.log(num2)
    result = num1 + num2
    document.getElementById('result').innerText = `${num1} + ${num2} = ${result}`
})