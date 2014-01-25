var overflow = {
    cards: [],
    pushToDeck: function(){
        deck.cards = this.cards;
    },
    addACard: function(card){
        this.cards[this.cards.length] = card;
    }
}