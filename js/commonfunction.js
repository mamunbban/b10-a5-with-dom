function getInputFieldById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue)
    return inputNumber
}


function getTextValueById (id){
    const textInput = document.getElementById(id).innerText;
    const textValue = parseFloat(textInput)
    return textValue
}