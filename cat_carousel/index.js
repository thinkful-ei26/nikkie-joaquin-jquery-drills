'use strict';

$(function(){
  $('.thumbnail').on('click', (event) =>{
    const currentSrc = $(event.currentTarget).find('img').attr('src');
    const currentAlt = $(event.currentTarget).find('img').attr('alt');
    event.preventDefault();
    $('.hero img').attr('src', currentSrc);
    $('.hero img').attr('alt', currentAlt);
  });
});

//bc mouse clicks and tab/enter behave differently, we need to use currentTag