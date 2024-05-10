function deleteValor(array){
    let a = array.pop(array[array.length])
    document.getElementById('output_bar').innerText = array.join("")
    return array
}

const teclado = [document.getElementById('tecla_1'),
document.getElementById('tecla_2'), document.getElementById('tecla_3')
]

var valor = [] 

teclado.forEach(macaco => 
    macaco.addEventListener('click', function(){
        event.preventDefault()
        valor.push(teclado.indexOf(macaco) + 1)
        document.getElementById('output_bar').innerText = valor.join("")
        document.getElementById('tecla_limpar').addEventListener('click', function(){
            deleteValor(valor)
        })
    }))


document.getElementById('tecla_apagar').addEventListener('click', function(){
    deleteValor(valor)
})

/*document.getElementById('soma').addEventListener('click', function(){
    document.getElementById('output_bar').innerText + '+'   
})*/