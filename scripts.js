// pegando o texto dentro do text area
let inputTexto = document.querySelector(".input-texto")
let traducaotexto = document.querySelector(".traducao")
let idioma = document.querySelector(".idioma")


async function traduzir() {
    // endereco do servidor com o texto que eu quero traduzir
    let endereco = "https://api.mymemory.translated.net/get?q=" +
        inputTexto.value + "&langpair=pt-BR|" + idioma.value


    // resposta do servidor
    let resposta = await fetch(endereco)

    // converto a resposta para um formato mais amigavel
    let dados = await resposta.json()

    traducaotexto.textContent = dados.responseData.translatedText

}
// textContent = conteudo do texto
function ouvirVoz() {
    // ferramnenta de transcricao de audio
    let voz = window.webkitSpeechRecognition

    // Deixando a voz pronta para uso

    let reconhecimentoVoz = new voz()

    // configurando a ferramenta
    reconhecimentoVoz.lang = "pt-BR"

    // Me avise quando ele terminou de transcrever a voz
    reconhecimentoVoz.onresult = (evento) => {
        let textoTranscricao = evento.results[0][0].transcript

        inputTexto.value = textoTranscricao
        traduzir()

    }
    reconhecimentoVoz.start()

}
// clicou no botao -> chama a funcao -> monto o enderco ->
// chamo o servidor -> peco esperar -> responde 

