import { Card, Suit } from '../card/card';

export class Deck {
  private readonly _cards: Card[];

  public constructor() {
    // Create a deck of cards
    this._cards = [];
    for (let i = 1; i < 14; i++) {
      this._cards.push(new Card(Suit.Club, i));
      this._cards.push(new Card(Suit.Diamond, i));
      this._cards.push(new Card(Suit.Heart, i));
      this._cards.push(new Card(Suit.Spade, i));
    }

    // Shuffle them for randomness
    this.shuffle();
  }

  /**
   * Returns a card if there are any cards left, or throws an error.
   */
  public draw(): Card {
    if (this._cards.length <= 0) {
      throw new Error('Ran out of cards');
    }
    return this._cards.pop();
  }

  /**
   * Randomly shuffles the cards array.
   *
   * Source: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
   */
  private shuffle(): void {
    let currentIndex = this._cards.length;
    let temporaryValue;
    let randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = this._cards[currentIndex];
      this._cards[currentIndex] = this._cards[randomIndex];
      this._cards[randomIndex] = temporaryValue;
    }
  }
}
