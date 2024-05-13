var valor1
var valor2
if (valor2 == undefined){
    valor2 = ""
}

function deleteValor(array){
    let a = array.pop(array[array.length])
    document.getElementById('output_bar').innerText = array.join("")
    return array
}

function exibeNumeros(ident){
    teclado.forEach(macaco => 
        macaco.addEventListener('click', function(){
            event.preventDefault()
            valor.push(teclado.indexOf(macaco) + 1)
            document.getElementById(ident).innerText = valor.join("")
            console.log(document.getElementById(ident).innerText)
            document.getElementById('tecla_limpar').addEventListener('click', function(){
                deleteValor(valor)
            })
        }))
}


const teclado = [document.getElementById('tecla_1'),
document.getElementById('tecla_2'), document.getElementById('tecla_3')
]

var valor = [] 

exibeNumeros('output_bar')

document.getElementById('tecla_apagar').addEventListener('click', function(){
    deleteValor(valor)
})


document.getElementById('soma').addEventListener('click', function(){
    document.getElementById('output_bar').innerText = valor.join("") + '+'
    valor.push('+')
    exibeNumeros('output_bar2')
})

document.getElementById('resultado').addEventListener('click', function(){
    event.preventDefault()
    valor1 = parseInt(document.getElementById('output_bar').innerText)
    console.log(valor1)
    valor2 = parseInt(document.getElementById('output_bar2').innerText)
    console.log(valor2)
    document.getElementById('output_bar').innerText = valor1 + valor2
})

/*document.getElementById('soma').addEventListener('click', function(){
    document.getElementById('output_bar').innerText + '+'   
})*/