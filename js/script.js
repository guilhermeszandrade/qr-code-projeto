function geradorQR() {
    qrImagem.src =
    " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrTexto.value;
}

let imgCaixa = document.getElementById("imgCaixa");
let qrImagem = document.getElementById("qrImagem");
let qrTexto = document.getElementById("qrTexto");
