//Function to altern to the dark theme
let html = document.querySelector("html")
let checkbox = document.querySelector("#switch") 
//light it's like a interruptor, starts with lights on = 1
let light = 1  

checkbox.addEventListener("change", () => {
    html.classList.toggle("dark-mode")   
})

//Onclick that verify if the 'lights' is turn on or turn off
function changeIcon(){
    if(light == 1){
        document.getElementById("moon-icon").innerHTML="wb_sunny"
        light = 0
    }else{
        document.getElementById("moon-icon").innerHTML="nightlight_round"
        light = 1
    }
}

//Getting the currently currency to show the cotation
function getCurrency(){
    let select = document.getElementById("currency-option")
    let option = select.options[select.selectedIndex]
    
    document.getElementById("currency-value").value = option.value
}
//Calling the function because the initial value of input is empty.
getCurrency()

//Clear the inputs values and the div that print the results
function clearInputs(){
    document.querySelector("#first-value").value = ""
    document.querySelector("#second-value").value = ""

    document.querySelector("#print-result-text").innerHTML = ""
    document.querySelector("#print-result-value").innerHTML = ""
}

//Getting values and currency to convert
function convert(){
    let firstInputValue = document.querySelector("#first-value").value

    let selectFirstCurrencyOption = document.querySelector("#first-currency-option")
    let firstOptionValue = selectFirstCurrencyOption.options[selectFirstCurrencyOption.selectedIndex].value
    let firstOptionText = selectFirstCurrencyOption.options[selectFirstCurrencyOption.selectedIndex].text
    
    let selectSecondCurrencyOption = document.querySelector("#second-currency-option")
    let secondOptionValue = selectSecondCurrencyOption.options[selectSecondCurrencyOption.selectedIndex].value
    let secondOptionText = selectSecondCurrencyOption.options[selectSecondCurrencyOption.selectedIndex].text
    
    if(firstInputValue > 0){
        let printResultText = document.querySelector("#print-result-text")
        let printResultValue = document.querySelector("#print-result-value")
        let multiple = 0
        let convertedValue = 0

        switch(firstInputValue > 0){
            case firstOptionValue > secondOptionValue:

                multiple = firstOptionValue / secondOptionValue
                convertedValue = firstInputValue * multiple
                document.querySelector("#second-value").value = convertedValue.toFixed(2)

                printResultText.innerHTML = `${firstInputValue} ${firstOptionText} igual a`  
                printResultValue.innerHTML = ` ${convertedValue.toFixed(2)} ${secondOptionText}`
                break;

            case secondOptionValue > firstOptionValue:

                multiple = firstOptionValue / secondOptionValue
                convertedValue = firstInputValue * multiple
                document.querySelector("#second-value").value = convertedValue.toFixed(2)

                printResultText.innerHTML = `${firstInputValue} ${firstOptionText} é igual a`  
                printResultValue.innerHTML = ` ${convertedValue.toFixed(2)} ${secondOptionText}`
                break;

            case firstOptionValue == secondOptionValue:

                multiple = firstOptionValue / secondOptionValue
                convertedValue = firstInputValue * multiple
                document.querySelector("#second-value").value = convertedValue.toFixed(2)

                printResultText.innerHTML = `${firstInputValue} ${firstOptionText} é igual a`  
                printResultValue.innerHTML = ` ${convertedValue.toFixed(2)} ${secondOptionText}`
                break;

            default:
                break;        
        }
    }else{
        swal({
            title: "Não foi possível converter",
            text: "Insira um valor maior que 0 (zero)",
            icon: "error"
        })
        
        document.querySelector("#first-value").value = ""
        document.querySelector("#second-value").value = ""
    }
}
