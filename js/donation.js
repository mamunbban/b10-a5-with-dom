document.getElementById('btn-donate-noakhali')
         .addEventListener('click', function(event){
            event.preventDefault()

     const donateNumber = getInputFieldById('input-donate-noakhali')
    

     const dynamicBalance = getTextValueById('dynamic-balance')
     const newBalanceFinal = dynamicBalance - donateNumber
     
     document.getElementById('dynamic-balance').innerText = newBalanceFinal
    
     


     const mainBalance = getTextValueById('main-balance-noakhali')
     const newBalance =  donateNumber + mainBalance 
     

     

     console.log(newBalance)
     document.getElementById('main-balance-noakhali').innerText = newBalance
     
    



 
})