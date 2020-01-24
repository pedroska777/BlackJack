import { ComputerPlayer } from "../computer.player";

export class DealerPlayer extends ComputerPlayer {
  public constructor() {
    super(false);
  }

  public name(): string {
    return "Dealer";
  }
  public printDealerHand(): void {
    console.log(
      "Dealer's Hand :",
      this._cards[0].toString(),
      " -----Hidden----"
    );
  }
}
