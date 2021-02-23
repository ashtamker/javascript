const form = document.querySelector('[name="verify"]');
const target = document.querySelectorAll('.text-box input');

function getInput(e){
    const input = e.target;
    if(input.nextElementSibling && input.value){
        input.nextElementSibling.focus();
    }
}

function getPaste(e) {
   const textPaste = e.clipboardData.getData('text');
   target.forEach((input, i) => {
       input.value = textPaste[i] || '';
       
   }); 
}

target[0].addEventListener('paste', getPaste)
form.addEventListener('input', getInput)






$('input.digFocus').keyup(function(){
    if ($(this).val().length==$(this).attr('maxlength')){
        $(this).next().focus();
    }
});

// target.addEventListener('paste', (event) => {
//     let paste = (event.clipboardData || window.clipboardData).getData('text');
//     paste = paste.toUpperCase();

    
// });