window.addEventListener('load', function(){
  init();

  document.querySelector('#resetBtn').addEventListener('click', function(){
    init();
  })
})

function init(){
  document.querySelector('.section_answer').classList.add('hide');
  document.querySelector('.section_questions').classList.remove('hide');
  document.querySelector('#question1').classList.remove('hide');
  let question = 'question1'; // farge die gerade gespeichert wird

  document.querySelectorAll('.questions_selection-button').forEach(elem => elem.addEventListener('click', function(){
    const next = this.getAttribute('next');
    // Selects haben Daten Attribute
    // Attribut next gibt enthält id der Nächsten Frage
    // oder duft wenn Ausswertung erfolgen soll
    // Attribut duift enthält den namen des Duftes
    if(next == 'duft'){ // wenn letzte Frage
      const duft = this.getAttribute('duft').toLowerCase();
      document.querySelector('#'+question).classList.add('hide');
      document.querySelector('.section_questions').classList.add('hide');
      document.querySelector('.section_answer').classList.remove('hide');


      //sucht richtigen Duft anhand des namens
      document.querySelectorAll('.answer_item').forEach(function(elem){
        if(elem.querySelector('.answer_item-info-name').textContent.toLowerCase() == duft){
          elem.classList.remove('hide');
        }
      });
    }else{ // Wenn andere Farge
      document.querySelector('#'+question).classList.add('hide');
      document.querySelector('#'+next).classList.remove('hide');
      question = next;
    }
  }));
}


