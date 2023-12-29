
const number1 = document.querySelector(".number1")
const number2 = document.querySelector(".number2")
const number3 = document.querySelector(".number3")
const maxNumberSpan = document.querySelector(".span-3numbers")
const button = document.querySelector(".btn-3numbers")

button.addEventListener("click", findMaxNumber)

function findMaxNumber() {
    const array = [number1.value, number2.value, number3.value]
    let maxNumber = 0
    for (let i = 0; i < array.length; i+=1) {
        if (array[i] > maxNumber) {
            maxNumber = array[i]
        }      
    }
    maxNumberSpan.textContent = maxNumber
}





















