/**
 * Represents a playing card
 */
export class Card {

  /**
   *
   * @param suit  The suit of the card
   * @param value The value, ACE is represented as 1, Jack as 11, Queen as 12, and King as 13
   */
  constructor(public readonly suit: Suit, public readonly value: number) { }

  /**
   * Returns a string in the format of `Ace of Spades` or `8 of Hears`.
   */
  public toString(): string {
    let str: string;
    switch (this.value) {
      case 1:
        str = 'Ace';
        break;
      case 11:
        str = 'Jack';
        break;
      case 12:
        str = 'Queen';
        break;
      case 13:
        str = 'King';
        break;
      default:
        str = this.value.toString();
        break;
    }
    return `${str} of ${this.suit}`
  }
}

/**
 * Represents a suit of a playing card.
 */
export enum Suit {
  Club = 'Clubs',
  Diamond = 'Diamonds',
  Heart = 'Hearts',
  Spade = 'Spades',
}
