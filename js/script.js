let imgCaixa = document.getElementById("imgCaixa");
let qrImagem = document.getElementById("qrImagem");
let qrTexto = document.getElementById("qrTexto");

function geradorQR() {
    // Verifica se o usuário realmente digitou algo (evita textos vazio ou apeans espaços em brancos.)
  if (qrTexto.value.trim().length > 0) {
    // Define a fonte da imagem
    qrImagem.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      encodeURIComponent(qrTexto.value);
    qrImagem.onload = function () {
      imgCaixa.classList.add("show-img");
    };
  } else {
    // Se o campo estiver vazio, esconde a caixa do QR Code
    imgCaixa.classList.remove("show-img");
    // Destaca o campo se tentar inserir algo invalido.
    qrTexto.classList.add("error");
    setTimeout(() => {
      qrTexto.classList.remove("error");
    }, 1000);
  }
}
