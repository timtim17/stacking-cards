var deck = {
    cards: [],
    
    createStockDeck: function(){
        var i;
        for(i = 1; i <= 13; i++){
            if(i > 10){
                switch(i){
                    case 11:
                        this.cards[i] = new Card('clubs', 'j', true);
                        console.log("JACK")
                        break;
                    case 12:
                        this.cards[i] = new Card('clubs', 'q', true);
                        console.log("QUEEN")
                        break;
                    case 13:
                        this.cards[i] = new Card('clubs', 'k', true);
                        console.log('KING');
                        break;
                }
            }else{
                this.cards[i] = new Card('clubs', i, false);
                console.log(i);
            }
        }
        for(i = 1; i <= 13; i++){
           if(i > 10){
                switch(i){
                    case 11:
                        this.cards[i+13] = new Card('diamonds', 'j', true);
                        console.log("JACK")
                        break;
                    case 12:
                        this.cards[i+13] = new Card('diamonds', 'q', true);
                        console.log("QUEEN")
                        break;
                    case 13:
                        this.cards[i+13] = new Card('diamonds', 'k', true);
                        console.log('KING');
                        break;
                }
            }else{
                this.cards[i+13] = new Card('diamonds', i, false);
                console.log(i);
            }
        }
        for(i = 1; i <= 13; i++){
            if(i > 10){
                switch(i){
                    case 11:
                        this.cards[i+26] = new Card('hearts', 'j', true);
                        console.log("JACK")
                        break;
                    case 12:
                        this.cards[i+26] = new Card('hearts', 'q', true);
                        console.log("QUEEN")
                        break;
                    case 13:
                        this.cards[i+26] = new Card('hearts', 'k', true);
                        console.log('KING');
                        break;
                }
            }else{
                this.cards[i+26] = new Card('hearts', i, false);
                console.log(i);
            }
        }
        for(i = 1; i <= 13; i++){
            if(i > 10){
                switch(i){
                    case 11:
                        this.cards[i+39] = new Card('spades', 'j', true);
                        console.log("JACK")
                        break;
                    case 12:
                        this.cards[i+39] = new Card('spades', 'q', true);
                        console.log("QUEEN")
                        break;
                    case 13:
                        this.cards[i+39] = new Card('spades', 'k', true);
                        console.log('KING');
                        break;
                }
            }else{
                this.cards[i+39] = new Card('clubs', i, false);
                console.log(i);
            }
        }
    }
}

deck.createStockDeck();