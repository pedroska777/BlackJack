import { ComputerPlayer } from '../computer.player';

export class DealerPlayer extends ComputerPlayer {
  public constructor() {
    super(false);
  }

  public name(): string {
    return 'Dealer';
  }
}
