import { verificarTema, trocarTema } from "../../helpers/tema-helper.js";

const botaoTema = document.querySelector(".tema button")
const body = document.querySelector ("body")
const assunto = localStorage.getItem("assunto")

let quiz = {}
let ponto = 0
let pergunta = 1
let resposta = ""
let idInputResposta = ""

botaoTema.addEventListener("click", () => {
     trocarTema(body, botaoTema)
})

verificarTema(body, botaoTema)


function alterarAssunto() {
     const divIcone = document.querySelector(".assunto_icone")
     const iconImg = document.querySelector(".assunto_icone img")
     const assuntoTitulo = document.querySelector(".assunto h1")

     divIcone.classList.add(assunto.toLowerCase())
     iconImg.setAttribute("src", `../../assets/images/icon-${assunto.toLowerCase()}.svg`);
     iconImg.setAttribute("alt", `ícone de ${assunto}`);
     assuntoTitulo.innerText = assunto
}


async function buscarPerguntas() {
     const urlDados = "../../data.json";


     await fetch(urlDados)
     .then(resposta => resposta.json())
     .then(dados => {
         quiz = dados.quizzes.find(item => item.title === assunto);
     });

 console.log(quiz);
}

function montarPergunta () {
     const main = document.querySelector("main")
    
     main.innerHTML = `
     <section class="pergunta">
            <div> 
             <p>Questão ${pergunta} de 10</p>

                <h2>${alterarSinais(quiz.questions[pergunta-1].question)}</h2>
            </div>
            <div class="barra_progresso">
                <div style="width: ${pergunta * 10}%+"></div>
            </div>
        </section>

        <section class="alternativas">
            <form action="">
            <label for="alternativa_a">
                <input type="radio" id="alternativa_a" name="alternativa" value="${alterarSinais(quiz.questions[pergunta-1].options[0])}">

                <div>
                    <span>A</span>
                    ${alterarSinais(quiz.questions[pergunta-1].options[0])}
                </div>
            </label>

                <label for="alternativa_b">
                    <input type="radio" id="alternativa_b" name="alternativa" value="${alterarSinais(quiz.questions[pergunta-1].options[1])}">
                    
                    <div>
                        <span>B</span>
                        ${alterarSinais(quiz.questions[pergunta-1].options[1])}
                    </div>
                </label>

                <label for="alternativa_c">
                    <input type="radio" id="alternativa_c" name="alternativa" value="${alterarSinais(quiz.questions[pergunta-1].options[2])}">

                    <div>
                        <span>C</span>
                        ${alterarSinais(quiz.questions[pergunta-1].options[2])}
                    </div>

                </label>

                    <label for="alternativa_d">
                        <input type="radio" id="alternativa_d" name="alternativa" value= "${alterarSinais(quiz.questions[pergunta-1].options[3])}">

                        <div>
                            <span>D</span>
                            ${alterarSinais(quiz.questions[pergunta-1].options[3])}
                        </div>
                    </label>
            </form>

            <button>Enviar</button>
        </section>
     `
}

function alterarSinais(texto) {
    return texto.replace(/</g, "&lt;").replace(/>/g, "&gt;")
}

function guardarResposta(evento){
    resposta = evento.target.value
    idInputResposta = evento.target.id
}

async function iniciar() {
     alterarAssunto()
     await buscarPerguntas()
     montarPergunta()

     const inputResposta = document.querySelectorAll(".alternativas input")
     inputResposta.forEach(input => {
        input.addEventListener("click", )
     })

}



iniciar()