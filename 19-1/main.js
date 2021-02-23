const starting = document.querySelector('.start-here');

starting.textContent = 'main title';
const moreTitle = document.createElement('li');
moreTitle.textContent = 'sub title 4';
starting.nextElementSibling.appendChild(moreTitle);

starting.nextElementSibling.nextElementSibling.remove();
starting.parentElement.parentElement.previousElementSibling.lastElementChild.textContent = 'Master Of The Dom';