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

function showSectionById(id){
    //all section hidden
    document.getElementById('donate-form').classList.add('hidden')
    document.getElementById('history-form').classList.add('hidden')
    

    //show the section
    document.getElementById(id).classList.remove('hidden')
    

}

function showButtonBg(id){
    document.getElementById('show-donate-form').classList.add('bg-[#B4F461]')
    document.getElementById('show-history-data').classList.add('bg-[#B4F461]')

    document.getElementById(id).classList.remove('bg-[#B4F461]')
}