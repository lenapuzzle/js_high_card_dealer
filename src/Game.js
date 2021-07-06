import Deck from './Deck.js'
import Hand from './Hand.js'

// GAME START
console.log('GAME START!')

//making our deck
let ourDeck = new Deck()

//getting our initial hands
let p1Hand = ourDeck.deal()
let p2Hand = ourDeck.deal()

// console.log(p1Hand,"\n",p2Hand)
let formatedHand = (unformatedHand) => {
    let printCard = ''
    unformatedHand.forEach((cardInHand) => {
        printCard += `${cardInHand.rank}${cardInHand.suit} `
    })
    return printCard
}
console.log(`Player 1 was delt ${formatedHand(p1Hand)}
Player 2 was delt ${formatedHand(p2Hand)}`)
const getValuesArray = (hand) => {
    let values = []
    hand.forEach((card) => {
        values.push(card.value())
    })
    return values
}
let P1values = getValuesArray(p1Hand)
let P2values = getValuesArray(p2Hand)

// console.log(P1values, '\n', P2values)
let playerOneHand = new Hand(P1values)
let playerTwoHand = new Hand(P2values)
let p1Score = playerOneHand.value()
let p2Score = playerTwoHand.value()
console.log(`Player 1's hand value: ${p1Score} \nPlayer 2's hand value: ${p2Score}`)

//winning
if (p1Score > p2Score) {
    console.log("Player 1 wins!")
} else if (p2Score > p1Score) {
    console.log('Player 2 wins!')
} else {
    console.log("It's a tie!")
}