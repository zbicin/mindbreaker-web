import { GameState } from "./GameState";
import { GameScreenType } from "./GameScreenType";
import { GameScreenHome } from "./GameScreen/GameScreenHome";
import { GameScreenGame } from "./GameScreen/GameScreenGame";
import { GameScreen } from "./GameScreen/GameScreen";
import { GameScreenHowToPlay } from "./GameScreen/GameScreenHowToPlay";

const gameScreens = new Map<GameScreenType, GameScreen>([
    [GameScreenType.Home, new GameScreenHome()],
    [GameScreenType.Game, new GameScreenGame()],
    [GameScreenType.HowToPlay, new GameScreenHowToPlay()]
]);

export class Renderer {
    private activeGameScreen: GameScreen | null = null;
    constructor(private rootElement: HTMLElement) {
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