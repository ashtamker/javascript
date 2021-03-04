const norisJoke = 'https://api.chucknorris.io/jokes/random';
const category = 'https://api.chucknorris.io/jokes/categories';


const btn = document.querySelector('#btn');
const joke = document.querySelector('.print-joke');
const container = document.querySelector('.container');
const jokeCategory = document.querySelector('.joke-category');

const getCategory = async () => {
    let callApiCat = await fetch(category);
    let data = await callApiCat.json();
    
    data.forEach(async (c) => {
        let option = document.createElement('option');
        option.value = c;
        option.textContent = c;
        jokeCategory.appendChild(option)
        

    });
    let choose = jokeCategory.value;
    return choose;
}



const getJoke = async () => {
    let callApi = await fetch(norisJoke);
    let data = await callApi.json();
    
 return (data.value);
}
getCategory();


let p = document.createElement('p');
async function createJoke() {
    let randomJoke = await getJoke();;
    p.textContent = randomJoke;
    container.appendChild(p)

}

btn.addEventListener('click', () => {
    createJoke();
})




