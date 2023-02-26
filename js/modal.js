/*Подключаем микро-библиотеку closets*/
!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);

// событие DOMContentLoaded – браузер полностью загрузил HTML, было построено DOM-дерево, но внешние ресурсы, такие как картинки <img> и стили, могут быть ещё не загружены
// метод addEventListener() присоединяет обработчик события к определенному элементу, при этом новый обработчик события не переписывает уже существующие обработчики событий
document.addEventListener('DOMContentLoaded', function() {
    // querySelectorAll возвращает массив, делаем это потому что нужно обрабатывать клики по всем кнопка
    // а вот overlay мы получаем через querySelector, он возвращает один элемент
    var modalButtons    = document.querySelectorAll('.js-open-modal'),
        overlay         = document.querySelector('#overlay-modal'),
        closeButtons    = document.querySelectorAll('.js-modal-close'),
        modalFormButton = document.querySelectorAll('.js-modal-form');
    
    // Перебираем массив кнопок 
    modalButtons.forEach(function(item){
        // Назначаем каждой кнопке обработчик клика 
        item.addEventListener('click', function(event) {
            // нужно предусмотреть то, что кнопка, которая вызывает наше модальное окно, может быть ссылкой, кнопкой в форме или другим элементом, 
            // который стандартно выполняет какие-то интерактивные действия, тогда нужно отменить эти действия для нормальной работы кода
            // для этого есть метод, который предотвращает стандартное действие элемента
            event.preventDefault(); 
            
            var modalId = this.getAttribute('data-modal'), //получаем значение атрибута data-modal текущей кнопки
            modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]'); //находим модальное окно с этим значением
            
            // добавляем модальному окну и подложке класс active
            modalElem.classList.add('active');
            overlay.classList.add('active');
        }); // end click
    }); // end foreach

    // Перебираем массив кнопок 
    closeButtons.forEach(function(item) {
        // Назначаем каждой кнопке обработчик клика 
        item.addEventListener('click', function(event) {
            // микро-библиотека, подключенная ранее, создает функцию closets, используя ее, можно искать элемент, который находится выше по дереву и класс которого совпадает с тем который мы ищем
            var parentModal = this.closest('.modal');
    
            // убираем у модального окна и подложки класс active
            parentModal.classList.remove('active'); 
            overlay.classList.remove('active');
        }); // end click
    }); // end foreach

    // Перебираем массив кнопок 
    modalFormButton.forEach(function(item){
        // Назначаем каждой кнопке обработчик клика 
        item.addEventListener('click', function() {
            
            var modalElem = document.querySelector('.modal[data-modal="3"]'), //находим третье модальное окно
            parentModal = this.closest('.modal[data-modal="1"]'); //находим первое модальное окно
            
            // если пользователь заполнил поля имени и номера телефона, то закрыть первое модальное окно и отркыть третье
            if ((document.getElementById("name").value.length > 0) && (document.getElementById("phone").value.length > 0)) {
                parentModal.classList.remove('active');
                modalElem.classList.add('active'); 
            }
        }); // end click 
    }); // end foreach

    // Назначаем подложке обработчик клика 
    overlay.addEventListener('click', function() {
         // убираем у модального окна и подложки класс active
        document.querySelector('.modal.active').classList.remove('active'); 
        this.classList.remove('active');
    }); // end click
}); // end ready

// функция отображения переклюателей
function toggle() {
    // получаем элементы по айди
    var div_massege = document.getElementById('massege-block'),
        div_peeling = document.getElementById('peeling-block'),
        div_mask    = document.getElementById('mask-block');
    
    // если флажок с id="massege" выбран, то отображаем блок с id="massege-block"
    if(document.getElementById('massege').checked) 
        div_massege.style.display = 'block';
    // иначе скрыть блок и снять выделение с переключателя
    else {
        div_massege.style.display = 'none';
        $('.check-massege').prop({'checked': false});
    }

    // если флажок с id="peeling" выбран, то отображаем блок с id="peeling-block"
    if(document.getElementById('peeling').checked)
        div_peeling.style.display = 'block';
    // иначе скрыть блок и снять выделение с переключателя
    else {
        div_peeling.style.display = 'none';
        $('.check-peeling').prop({'checked': false});
    }

    // если флажок с id="mask" выбран, то отображаем блок с id="mask-block"
    if(document.getElementById('mask').checked)
        div_mask.style.display = 'block';
    // иначе скрыть блок и снять выделение с переключателя
    else {
        div_mask.style.display = 'none';
        $('.check-mask').prop({'checked': false});
    }
}