$(window).ready(function(){
// Initialize some vars.
var radio_stack_one = document.getElementById('radio_stack_one');
var radio_stack_two = document.getElementById('radio_stack_two');
var radio_stack_three = document.getElementById('radio_stack_three');

var stack_one = null;
var stack_two = null;
var stack_three = null;
var stack_overflow = document.getElementById('overflow');
var stack_held = document.getElementById('yourCard');

var button_gen = document.getElementById('generate');
var button_save = null;
var button_load = null;

var stack_container = document.getElementById('cards');

var error_window_width_button_check = document.getElementById('error_button_check');

var carddeck = new Carddeck();
var heldCard = null;

/*
* Check that the width of the screen is big enough.
* If it isn't, show an error message.
* If it is, hide the error message.
*/
setInterval(function(){
    $('#content').css('width', $(window).width() - 222);
    if($(window).width() < 650){
        $('form, #content').hide(500);
        $('.error').slideDown({
            easing: 'easeInBounce',
            duration: 500});
    }
}, 100)

function checkWidth(){
    if($(window).width() < 650){
        $('form, #content').hide(500);
        $('.error').slideDown({
            easing: 'easeInBounce',
            duration: 500});
        return false;
    }else{
        $('form, #content').show(500);
        $('.error').slideUp({
            duration: 500,
            easing: 'easeOutBounce'});
        return true;
    }
}

checkWidth();

/* TBD - To Be Done */

button_gen.addEventListener('click', function(){
    regenerate();
});

error_window_width_button_check.addEventListener('click', function(){
    if(!checkWidth()){
        error_window_width_button_check.innerHTML = "Window Still Too Small";
    }else{
        error_window_width_button_check.innerHTML = "Recheck";
    }
});

/*$('overflow').click(function(){
    var overflow = new OverflowHF();
    overflow.addACard();
});*/

function generateRandomCard(){
    var selectCardInvalidValue = true;
    while(selectCardInvalidValue){
        var selectCard = Math.floor(Math.random()*carddeck.cards.length-1);
        if(selectCard > 0){
            selectCardInvalidValue = false;
        }
    }
    console.log(selectCard);
    var card = carddeck.cards[selectCard];
    carddeck.cards.splice(selectCard, 1);
    console.log(carddeck);
    
    return card;
}

function regenerate(){
    stack_container.innerHTML = "";
    
    if(radio_stack_three.checked){
        stack_one = new Stack(generateRandomCard());
        stack_two = new Stack(generateRandomCard());
        stack_three = new Stack(generateRandomCard());
        
        stack_one = stack_one.createStack();
        stack_two = stack_two.createStack();
        stack_three = stack_three.createStack();
    }else if(radio_stack_two.checked){
        stack_one = new Stack(generateRandomCard());
        stack_two = new Stack(generateRandomCard());
        stack_three = null;
        
        stack_one = stack_one.createStack();
        stack_two = stack_two.createStack();
    }else if(radio_stack_one.checked){
        stack_one = new Stack(generateRandomCard());
        stack_two = null;
        stack_three = null;
        
        stack_one = stack_one.createStack();
    }
    
    carddeck.createStockDeck();
    
    // Log the carddeck to make sure it is correct.
    console.log(carddeck);
    
    heldCard = generateRandomCard();
    stack_held.setAttribute('src', heldCard.img);
    
}

regenerate();
});