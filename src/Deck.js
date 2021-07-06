import _ from 'lodash'
import Card from './Card.js'

const suits = ['♦', '♣', '♠', '♥']
const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']

class Deck {
    constructor() {
        this.cards = this.buildDeck()
    }

    buildDeck() {
        let cards = []
        suits.forEach(suit => {
            ranks.forEach(rank => {
                cards.push(new Card(rank, suit))
            })
            debugger
            console.log(cards)
        })
        return _.shuffle(cards)
    }

    deal() {
        // your code here
        let hand = this.cards.splice(0, 4)
        return hand
    }
}

export default Deck