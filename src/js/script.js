const inputReais = document.getElementById('inputReais')

const inputRange = document.getElementById('inputRange')
const rangeOutput = document.querySelector('.rangeOutput').innerHTML = inputRange.value + '%'

const out1 = document.querySelector('#outputTip')
const out2 = document.querySelector('#outputBill')

out1.disabled = true;
out2.disabled = true;

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

//MOBILE

inputRange.addEventListener('change', function () {
    clearInterval(interval)

    interval = setInterval(() => {
        document.querySelector('.rangeOutput').innerHTML = inputRange.value + '%'
    }, 10)
})

inputRange.addEventListener('touchmove', function () {
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







