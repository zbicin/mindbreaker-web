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
        <ui-header x="50" y="10" height="5" anchor="center center">Mindbreaker</ui-header>
        <ui-header x="50" y="20" height="4" anchor="center top">Lorem lipsum</ui-header>
        <ui-button x="50" y="80" width="80" height="10" anchor="center top" click="start">Start</ui-button>
        `;
    }
}