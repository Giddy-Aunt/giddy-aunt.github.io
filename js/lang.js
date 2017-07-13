'use strict';

(function(){
  var textEng = document.querySelector('.langs__text--eng');
  var textRus = document.querySelector('.langs__text--rus');
  var userLang = navigator.language||navigator.browserLanguage;

  if (userLang === 'ru' || userLang === 'uk') {
    textEng.classList.add('hidden');
  } else {
    textRus.classList.add('hidden');
  }



})();

