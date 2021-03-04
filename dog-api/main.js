const dogApi = 'https://dog.ceo/api/breeds/image/random';

const container = document.querySelector('.container');
const dogImg = document.querySelector('.dogImg');
const btn = document.querySelector('.btn');
const userChoice = document.querySelector('#userChoice');




// userChoice.addEventListener('change', () =>  {
//   let num = userChoice.value;
// console.log(num);
//     return num;
// })



async function getImg() {
    
    let callApi = await fetch(`${dogApi}/${userChoice.value}`);
    let data = await callApi.json();
    console.log(data);
    return(data.message);
};

async function placeImg() {
    let randomImg = await getImg();
    dogImg.src = randomImg;
    
}


btn.addEventListener('click', () => {
  placeImg();
})



