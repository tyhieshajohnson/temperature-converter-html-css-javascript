let convertButton = document.querySelector("#convertButton")

function convert(){
    let celsius = document.querySelector("#celsius")
    let fahrenheit = document.querySelector('#fahrenheit')
    if (+celsius.value > 0){
        let converted = +celsius.value * 9/5 + 32
        fahrenheit.value = converted
    }else if (+fahrenheit.value > 0) {
        let converted = (+fahrenheit.value - 32) * 5/9
        celsius.value = converted
    }else {
        alert("Value Missing")
    }
};