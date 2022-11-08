const inputReais = document.getElementById('inputReais')

const inputRange = document.getElementById('inputRange')
const rangeOutput = document.querySelector('.rangeOutput').innerHTML = inputRange.value + '%'

let interval;


inputRange.addEventListener('mousedown', function () {
        clearInterval(interval)

        interval = setInterval(() => {
            document.querySelector('.rangeOutput').innerHTML = inputRange.value + '%'
        }, 10)
}) 

inputRange.addEventListener('mouseup', function () {
    clearInterval(interval)

    const result = (inputRange.value * inputReais.value) / 100

    const amountTip = parseFloat(inputReais.value) + parseFloat(result)

    if(inputReais.value) {
        document.querySelector('#outputTip').value = `R$: ${result.toFixed(2)}`
    
        document.querySelector('#outputBill').value = `R$: ${amountTip.toFixed(2)}`
    } else {
        document.querySelector('#outputTip').value = `R$: ${' '}`
    
        document.querySelector('#outputBill').value = `R$: ${' '}`
    }
}) 





