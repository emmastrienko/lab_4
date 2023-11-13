// Коли користувач прокручує вниз 20px від верхньої частини документа, показати кнопку
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// Коли користувач натискає на кнопку, прокрутити до верхньої частини документа
function topFunction() {
  document.body.scrollTop = 0; // Для Safari
  document.documentElement.scrollTop = 0; // Для Chrome, Firefox, IE та Opera
}
