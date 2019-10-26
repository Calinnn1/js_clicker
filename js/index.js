const clickingArea = document.getElementById('clickingArea')
const counter = document.getElementById('counter')
const buttonIncrementClickValue = document.getElementsByClassName('increment-click-value')[0]
const buttonIdleClickValue = document.getElementsByClassName('idle-click')[0]
const clickPowerDisplay = document.getElementById('clickPower')

let clickValue = 0
let clickPower = 1

counter.innerHTML = clickValue

clickingArea.addEventListener('click', incrementOnClik)

function incrementOnClik() {
  clickValue += clickPower
  counter.innerHTML = clickValue

  if (clickValue >= 5) {
    buttonIncrementClickValue.classList.add('button-active-class')
    buttonIncrementClickValue.addEventListener('click', increaseClickPower)
  }

  if (clickValue >= 10) {
    buttonIdleClickValue.classList.add('button-active-class')
  }
}

function increaseClickPower () {
  clickPower++
  clickPowerDisplay.innerHTML = clickPower
}
