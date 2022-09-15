document.addEventListener("DOMContentLoaded", function () {

  carregaDadosSignos()
  tempo = setInterval(teste, 20);
  rotate = 0 - 15;
  document.getElementById("img").style.transform = "rotate(" + rotate + "deg)";

  signos = nomeSignos
  var indiceSigno = 0;
  var contaSigno = 0;
  var signoDoAniversario;

  function teste() {
    const mostraSigno = document.querySelector(".nome-signo");
    if (rotate == 360) { rotate = 0 }
    rotate = rotate - 1;
    document.getElementById("img").style.transform = "rotate(" + rotate + "deg)";
    mostraSigno.innerHTML = signos[indiceSigno];
    if (signoDoAniversario == indiceSigno) {
      const frase = document.querySelector(".frase");
      frase.classList.remove("oculto");
      parar();
    }
    contaSigno = contaSigno + 1;
    if (contaSigno == 30) {
      indiceSigno = indiceSigno + 1;
      if (indiceSigno == 12) {
        indiceSigno = 0;
      }
      contaSigno = 0;
    }
  }

  document.getElementById("enviar").addEventListener("click", function () {
    const valorData = document.querySelector(".dataNascimento").value;
    const [year, month, day] = valorData.split('-');
    const dataAniversario = new Date(+year, +month - 1, +day);
    signoDoAniversario = signoCalculo(dataAniversario);

    const previsao = document.querySelector(".previsao");
    previsao.innerHTML = (previsaoSignos[signoDoAniversario]);
    const signo = document.querySelector(".signo");
    signo.innerHTML = (nomeSignos[signoDoAniversario]);

    const enviar = document.querySelector("#enviar");
    enviar.classList.add("oculto");
    const limpar = document.querySelector("#limpar");
    limpar.classList.remove("oculto");
  });

  document.getElementById("limpar").addEventListener("click", function () {
    signoDoAniversario = - 1
    let limpando = document.querySelector(".previsao");
    limpando.innerHTML = "";
    let limpasigno = document.querySelector(".signo");
    limpasigno.innerHTML = "";
    
    
    const enviar = document.querySelector("#enviar");
    enviar.classList.remove("oculto");
    const limpar = document.querySelector("#limpar");
    limpar.classList.add("oculto");
    const limpalinha = document.querySelector(".frase")
    limpalinha.classList.add("oculto")
    tempo = setInterval(teste, 20);
  });

  function parar() {
    clearInterval(tempo);
    tempo = null;
  }
});

const modoEscuro = document.querySelector("#modoEscuro")
const html = document.querySelector("html")
modoEscuro.addEventListener("click", function () {
  html.classList.toggle("modoEscuro");
  let modoAtivo = modoEscuro.innerHTML;
  if (modoAtivo == "Modo Azul") {
    modoAtivo = "Modo Roxo"
  } else {modoAtivo = "Modo Azul"}
  modoEscuro.innerHTML = modoAtivo
  
});
