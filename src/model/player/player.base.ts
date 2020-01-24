import { Card } from '../card/card';

export abstract class PlayerBase {
  protected _cards: Card[];

  /**
   * Returns true if the player decides to hit, or false
   * if the player decides to stay.
   */
  public abstract hit(): boolean;

  /**
   * Returns the display name of the user.
   */
  public abstract name(): string;

  /**
   * Returns the total optimal value of the hand. If the counting Ace
   * as 11 returns a value higher than 21, we can Ace as 1.
   */
  public value(): number {
    let val = 0;
    let aces = 0;
    for (const card of this._cards) {
      switch (card.value) {
        // Case of Ace, count as 11 for now.
        case 1:
          aces++;
          val += 11;
          break;
        // Case of Jack, Queen, and King, count as 10.
        case 11:
        case 12:
        case 13:
          val += 10;
        // Everything else, add its value.
          break;
        default:
          val += card.value;
          break;
      }
    }

    // If the score is more than 21 and we have some aces,
    // try to count them as one.
    while(val > 21 && aces > 0) {
      val -= 10;
      aces--;
    }

    return val;
  }

  /**
   * Returns the pretty printed string of the players hand.
   */
  public printHand(): string {
    return this._cards
      .map((x) => x.toString())
      .join(', ');
  }

  /**
   * Add {card} to the player's hand.
   *
   * @param card
   */
  public addCard(card: Card): void {
    if (!this._cards) {
      this._cards = [];
    }
    this._cards.push(card);
  }
}
