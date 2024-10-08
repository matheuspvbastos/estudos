function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora <= 12) {
        //console.log('Bom dia!')
        img.src = 'img/manha.jpg'
        document.body.style.background = 'yellow'
    
    } else if (hora >= 12 && hora <= 18) {
        //console.log('Boa tarde!')
        img.src = 'img/tarde.jpg'
        document.body.style.background = 'orange'
        
    
    } else {
       //console.log ('Boa noite!')
       img.src = 'img/noite.jpg'
       document.body.style.background = 'black'


    } 
}
