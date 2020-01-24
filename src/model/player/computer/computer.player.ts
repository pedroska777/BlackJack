import { PlayerBase } from '../player.base';

export class ComputerPlayer extends PlayerBase {
  private static num = 0;
  private readonly _maxScore = 17;
  private readonly _name: string;

  constructor(count: boolean = true) {
    super();
    if (count) {
      ComputerPlayer.num++;
    }
    this._name = `Computer ${ComputerPlayer.num}`;
  }

  public hit(): boolean {
    return this.value() < this._maxScore;
  }

  public name(): string {
    return this._name;
  }
}
