/* 1 - Выбирать элементы на странице */
// 1.1 - Выбрать эл-т по id
let header = document.getElementById('title');
console.log(header);
// 1.2 - Выбрать ОДИН эл-т по селектору
const container = document.querySelector('.container'); // находит первый подход\щий под условие селектор
console.log(container);
// 1.3 - Выбрать НЕСКОЛЬКО эл-тов по селектору
const paragraphs = document.querySelectorAll('p'); // массив параграфов
console.log(paragraphs);



/* 2 - Работа с контентом(содержимым) */
console.log(header.textContent); // извлекаем Только текст               Основы Document Object Model
console.log(header.innerHTML); // извлекаем и текст и теги               Основы <i>Document Object Model</i>
console.log(header.outerHTML); // извлекаем сам эл-т + текст и теги      <h1 id="title">Основы <i>Document Object Model</i></h1>
console.log(header.innerText); // извлекаем текст без тегов              Основы Document Object Model
console.log(header.outerText); // извлекаем текст без тегов              Основы Document Object Model

// изменить текст(теги воспиримаются как текст)
header.textContent = 'Новый заголовок <i class="bi bi-windows"></i>'; // иконка вставляется как код
// изменить html(теги воспиримаются как теги)
header.innerHTML = 'Новый заголовок <i class="bi bi-windows"></i>';   // иконка вставляется как иконка
// полность перезаписываем и содержимое и сам текст
header.outerHTML = '<h3>Новый заголовок <i class="bi bi-windows"></i></h3>';



/* 3 - Работа с классами (с атрибутом class)*/
const h2 = document.querySelector('h2');
// добавление класса
h2.classList.add('big');
h2.classList.add('red'); // добавление второго класса ОБЯЗАТЕЛЬНО ПО ОТДЕЛЬНОСТИ
h2.classList.add('title'); // добавление несуществующего класса (если прописать в css  - будет работать)
// удаление класса
h2.classList.remove('red');
// проверить есть ли класс у эл-та
console.log(h2.classList.contains('big')); // класс есть - true, класса нет - false
//"переключатель" классов
for (let elem of paragraphs) {
    elem.classList.toggle('text');
    // if (elem.classList.contains('text')) { // длинный вариант строчки выше
    //     elem.classList.remove('text');
    // }else {
    //     elem.classList.add('text');
    // }
    // }
}



/* 4 - Работа со стилями (атрибут style)*/
const btn = document.querySelector('input[type=submit]');
console.log(btn);
//добавление стилей
btn.style.color = 'blue'; // текст кнопки изменил вид
btn.style.background = 'yellow'; // фон кнопки изменил вид
btn.style.fontSize = '24px';
btn.style.border = '1px solid red'; 



/* 5 - Работа с атрибутами */
let link = document.querySelector('li:nth-child(1) a');
console.log(link);
// считываем атрибут
console.log(link.getAttribute('href'));
// устанавить/изменить атрибут
link.setAttribute('href', 'https://midis.ru/');
link.setAttribute('target', '_blank');
// удалить атрибут
btn.removeAttribute('style'); // удалили все из пункта 4



/* 6 - Создание нового элемента(тега) */
const block = document.createElement('div');
block.classList.add('block');
block.innerHTML = "новый блок";
container.append(block);

const image = document.createElement('img');
image.setAttribute('src', 'img/raket.jpg');
image.alt = 'raket'; // еще один способ задать атрибут
image.style.width='100px'
// container.append(image); // добавить эл-т в конец контейнера
// container.prepend(image); // добавить эл-т в начало контейнера
// container.before(image); // добавить эл-т в перед контейнером
container.after(image);  // добавить эл-т в после контейнера



/* 7 - Выбор потомков (дочерних эл-ов) */
// выбираем все параграфы 
const lorems = document.querySelectorAll('p');
console.log(lorems);
// выбираем ТОЛЬКО дочерние параграфы 
const content = document.querySelector('.content');
const loremsInContent = content.querySelectorAll('p');
console.log(loremsInContent);



/* 8 - Выбор предков */
let form = btn.closest('form'); // поск ближайшего предка по селектору
form.style.border = '4px dotted orange';



/* 9 - Обработка событий (клик по кнопке)*/
btn.addEventListener('click', function(event){
    event.preventDefault(); // отменяем поведение по умолчанию -- в данном случае - обновление страницы
    console.log('click');
    const body = document.querySelector('body');
    body.style.background = 'lightblue';
    const pass = document.querySelector('input[type=password]').value;
    console.log(pass);
});



/* 10 - удаление тегов */
//"живая" коллекция
const texts = document.querySelector('.content').childNodes;
console.log(texts);

const p1 = document.querySelector('p'); // выбираю первый параграф в документе
p1.outerHTML = ""; // удаляем тег - первый параграф
console.log(paragraphs);

console.log(texts);
