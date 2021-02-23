const target = document.querySelector('div.input');


$('input.digFocus').keyup(function(){
    if ($(this).val().length==$(this).attr('maxlength')){
        $(this).next().focus();
    }
});

// target.addEventListener('paste', (event) => {
//     let paste = (event.clipboardData || window.clipboardData).getData('text');
//     paste = paste.toUpperCase();

    
// });