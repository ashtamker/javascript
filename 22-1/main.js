const name = document.querySelector('#userName');
const age = document.querySelector('#userAge');
const mail = document.querySelector('#userMail');

const btn = document.querySelector('[name="btn"]');


btn.addEventListener('click', () => {
    const info = confirm(`Please confirm the info, 
    Name: ${name.value},
    Age: ${parseInt(age.value)},
    E-mail: ${mail.value}`);
    if(info){
        window.alert("congratulations you successfully sent this form");
    }
   
})



