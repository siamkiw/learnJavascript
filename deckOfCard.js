// function makeDeck() {
//     const suits = ['hearts', 'diamonds', 'spades', 'clubs']
//     const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A'
//     const deck = []
//     for (let value of values.split(',')) {
//         for (let suit of suits) {
//             deck.push({
//                 value: value,
//                 suit: suit
//             })
//         }
//     }
//     return deck
// }

// function drawCard(deck) {
//     return deck.pop()
// }

// const deck = makeDeck()

// const card1 = drawCard(deck)

const makeDeck = () => {
    return {
        deck: [],
        drawnCards: [],
        suits: ['hearts', 'diamonds', 'spades', 'clubs'],
        values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',

        insitializeDeck() {
            const { deck, suits, values } = this
            for (let value of values.split(',')) {
                for (let suit of suits) {
                    deck.push({
                        value,
                        suit
                    })
                }
            }
        },

        drawCard() {
            const card = this.deck.pop()
            this.drawnCards.push(card)
            return card
        },

        drawMuitCard(num = 1) {
            แ
            let cards = []
            for (let index = 0; index < num; index++) {
                cards.push(this.drawCard())
            }
            return cards
        },

        shuffle() {
            const { deck } = this
            for (let i = deck.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [deck[i], deck[j]] = [deck[j], deck[i]];
            }
        }
    }

}

const myDeck = makeDeck()

myDeck.insitializeDeck()