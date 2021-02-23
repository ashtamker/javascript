const select = document.querySelector('#viewImg');


select.addEventListener('change', function(event)  {
    if(event.currentTarget.checked){
    const photo =  document.createElement('img');
    document.querySelector('img').src = "https://pbs.twimg.com/profile_images/2784895493/d661cc4ed36012adeff98f6756970389.jpeg";
    }
    else{
        document.querySelector('img').src = "";

    }
})