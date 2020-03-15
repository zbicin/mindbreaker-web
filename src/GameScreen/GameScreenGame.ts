import { GameScreen } from "./GameScreen";

export class GameScreenGame extends GameScreen {
    getHTML(): string {
        return `
        <ui-header x="50" y="10" anchor="center center">Hello from game screen game</ui-header>
        <ui-button x="50" y="25" anchor="center center" click="cancelGame">Go back</ui-button>
        `;
    }
}