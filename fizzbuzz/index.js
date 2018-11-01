'use strict';
/*eslint-env jquery*/


function fizzbuzz(num){
  if(num%15===0) return 'fizzbuzz';
  else if (num%5===0) return 'buzz';
  else if (num%3===0) return 'fizz';
  else return num; 
} //seperate concerns - do this seperate logic seperate than the DOM Stuff

function generateDiv(fizzBuzzResult){
  let customClass = '';
  if (typeof fizzBuzzResult === 'string'){
    customClass = fizzBuzzResult;
  }
  return `<div class='fizz-buzz-item ${customClass}'>
  <span>${fizzBuzzResult}</span>
</div>`;
}

//listen for submit event on the form tag 
function main(){
  $('#number-chooser').on('submit', event => {
    event.preventDefault(); //so it doesnt try to submit
    const countTo = $('#number-choice').val();

    //clear form: 
    event.target.reset(); //not using jQuery cuz there's no method for that 

    const fizzBuzzResults = [];

    for (let i =1; i <= countTo; i++){
      fizzBuzzResults.push(fizzbuzz(i));
    }

    //convert result into div 
    const divElements = fizzBuzzResults.map(result => generateDiv(result));
    console.log(divElements);
    $('.js-results').html(divElements.join('')); //it accepts an array, but you could also do .join
  });
}

$(main); 