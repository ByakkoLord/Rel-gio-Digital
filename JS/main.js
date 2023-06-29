const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')

const relogio = setInterval(function time(){
    let dateToday = new Date()
    let hr = dateToday.getHours()
    let mn = dateToday.getMinutes()
    let s = dateToday.getSeconds()

    horas.textContent = hr
    minutos.textContent = mn
    segundos.textContent = s
}, 1)