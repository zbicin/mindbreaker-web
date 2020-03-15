import { GameScreenType } from "./GameScreenType";

export class GameState {
    public get screen() { return this._screen; }
    private _screen: GameScreenType = GameScreenType.Home;
    private onScreenUpdatedCallback: Function | null = null;

    constructor() {

    }

    onScreenUpdated(cb: Function) {
        this.onScreenUpdatedCallback = cb;
    }

    setScreen(s: GameScreenType): void {
        this._screen = s;
        if (this.onScreenUpdatedCallback) {
            this.onScreenUpdatedCallback();
        }
    }
}