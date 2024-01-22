const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const imgCookie = document.querySelector("#cookie")
const divLucky = document.querySelector(".luck")
const btnResetCookie = document.querySelector("#btnResetCookie")

const luckyMensages = [
  "A vida trará coisas boas se tiver paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
  "Não compense na ira o que lhe falta na razão.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A maior de todas as torres começa no solo.",
  "Não há que ser forte. Há que ser flexível.",
  "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
  "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
  "A juventude não é uma época da vida, é um estado de espírito.",
  "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
]

imgCookie.addEventListener("click", handleOpenCookie)
btnResetCookie.addEventListener("click", toggleHide)

function randomLuckyMensage() {
  let randomMensage = Math.round(Math.random() * luckyMensages.length)
  let mensage = luckyMensages[randomMensage]
  return mensage
}

function handleOpenCookie() {
  divLucky.querySelector("p").innerHTML = randomLuckyMensage()
  toggleHide()
}

function toggleHide() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}