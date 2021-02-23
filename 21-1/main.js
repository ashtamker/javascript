const age = document.querySelector('.ans');
const msg = document.querySelector('.msg');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () =>{
    if(age.value >= 18){
        msg.textContent = 'you can drink appear 🍺';
    }
    else{
        msg.textContent = 'you’re too young';
    }
})

