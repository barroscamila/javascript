function tabuada() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        var n = Number(num.value) 
        var c = 1
        tab.innerHTML = '' // Limpar a área da tabuada
        while (c <= 10) {
            var item = document.createElement('option') // Criar um elemento HTML dentro do JS
            item.text = `${n} X ${c} = ${n*c}`
            //item.value = `tab${c}` -> Necessário para outras linguagens, a fim de identificar qual a opção selecionada
            tab.appendChild(item)
            c++
        }
    }
}