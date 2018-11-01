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
