var previsaoSignos = [];
var imagemSignosURL = [];
var nomeSignos = [];
carregaDadosSignos();
function carregaDadosSignos() {
  const data = new Date();
  let dia = "0" + data.getDate();
  let mes = "0" + (data.getMonth() + 1);
  dia = dia.slice(-2)
  mes = mes.slice(-2)

  let url = `https://www.metropoles.com/vida-e-estilo/horoscopo/horoscopo-2022-confira-a-previsao-de-hoje-${dia}-${mes}-para-seu-signo/`

  fetch(url)
    .then(Response => Response.text())
    .then(result => webScraping(result, "text/html"))
    .catch(error => console.error("Error: " + error));
}

function webScraping(string_html, content_type) {
  let parser = new DOMParser();
  let doc = parser.parseFromString(string_html, content_type);
  var pai = doc.querySelector(".m-horoscope-block");
  for (var i = 0; i < pai.children.length; i++) {
    if (pai.children[i].querySelector(".m-sign-info") != null) {
      previsaoImagem = pai.children[i].querySelector(".columns img").getAttribute("data-src");
      previsaoSigno = pai.children[i].querySelector(".m-sign-info h3").innerHTML;
      imagemSignosURL.push(previsaoImagem);
      nomeSignos.push(previsaoSigno);
      d = pai.children[i].querySelector(".m-sign-info").querySelectorAll("p");
      for (var j = 0; j < d.length; j++) {
        if (d[j].innerHTML != "") {
          d[j].querySelector("a").remove()
          previsaoSignos.push(d[j].innerHTML);
        }
      }
    }
  }
  const imagemSignoAtual = document.querySelector(".imagem-signo")
  const nomeSignoAtual = document.querySelector(".nome-signo")
  imagemSignoAtual.setAttribute("src", imagemSignosURL[signoAtual]);
  nomeSignoAtual.innerHTML = nomeSignos[signoAtual];
}

