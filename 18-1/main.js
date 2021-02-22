
const btn = document.querySelector('.btn');
const printSmile = document.querySelector('.smiley');
const num = document.querySelector('.num');

btn.addEventListener('click', () => {
        const input = parseInt(num.value);
        printSmile.innerHTML = "";
         if(isNaN(input)){
            document.querySelector('.msg').innerHTML = "wrong";
        }
         else{
            for(let i = 0; i < input; i++){
                let img = document.createElement("img");
                img.src = "./smileyFace.jpg"
                let li = document.createElement("li");
                li.appendChild(img);
                printSmile.appendChild(li);
            }
        }
    });