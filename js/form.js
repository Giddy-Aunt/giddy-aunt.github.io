'use strict';

(function(){
  var feedbackForm = document.querySelector('.feedback-form');
  var feedbackName = document.getElementById('feedback-name');
  var feedbackEmail = document.getElementById('feedback-email');
  var feedbackMessage = document.getElementById('feedback-text');
  var feedbackSubmit = document.getElementById('feedback-submit');
  var storageFeedbackName = localStorage.getItem("userName");
  var storageFeedbackEmail = localStorage.getItem("userEmail");

  feedbackForm.addEventListener('submit', function(evt){
    if (!feedbackName.value || !feedbackEmail.value || !feedbackMessage.value || !feedbackEmail.checkValidity()) {
      evt.preventDefault();
      feedbackSubmit.classList.add('btn--disabled');

      if (!feedbackName.value) {
        feedbackName.classList.add('text-field__input--invalid');
      }
      if (!feedbackEmail.value || !feedbackEmail.checkValidity()) {
        feedbackEmail.classList.add('text-field__input--invalid');
      }
      if (!feedbackMessage.value) {
        feedbackMessage.classList.add('text-field__input--invalid');
      }
    } else {
      localStorage.setItem("userName", feedbackName.value);
    }
  });



  feedbackName.addEventListener('input', function(evt){
    feedbackName.classList.remove('text-field__input--invalid')
    feedbackSubmit.classList.remove('btn--disabled')
  });

  feedbackEmail.addEventListener('input', function(evt){
    feedbackEmail.classList.remove('text-field__input--invalid')
    feedbackSubmit.classList.remove('btn--disabled')
  });

  feedbackMessage.addEventListener('input', function(evt){
    feedbackMessage.classList.remove('text-field__input--invalid')
    feedbackSubmit.classList.remove('btn--disabled')
  });

})();

