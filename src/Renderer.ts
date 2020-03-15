import { GameState } from "./GameState";
import { GameScreenType } from "./GameScreenType";
import { GameScreenHome } from "./GameScreen/GameScreenHome";
import { GameScreenGame } from "./GameScreen/GameScreenGame";
import { GameScreen } from "./GameScreen/GameScreen";

const gameScreens = new Map<GameScreenType, GameScreen>([
    [GameScreenType.Home, new GameScreenHome()],
    [GameScreenType.Game, new GameScreenGame()]
]);

export class Renderer {
    private activeGameScreen: GameScreen | null = null;
    constructor(private rootElement: HTMLElement) {
        this.rootElement.classList.add('rootElement');
    }

    render(state: GameState) {
        if (this.activeGameScreen) {
            this.activeGameScreen.onDeactivate();
        }
        this.activeGameScreen = gameScreens.get(state.screen)!;
        if (!this.activeGameScreen) {
            throw new Error(`No screen found`);
        }
        this.activeGameScreen.onActivate(this.rootElement);
    }
}