window.addEventListener('load', function(){
  document.querySelectorAll('.review_list-item').forEach(sfunction(elem){
    const stars = parseInt(elem.querySelector('.review_item-star-count').textContent);
    const wrapper = elem.querySelector('.review_item-star-wrapper');
    const star = wrapper.querySelector('.review_item-star');
    for(let i=0;i<stars;i++){
      wrapper.appendChild(star.cloneNode());
    }
  })
})
