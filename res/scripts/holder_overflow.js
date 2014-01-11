function OverflowHF(){
    this.cards = [];
    this.pushToStack = function(deck){
        deck.cards = this.cards;
    }
    this.addACard = function(card){
        // DO SOMETHING WITH CARD
    }
}