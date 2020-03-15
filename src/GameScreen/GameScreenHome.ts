import { GameScreen } from "./GameScreen";
import { Bus } from "../Bus";
import { GameScreenType } from "../GameScreenType";

export class GameScreenHome extends GameScreen {
    constructor() {
        super();

        Bus.on('click.start', () => {
            Bus.emit('goToScreen', GameScreenType.Game);
        });
    }

    protected getHTML(): string {
        return `
        <ui-header x="50" y="10" anchor="center center">Hello</ui-header>
        <ui-button x="50" y="25" anchor="center center" click="start">Start</ui-button>
        `;
    }
}