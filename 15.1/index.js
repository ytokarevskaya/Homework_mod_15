const icon1 = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-left-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path fill-rule="evenodd" d="M10.828 5.172a.5.5 0 0 0-.707 0L6.025 9.268V6.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H9.5a.5.5 0 0 0 0-1H6.732l4.096-4.096a.5.5 0 0 0 0-.707z"/>
</svg>`

const icon2 = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-left-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-5.879-2.828a.5.5 0 1 1 .707.707L6.732 9.975H9.5a.5.5 0 1 1 0 1H5.525a.5.5 0 0 1-.5-.5V6.5a.5.5 0 1 1 1 0v2.768l4.096-4.096z"/>
</svg>`

function pageLoaded() {
  const btn = document.querySelector('.j-btn-test')
  const icon = document.querySelector('.btn_icon')
  
  icon.innerHTML = icon1;

  btn.addEventListener('click', () => {
    icon.classList.toggle('icon1')  
    icon.classList.toggle('icon2')
    if (icon.classList.contains('icon1')) {
      icon.innerHTML = icon1;
    } else if (icon.classList.contains('icon2')) {
      icon.innerHTML = icon2;
    }
  })
  
}

document.addEventListener("DOMContentLoaded", pageLoaded);


//на самом деле по какой то случайности я добавил icon.classList.toggle('icon1') и icon.classList.toggle('icon2') и не до конца понял почему первый написанный вариант работал криво 
// В начале написал так и работало криво
// btn.addEventListener('click', () => {
//    if (icon.classList.toggle('icon1')) {
//      icon.innerHTML = icon1;
//    } else if (icon.classList.toggle('icon2')) {
//      icon.innerHTML = icon2;
//    }
//  });  
// };

// потом попробовал так => перестало работать
// btn.addEventListener('click', () => {
//    if (icon.classList.contains('icon1')) {
//      icon.innerHTML = icon1;
//    } else if (icon.classList.contains('icon2')) {
//      icon.innerHTML = icon2;
//    }
//  });  
// };

// Всё верно, потому что метод toggle переключает имя класса (если указанный класс есть - удаляет его, если нет - добавляет), а метод contains проверяет наличие класса. Поэтому их нужно использовать в связке друг с другом, по отдельности они не работали