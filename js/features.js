document.getElementById('show-donate-form')
      .addEventListener('click', function(){
        showSectionById('donate-form')
        showButtonBg('show-history-data')
      })

document.getElementById('show-history-data')
          .addEventListener('click', function(){
            showSectionById('history-form')
            showButtonBg('show-donate-form')

})


