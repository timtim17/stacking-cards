function Stack(defaultTopCard){
    this.cards = [defaultTopCard];
    
    this.createStack = function(stackNumber){
        var button = document.createElement('button');
        button.setAttribute('type', 'button');
        var img = document.createElement('img');
        img.setAttribute('src', defaultTopCard.img);
        img.setAttribute('width', 100);
        img.setAttribute('height', 150);
        
        button.appendChild(img);
        document.getElementById('cards').appendChild(button);
        return img;
    }
}