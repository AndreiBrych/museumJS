window.onload = function() {
  function rewind() {
      
    const value = this.value;
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`
  }

    const progress = document.querySelector('.progress');
    const progress_vollume  = document.querySelector('.progress_vollume');
   
     progress.addEventListener('input', rewind)
     progress_vollume.addEventListener('input', rewind)
    

}

$(function () {
  $('.header_burger').click(function (event){
     $('.header_burger, .header_nav').toggleClass('active')
  })
});




