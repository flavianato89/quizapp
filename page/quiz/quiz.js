import { verificarTema, trocarTema } from "../../helpers/tema-helper.js";

const botaoTema = document.querySelector(".tema button")
const body = document.querySelector ("body")

botaoTema.addEventListener("click", () => {
     trocarTema(body, botaoTema)
})

verificarTema(body, botaoTema)

const assunto = localStorage.getItem("assunto")


function alterarAssunto() {
     const divIcone = document.querySelector(".assunto_icone")
     const iconImg = document.querySelector(".assunto_icone img")
     const assuntoTitulo = document.querySelector(".assunto h1")

     divIcone.classList.add(assunto.toLowerCase())
     iconImg.setAttribute("src", `../../assets/images/icon-${assunto.toLowerCase()}.svg`);
     iconImg.setAttribute("alt",  `icone de ${assunto}`)
     assuntoTitulo.innerText = assunto
}

alterarAssunto()
