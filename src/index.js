

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
  document.querySelectorAll('.radio-button').forEach(elem => elem.style.background = 'none')
  let question = 'question1'; // farge die gerade gespeichert wird

  document.querySelectorAll('.questions_selection-button').forEach(elem => elem.addEventListener('click', function(){
    const next = this.getAttribute('next');
    this.parentElement.querySelectorAll('.radio-button').forEach(elem => elem.style.background = 'none')
    this.querySelector('.radio-button').style.background = '#ccc';

    // Selects haben Daten Attribute
    // Attribut next gibt enthält id der Nächsten Frage
    // oder duft wenn Ausswertung erfolgen soll
    // Attribut duift enthält den namen des Duftes
    if(next == 'duft'){ // wenn letzte Frage
      const duft = this.getAttribute('duft').toLowerCase();
      document.querySelector('#'+question).classList.add('anime');
      document.querySelector('#'+question).classList.add('out');
      setTimeout(function(){
        document.querySelector('#'+question).classList.add('hide');
        document.querySelector('.section_questions').classList.add('hide');
        document.querySelector('.section_answer').classList.add('out');
        document.querySelector('.section_answer').classList.remove('hide');
        document.querySelector('.section_answer').classList.add('anime');
        document.querySelector('.section_answer').classList.add('in');
      }, 500)
      //sucht richtigen Duft anhand des namens
      document.querySelectorAll('.answer_item').forEach(function(elem){
        if(elem.querySelector('.answer_item-info-name').textContent.toLowerCase() == duft){
          elem.classList.remove('hide');
        }
      });
    }else{ // Wenn andere Farge
      document.querySelector('#'+question).classList.add('anime')
      document.querySelector('#'+question).classList.add('out')
      document.querySelector('#'+next).classList.add('out')
      setTimeout(function(){
        document.querySelector('#'+question).classList.remove('anime')
        document.querySelector('#'+question).classList.remove('out')
        document.querySelector('#'+question).classList.add('hide');
        document.querySelector('#'+next).classList.remove('hide');
        setTimeout(function(){
          document.querySelector('#'+next).classList.add('anime')
          document.querySelector('#'+next).classList.add('in')
          document.querySelector('.section_questions').scrollIntoView({behavior: "auto", block: "center", inline: "nearest"});
          question = next;
          setTimeout(function(){
            document.querySelector('#'+next).classList.remove('anime')
          document.querySelector('#'+next).classList.remove('in')
          document.querySelector('#'+next).classList.remove('out')
          }, 500)
        }, 200)
      }, 500)
    }
  }));

  document.querySelectorAll('.questions_back-wrapper').forEach(elem => elem.addEventListener('click', function(){
    const previous = this.getAttribute('previous').toLowerCase();
    document.querySelector('#'+question).classList.add('anime');
    document.querySelector('#'+question).classList.add('out');
    setTimeout(function(){
      document.querySelector('#'+question).classList.add('hide');
      document.querySelector('#'+previous).classList.remove('hide');
      document.querySelector('#'+previous).classList.add('out');
      document.querySelector('#'+previous).classList.add('anime');
      document.querySelector('#'+previous).classList.add('in');
      question = previous;
    }, 500)
    document.querySelector('.section_questions').scrollIntoView({behavior: "auto", block: "center", inline: "nearest"});
    
  }));
}


