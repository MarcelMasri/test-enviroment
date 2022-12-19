window.addEventListener('load', function(){

  let activeFilter = null;
  const allWrapper = document.querySelector('.team_team-person-list');
  const filterWrapper = document.querySelector('.team_team-person-match-wrapper');

  //Desktop info close 
  document.querySelector('.person_details-clos-btn').addEventListener('click', function(){
    document.querySelector('.team_team-person-details-component').style.display = 'none';
  })

  //info Window
  document.querySelectorAll('.team_team-person-item').forEach(item => item.addEventListener('click', function(){
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    if(vw <= 767){ //mobile
      const href = document.querySelector('.info-hidden-link').getAttribute('href');
      document.location.href = href;
    }else{ // desktop
      document.querySelector('.person_details-info-img').setAttribute('src', this.querySelector('.team_team-person-img').getAttribute('src'));
      document.querySelector('#details-name').textContent = this.querySelector('.heading-style-h5').textContent;
      document.querySelector('#details-title').textContent = this.querySelector('.text-style-italic').textContent;

      const wrapper = document.querySelector('#details-skills-wrapper');
      const skill = document.querySelector('.person_details-info-skill');
      wrapper.querySelectorAll('.person_details-info-skill').forEach(function(elem){
        wrapper.removeChild(elem);
      })
      this.querySelectorAll('.anwalt_person-skills-item-text').forEach(function(elem){
        const clone = skill.cloneNode(true);
        clone.querySelector('.heading-style-h6').textContent = elem.textContent;
        wrapper.appendChild(clone);
      })

      document.querySelector('#details-email').setAttribute('href', 'mailto:' +  this.querySelector('.info-hidden-mail').textContent)
      document.querySelector('#details-fon').setAttribute('href', 'tel:' +  this.querySelector('.info-hidden-tele').textContent)

      document.querySelector('#details-person').querySelector('.w-richtext').innerHTML = this.querySelector('.info-hidden-person').innerHTML;
      document.querySelector('#details-pup').querySelector('.w-richtext').innerHTML = this.querySelector('.info-hidden-publish').innerHTML;
      document.querySelector('#details-teach').querySelector('.w-richtext').innerHTML = this.querySelector('.info-hidden-teach').innerHTML;
      document.querySelector('.team_team-person-details-component').style.display = 'block';
    }
  }))

  //Filter
  document.querySelectorAll('.team_team-filter-item').forEach(btn => btn.addEventListener('click',function(){
    if(this.classList.contains('is-active')){ // gedrückter filter ist der Aktive
      this.classList.remove('is-active');
      activeFilter = null;
      swichtFilter(this.querySelector('h3').textContent, false, true);
      resetFilter();
    }else{  // gedrückter filter ist nicht der Aktive
      if(activeFilter){ // es ist ein filter aktiv
        activeFilter.classList.remove('is-active');
        swichtFilter(activeFilter.querySelector('h3').textContent, false, true);
        swichtFilter(activeFilter.querySelector('h3').textContent, false, false);
        activeFilter = this;
        this.classList.add('is-active');
        resetFilter();
      }else{ // es ist kein filter aktiv 
        this.classList.add('is-active');
        activeFilter = this;
      }
      swichtFilter(this.querySelector('h3').textContent, true, true);

      const skill = this.querySelector('h3').textContent;
      setFilter(skill);
    }
  }));
  
  //Mobil Filter
  document.querySelectorAll('.filter_popup-skill-item').forEach(btn => btn.addEventListener('click', function(){
    if(this.classList.contains('is-active')){ // gedrückter filter ist der Aktive
      this.classList.remove('is-active');
      activeFilter = null;
      swichtFilter(this.querySelector('h3').textContent, false, false);
      resetFilter();
    }else{  // gedrückter filter ist nicht der Aktive
      if(activeFilter){ // es ist ein filter aktiv
        activeFilter.classList.remove('is-active');
        swichtFilter(activeFilter.querySelector('h3').textContent, false, true);
        swichtFilter(activeFilter.querySelector('h3').textContent, false, false);
        activeFilter = this;
        this.classList.add('is-active');
        resetFilter();
      }else{ // es ist kein filter aktiv 
        this.classList.add('is-active');
        activeFilter = this;
      }
      swichtFilter(this.querySelector('h3').textContent, true, false);

      const skill = this.querySelector('h3').textContent;
      setFilter(skill);
      document.querySelector('.team_team-filter-mobil-popup-wrapper').style.display = 'none';
    }
  }))


  function resetFilter(){
    document.querySelector('.team_team-person-match').style.display = 'none';
     filterWrapper.querySelectorAll('.team_team-person-item').forEach(function(elem){
      allWrapper.appendChild(elem);
      elem.querySelector('.team_team-person-info-wrapper').classList.remove('is-match')
     });
  }

  function setFilter(filter){
    document.querySelectorAll('.anwalt_person-skills-item-text').forEach(function(elem){
      if(elem.textContent == filter){
        document.querySelector('.team_team-person-match').style.display = 'block';
        const item = elem.parentElement.parentElement.parentElement.parentElement.parentElement;
        item.querySelector('.team_team-person-info-wrapper').classList.add('is-match')
        filterWrapper.appendChild(item);
      }
      
    })
    document.querySelector('.section_team_header').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }

  function swichtFilter(filter, activate, mobile){
    if(mobile){
      document.querySelectorAll('.filter_popup-skill-item').forEach(function(elem){
        if(elem.querySelector('h3').textContent == filter){
          if(activate){
            elem.classList.add('is-active')
          }else{
            elem.classList.remove('is-active')
          }
        }
      })
    }else{
      document.querySelectorAll('.team_team-filter-item').forEach(function (elem){
        if(elem.querySelector('h3').textContent == filter){
          if(activate){
            elem.classList.add('is-active')
          }else{
            elem.classList.remove('is-active')
          }
        }
      })
    }
  }


})
