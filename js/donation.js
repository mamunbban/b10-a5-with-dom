// Donate Noakhali
document.getElementById('btn-donate-noakhali')
         .addEventListener('click', function(event){
            event.preventDefault()

            

     const donateNumber = getInputFieldById('input-donate-noakhali')

     const mainBalance = getTextValueById('main-balance-noakhali')

     if(isNaN(donateNumber) || donateNumber <= 0 ){
      
      alert('invalid input number')
      return false
     }
     else{
      document.getElementById('my_modal_1').showModal()
     }

     const newBalance =  donateNumber + mainBalance 
     document.getElementById('main-balance-noakhali').innerText = newBalance
    

     
     const dynamicBalance = getTextValueById('dynamic-balance')
     const newBalanceFinal = dynamicBalance - donateNumber
    
    
    
     document.getElementById('dynamic-balance').innerText = newBalanceFinal
    
    
})

// Donate Feni 

document.getElementById('btn-donate-feni')
      .addEventListener('click', function(event){
         event.preventDefault()
        
         const donateNumber = getInputFieldById('input-donate-feni')
         const mainBalance = getTextValueById('main-balance-feni')

         if(isNaN(donateNumber) || donateNumber <= 0 ){
      
            alert('invalid input number')
            return false
           }
           else{
            document.getElementById('my_modal_1').showModal()
           }

         const newBalance = donateNumber + mainBalance
         document.getElementById('main-balance-feni').innerText = newBalance

         const dynamicBalance = getTextValueById('dynamic-balance')
     const newBalanceFinal = dynamicBalance - donateNumber
     document.getElementById('dynamic-balance').innerText = newBalanceFinal




      })

      // Donate Quota Movement 

document.getElementById('btn-donate-quota')
.addEventListener('click', function(event){
   event.preventDefault()
  
   const donateNumber = getInputFieldById('input-donate-quota')
   const mainBalance = getTextValueById('main-balance-quota')

   if(isNaN(donateNumber) || donateNumber <= 0 ){
      
      alert('invalid input number')
      return false
     }
     else{
      document.getElementById('my_modal_1').showModal()
     }

   const newBalance = donateNumber + mainBalance
   document.getElementById('main-balance-quota').innerText = newBalance

   const dynamicBalance = getTextValueById('dynamic-balance')
const newBalanceFinal = dynamicBalance - donateNumber
document.getElementById('dynamic-balance').innerText = newBalanceFinal




})