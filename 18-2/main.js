        document.body.style.backgroundColor = 'lightblue';
        document.body.style.margin = '0';
        document.body.style.padding = '0';
        document.body.style.color = '#eee';
        document.body.style.width = '100vw';
        document.body.style.height = '100vh';
        document.body.style.transition = '0.3s ease-in-out';

        
        let title = document.createElement('h1')
        document.body.appendChild(title).innerHTML = 'The best team in the world'
        title.style.color = 'black';
        title.style.textAlign = 'center';
        title.style.display = 'block';
        const img = document.createElement('img');  
        img.src =  
'https://www.freevector.com/uploads/vector/preview/14053/FreeVector-Real-Madrid-FC.jpg';
document.querySelector('body').appendChild(img);


title.addEventListener('mouseover', () => {
    title.style.color = 'pink';
    title.style.fontSize = '32px'

});
