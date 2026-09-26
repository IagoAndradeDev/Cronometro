const time = document.querySelector(".time p")
const start = document.querySelector(".start")
const reset = document.querySelector(".reset")
const pause = document.querySelector(".pause")

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));


let timer = false
let segundos = 0

async function iniciarTimer(){
    console.log("Iniciando!")
    start.style.display = "none"
    pause.style.display = ""
    reset.style.display = "none"
    timer = true
    while (timer) {
        segundos++
        time.innerHTML = formatarSegundos(segundos)
        await sleep(1000)
    }
}

start.addEventListener("click", iniciarTimer)

pause.addEventListener("click", function() {
    if (pause.innerHTML == "Pause") {
        console.log("Pause feito com sucesso!")
        pause.innerHTML = "Play"
        pause.style.backgroundColor = "#2ED573"
        reset.style.display = ""
        timer = false
    } else {
        console.log("Continuando seu timer!")
        pause.innerHTML = "Pause"
        pause.style.backgroundColor = "#ff0000"
        timer = true
        iniciarTimer()
    }
})

reset.addEventListener("click", function() {
    if (timer == true) {
        console.log("Seu timer está em andamento!")
    } else {
        segundos = 0
        time.innerHTML = formatarSegundos(segundos)
        console.log("Timer resetado com sucesso!")
        start.style.display = "none"
    }
})


function formatarSegundos(totalSegundos) {
  const horas = Math.floor(totalSegundos / 3600);
  const minutos = Math.floor((totalSegundos % 3600) / 60);
  const segundos = totalSegundos % 60;

  const h = String(horas).padStart(2, '0');
  const m = String(minutos).padStart(2, '0');
  const s = String(segundos).padStart(2, '0');

  return horas > 0 ? `${h}:${m}:${s}` : `${h}:${m}:${s}`;
}