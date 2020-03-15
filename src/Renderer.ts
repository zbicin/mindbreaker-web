import { GameState } from "./GameState";
import { GameScreenType } from "./GameScreenType";
import { GameScreenHome } from "./GameScreen/GameScreenHome";
import { GameScreenGame } from "./GameScreen/GameScreenGame";

const gameScreens = new Map([
    [GameScreenType.Home, new GameScreenHome()],
    [GameScreenType.Game, new GameScreenGame()]
])

export class Renderer {
    constructor(private rootElement: HTMLElement) {
        this.rootElement.classList.add('rootElement');
    }

    render(state: GameState) {
        if (!gameScreens.has(state.screen)) {
            throw new Error(`No screen found`);
        }
        const gameScreen = gameScreens.get(state.screen)!;
        this.rootElement.innerHTML = gameScreen.getHTML();
    }
}