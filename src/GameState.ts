import { GameScreen } from "./GameScreen";

export class GameState {
    public get screen() { return this._screen; }
    private _screen: GameScreen = GameScreen.Home;

    constructor() {

    }
}