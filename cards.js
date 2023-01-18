let btn = document.getElementById('btn');
let table = document.getElementById('container')

cardImageURLs = [];

function getCards(){
    axios.get(`https://deckofcardsapi.com/api/deck/new/draw/?count=52`)
    .then(resp => {
        for(i=0;i<52;i++){
            cardImageURLs.push(resp.data.cards[i].image);
        }
    })
}

function sloppyDeal(div){
    let tiltNum = Math.floor(Math.random() * 50) - 25;
    div.style.transform = `rotate(${tiltNum}deg)`

    let leftOffset = Math.floor(Math.random() * 50) - 25;
    div.style.left = `${leftOffset}px`

    let topOffset = Math.floor(Math.random() * 50) - 25;
    div.style.top = `${topOffset}px`
}   


getCards()

btn.addEventListener('click', function(){
    if(cardImageURLs.length != 0){
        let card = document.createElement('img');
        card.setAttribute('class', 'card')
        card.src = cardImageURLs.pop();
        sloppyDeal(card)
        table.append(card);
    }
    else{btn.removeEventListener()}
})