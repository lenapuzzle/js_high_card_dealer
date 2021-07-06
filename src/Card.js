class Card {
    // Your code here
    // Functions you may need:
    constructor(rank, suit) {
        this.rank = rank
        this.suit = suit
    }

    value() {
            if (this.rank === 'J') {
                return this.rank = 11
            } else if (this.rank === 'Q') {
                return this.rank = 12
            } else if (this.rank === 'K') {
                return this.rank = 13
            } else if (this.rank === 'A') {
                return this.rank = 14
            } else {
                return this.rank
            }

        }
        // - constructor
        // - function that assigns a card its "value"
        // - any other functions you deem necessary
}

export default Card