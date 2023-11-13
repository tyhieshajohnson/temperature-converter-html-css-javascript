let convertButton = document.querySelector("#convertButton")

function convert(){
    let celsius = document.querySelector("#celsius")
    let farenheit = document.querySelector('#farenheit')
    if (+celsius.value > 0){
        let converted = +celsius.value * 9/5 + 32
        farenheit.value = converted
    }else if (+farenheit.value > 0) {
        let converted = (+farenheit.value - 32) * 5/9
        celsius.value = converted
    }else {
        alert("Value Missing")
    }
};