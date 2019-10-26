// const clickingArea - Variabila JavaScript
// document.getElementById() - selecteaza elementul din HTML cu id-ul clickingArea
// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
// https://www.w3schools.com/jsref/met_document_getelementbyid.asp

// document.getElementsByClassName() - selecteaza elementul din HTML dupa clasa increment-click-value
// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
// https://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp

// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// https://www.w3schools.com/jsref/met_document_addeventlistener.asp

// https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
// https://www.w3schools.com/jsref/prop_element_classlist.asp
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
