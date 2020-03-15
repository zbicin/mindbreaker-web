import { GameScreen } from "./GameScreen";

export class GameScreenHome extends GameScreen {
    getHTML(): string {
        return `
        <ui-header x="50" y="10" anchor="center center">Hello</ui-header>
        <ui-button x="50" y="25" anchor="center center" click="start">Start</ui-button>
        `;
    }
}