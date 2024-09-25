// Donate Noakhali
document.getElementById('btn-donate-noakhali')
         .addEventListener('click', function(event){
            event.preventDefault()

            

     const donateNumber = getInputFieldById('input-donate-noakhali')

     const mainBalance = getTextValueById('main-balance-noakhali')

     if(isNaN(donateNumber) || donateNumber <= 0 ){
      
      
      alert('invalid donate amount')
      return false
     }
     
     else{
      document.getElementById('my_modal_1').showModal()
     }

     const newBalance =  donateNumber + mainBalance 
     document.getElementById('main-balance-noakhali').innerText = newBalance

     const dynamicBalance = getTextValueById('dynamic-balance')
     const newBalanceFinal = dynamicBalance - donateNumber

     if(donateNumber > newBalanceFinal){
      alert('insufficient balance')
      
      document.getElementById('my_modal_1').classList.add('hidden')
      return

   }
   else{
       //add to transaction history
       const p = document.createElement('p');
       p.style.background = 'gray'
       p.style.color = 'white'
       p.style.padding = '12px'
       p.style.width = 'fit-content'
       p.style.margin = 'auto'
       p.style.alignContent = 'center'
       p.innerText = ` ${donateNumber} Taka is Donated For famine-2024 at Noakhali, Bangladesh
       
       `;
       const date = new Date().toLocaleString();
       const update = document.createElement('li');
       update.innerText = `${date}`;
       p.appendChild(update)

       //should be a common function
       document.getElementById('history-container').appendChild(p)
   }
    
    
    
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
     
     if(donateNumber > newBalanceFinal){
      alert('insufficient balance')
      
      document.getElementById('my_modal_1').classList.add('hidden')
      return

   }
   else{
       //add to transaction history
       const p = document.createElement('p');
       p.style.background = 'gray'
       p.style.color = 'white'
       p.style.padding = '12px'
       p.style.width = 'fit-content'
       p.style.margin = 'auto'
       p.style.alignContent = 'center'
       p.innerText = ` ${donateNumber} Taka is Donated For famine-2024 at Feni, Bangladesh
       
       `;
       const date = new Date().toLocaleString();
       const update = document.createElement('li');
       update.innerText = `${date}`;
       p.appendChild(update)

       //should be a common function
       document.getElementById('history-container').appendChild(p)
   }

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

if(donateNumber > newBalanceFinal){
   alert('insufficient balance')
   document.getElementById('my_modal_1').classList.add('hidden')
   return
   
   

}
else{
    //add to transaction history
    const p = document.createElement('p');
    p.style.background = 'gray'
    p.style.color = 'white'
    p.style.padding = '12px'
    p.style.width = 'fit-content'
    p.style.margin = 'auto'
    p.style.alignContent = 'center'
    p.innerText = ` ${donateNumber} Taka is Donated For Aid for Injured in the Quota Movement , Bangladesh
    
    `;
    const date = new Date().toLocaleString();
    const update = document.createElement('li');
    update.innerText = `${date}`;
    p.appendChild(update)

    //should be a common function
    document.getElementById('history-container').appendChild(p)
}

document.getElementById('dynamic-balance').innerText = newBalanceFinal




})