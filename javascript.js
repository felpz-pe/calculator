document.getElementById('botao1').addEventListener('click', function(event){
    event.preventDefault()
    
    var valor1 = parseInt(document.getElementById('nome1').value)
    var valor2 = parseInt(document.getElementById('nome2').value)
    var somaBotao = document.getElementById('soma')
    var subtracaoBotao = document.getElementById('subtracao')
    var multipBotao = document.getElementById('multip')
    document.getElementById('display1').innerText = valor1

    somaBotao.addEventListener('click', function(){
        var valor1 = parseInt(document.getElementById('nome1').value)
        var valor2 = parseInt(document.getElementById('nome2').value)
        var resultadoSoma = valor1 + valor2
        document.getElementById('display3').innerText = `a soma dos dois valores é ${resultadoSoma}`
    })

    subtracaoBotao.addEventListener('click', function(){
        var valor1 = parseInt(document.getElementById('nome1').value)
        var valor2 = parseInt(document.getElementById('nome2').value)
        var resultadoSubtracao = valor1 - valor2
        document.getElementById('display3').innerText = `a diferença dos dois valores é ${resultadoSubtracao}`
    })

    multipBotao.addEventListener('click', function(){
        var valor1 = parseInt(document.getElementById('nome1').value)
        var valor2 = parseInt(document.getElementById('nome2').value)
        var resultadoMultip = valor1 * valor2
        document.getElementById('display3').innerText = `o produto dos dois valores é ${resultadoMultip}`
    })
})

document.getElementById('botao2').addEventListener('click', function(event){
    event.preventDefault()
    var valor2 = parseInt(document.getElementById('nome2').value)

    document.getElementById('display2').innerText = valor2
})

