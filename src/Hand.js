class Hand {
    // your code here
    constructor(hand) {
        this.hand = hand
    }
    value() {
        let score = 0
        this.hand.forEach((value) => {
            score += value
        })
        return score
    }
}
export default Hand