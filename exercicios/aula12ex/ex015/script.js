function verificar() {
    var data = new Date()
    var ano = data.getFullYear() //Pega o ano com os 4 digitos
    var fano = Number(document.querySelector('input#txtano').value)
    var res = document.querySelector('div#res')
    if (fano == 0 || fano > ano) {
        alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano
        var genero = ''
        var img = document.createElement('img') //Poderia ser por HTML também, mas nesse exercicio estamos inserindo atraves do JS
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagem/bebe-m.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagem/jovem-m.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagem/adulto-m.png')
            } else {
                img.setAttribute('src', 'imagem/idoso-m.png')
            }
        } else if (fsex[1].checked) { //Poderia ser apenas else
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagem/bebe-f.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagem/jovem-f.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagem/adulto-f.png')
            } else {
                img.setAttribute('src', 'imagem/idoso-f.png')
            }
        }  
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) //Adicionar um novo elemento
    }
}