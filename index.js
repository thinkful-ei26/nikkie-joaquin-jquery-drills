'use strict';

$(function(){
  $('.thumbnail').on('click', (event) =>{
    const currentSrc = $(event.target).find('img').attr('src');
    const currentAlt = $(event.target).find('img').attr('alt');

    $('.hero img').attr('src', currentSrc);
    $('.hero img').attr('alt', currentAlt);
  });
});