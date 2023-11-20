function carregar() {
  let msg = document.getElementById("msg");
  let img = document.getElementById("imagem");
  let data = new Date();
 let hora = data.getHours();
 

  msg.innerHTML = `Agora são ${hora} horas.`;

  if (hora >= 0 && hora < 12) {
    //BOM DIA
    img.src = "./img/manha.png";
    document.body.style.background = "#FEBA11";
  } else if (hora >= 12 && hora < 18) {
    //BOA TARDE
    img.src = "./img/tarde.png";
    document.body.style.background = "#F26201";
  } else {
    //BOA NOITE
    img.src = "./img/noite.png";
    document.body.style.background = "#463554";
  }
}
