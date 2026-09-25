const time = document.querySelector(".time p")
const start = document.querySelector(".start")
const reset = document.querySelector(".reset")
const pause = document.querySelector(".pause")

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));



let timer = false
let segundos = 0

async function iniciarTimer(){
    console.log("Iniciando")
    timer = true
    while (timer) {
        segundos++
        time.innerHTML = segundos
        await sleep(1000)
    }
}

start.addEventListener("click", iniciarTimer)

pause.addEventListener("click", function() {
    console.log("Pause feito com sucesso!")
    timer = false
})

reset.addEventListener("click", function() {
    time.innerHTML = "0"
    segundos = 0
    console.log("Timer resetado com sucesso!")
})


function formatarSegundos(totalSegundos) {
  const horas = Math.floor(totalSegundos / 3600);
  const minutos = Math.floor((totalSegundos % 3600) / 60);
  const segundos = totalSegundos % 60;

  const h = String(horas).padStart(2, '0');
  const m = String(minutos).padStart(2, '0');
  const s = String(segundos).padStart(2, '0');

  return horas > 0 ? `${h}:${m}:${s}` : `${m}:${s}`;
}