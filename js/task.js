let myname = document.querySelector('.test-text');
myname.innerHTML = 'Привет, <b>мир!</b> Меня зовут <i>Дакота</i>.';

// Задание 1
myname.style.background = 'lightblue';
myname.style.color = 'blue';
myname.style.border = '2px solid blue' 

// Задание 2
let mail = document.getElementById('email');
mail.setAttribute('placeholder', 'mail@mail.ru');
mail.setAttribute('disabled', 'true');

let check = document.getElementById('remember');
check.setAttribute('checked', true);

let button = document.getElementById('btn');
button.setAttribute('value', 'Войти');

// Задание 3
let link = document.createElement('a');
link.innerHTML = 'крутая ссылка на сайт';
link.setAttribute('href', 'https://midis.ru/');
link.setAttribute('target', '_blank');
// link.style.color.hover = 'red';
link.classList.add('change');
task3.after(link);

// Задание 4
let btnballon = document.querySelector('.btn_ballon');
btnballon.addEventListener('click', function(event){
    event.preventDefault();
    let ballon = document.querySelector('.ballon');
    ballon.style.animationPlayState = 'running';
});