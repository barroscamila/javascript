function carregar() {
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagem/fotomanha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'imagem/fototarde.png'
        document.body.style.background = '#E49F41'
    } else {
        img.src = 'imagem/fotonoite.png'
        document.body.style.background = '#004363'
    }
}

