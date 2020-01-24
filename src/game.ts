import { Deck } from "./model/deck/deck";
import { ComputerPlayer } from "./model/player/computer/computer.player";
import { DealerPlayer } from "./model/player/computer/dealer/dealer.player";
import { HumanPlayer } from "./model/player/human/human.player";
import { PlayerBase } from "./model/player/player.base";

export default class Game {
  private _deck: Deck;
  private readonly _players: PlayerBase[];
  private readonly _dealer: DealerPlayer;

  public constructor(numberOfCPUs: number = 5) {
    /* 
    Add pllayers in the order of humanPlayer,computerPlayers,dealerPlayer
    */
    this._deck = new Deck();

    this._players = [new HumanPlayer()];
    for (let i = 0; i < numberOfCPUs; i++) {
      this._players.push(new ComputerPlayer());
    }

    this._dealer = new DealerPlayer();
  }

  public start(): void {
    // Burn a card
    this._deck.draw();

    const players = [...this._players, this._dealer];

    // Draw 2 cards for each player
    for (let i = 0; i < 2; i++) {
      for (const player of players) {
        const card = this._deck.draw();
        if (card) {
          player.addCard(card);
        }
      }
    }

    for (const player of players) {
      this.playTurn(player);
    }

    this.checkWinners();
  }

  /**
   * Returns 1 if the player won,
   * Returns -1 if the player busted,
   * Returns 0 if the player is still playing
   *
   * @param player
   */
  private playTurn(player: PlayerBase): number {
    const value = player.value();

    if (value > 21) {
      console.log(`Player ${player.name()} lost with value of ${value}.`);
      return -1;
    } else if (value == 21) {
      console.log(`Player ${player.name()} hit blackjack!`);
      return 1;
    } else {
      console.log(
        `Player ${player.name()}'s value of hand: ${value} which contains:`,
        player.printHand()
      );
    }

    if (player.hit()) {
      const card = this._deck.draw();
      if (card) {
        console.log(`Player ${player.name()} drew ${card.toString()}.`);
        player.addCard(card);
      }
      this.playTurn(player);
    } else {
      return 0;
    }
  }

  private checkWinners(): void {
    const dealer = this._dealer.value();

    for (const player of this._players) {
      const val = player.value();
      // check if player beat the dealer
      if (val > 21) {
        console.log(`${player.name()} busted!`);
      } else if (val > dealer) {
        console.log(`${player.name()} beat ${this._dealer.name()}!`);
      } else if (val === dealer) {
        console.log(
          `Draw game between ${player.name()} and ${this._dealer.name()}!`
        );
      } else console.log(`${this._dealer.name()} beat ${player.name()}!`);
    }
  }
}
