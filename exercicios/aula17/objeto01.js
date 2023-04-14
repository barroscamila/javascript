let amigo = {
nome: 'José', 
sexo: 'M', 
peso: 85.4,
engordar(p){
    if (p == 0) {
        console.log('Não engordou.')
    } else {
        console.log('Engordou.')
        this.peso += p
    }
}
}

amigo.engordar(0.5)
console.log(`${amigo.nome} pesa ${amigo.peso} Kg.`)