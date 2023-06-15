function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var foto = document.getElementById('foto');
    var ltr = document.getElementById('saudacao');
    var data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes();
    //var hora = 0

    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
    if (hora >= 5 && hora <= 12){
        img.src = 'manha.png'
        document.body.style.background = '#e6e4e7'
        ltr.innerHTML = 'Bom dia'
        
    } else if(hora >=12 && hora <= 18){
        ltr.innerHTML = 'Boa Tarde'
        img.src = 'tarde.png'
        document.body.style.background = '#dae1e9'
    }else{
        ltr.innerHTML = 'Boa Noite'
        img.src = 'noite.png'
        document.body.style.background = '#325279'
        
    }
}

// Script para o relogio

function getTime(){
    var hour = document.getElementById('hour');
    var minute = document.getElementById('minute');
    var second = document.getElementById('second');
    const time = new Date();

    const gethourRot = (360 / 12) * time.getHours();
    const getminuteRot = (360 / 60) * time.getMinutes();
    const getsecondRot = (360 / 60) * time.getSeconds();

    hour.style.transform = `rotate(${gethourRot}deg)`;
    minute.style.transform = `rotate(${getminuteRot}deg)`;
    second.style.transform = `rotate(${getsecondRot}deg)`;
    
}

setInterval(() => {
    getTime();
  }, 1000);
  
  getTime();
