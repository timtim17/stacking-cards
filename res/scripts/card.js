function Card(suit, number, head){
    this.suit = suit;
    this.number = number;
    this.head = head;
    
    this.img = 'res/img/cards/' + suit + '/' + number + '.png';
}