import * as promptSync from 'prompt-sync'
import { PlayerBase } from '../player.base';

export class HumanPlayer extends PlayerBase {
  private readonly _prompt: promptSync.Prompt;
  private readonly _name: string;

  public constructor() {
    super();
    this._prompt = promptSync();
    this._name = this._prompt('Please enter your name: ');
  }

  public hit(): boolean {
    const value = this.value();
    console.log(`Your hand is currently at ${value}.`);
    while (true) {
      const result = this._prompt('Do you want to [H]it or [S]tay?').toLowerCase();
      if (result[0] === 'h') {
        return true;
      }
      if (result[0] === 's') {
        return false;
      }
    }
  }

  public name(): string {
    return this._name;
  }
}
