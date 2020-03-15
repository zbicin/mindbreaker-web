import { GameState } from "./GameState";
import { GameScreen } from "./GameScreen";

export class Renderer {
    constructor(private rootElement: HTMLElement) {

    }

    render(state: GameState) {
        this.rootElement.innerHTML = GameScreen[state.screen];
    }
}