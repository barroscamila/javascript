function contar() {
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if ( inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) { //maneira de verificar se a variável está vazia
        Response.innerHTML = 'Impossível contar!'
        alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            alert('Passo inválido! Considerando "PASSO = 1"...')
            p = 1
        }
        if (i < f) {
            for (var c = i; c <= f; c+= p) { //contagem crescente
                res.innerHTML += `${c} \u{1F449} `
            }
        } else {
            for (var c = i; c >= f; c -= p) { //contagem regressiva
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    } 
}
