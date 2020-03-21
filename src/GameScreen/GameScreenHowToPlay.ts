import { GameScreen } from "./GameScreen";
import { Bus } from "../Bus";
import { GameScreenType } from "../GameScreenType";
import { Colors, getColorValue } from "./Colors";

export class GameScreenHowToPlay extends GameScreen {
    constructor() {
        super();
        Bus.on('click.correctColor', () => {
            Bus.emit('goToScreen', GameScreenType.Game);
        });
        Bus.on('click.backHome', () => {
            Bus.emit('goToScreen', GameScreenType.Home);
        });
    }

    public getHTML(): string {
        return `
            <ui-header x="10" y="5" height="10" width="80" color="${getColorValue('Purple')}">Green</ui-header>
            <ui-textarea x="10" y="15" height="15" width="80" font-size="2.5">How to play? Your task is to tap the color indicated by the header at the top. The font color might be misleading, as in this very example.</ui-textarea>
            <ui-textarea x="10" y="30" height="5" width="80" font-size="2.5">Tap the correct color to start the game:</ui-textarea>
            <ui-color-tile x="5" y="35" width="40" height="40" color="${getColorValue('Green')}" click="correctColor" font-size="3">Correct</ui-color-tile>
            <ui-color-tile x="55" y="35" width="40" height="40" color="${getColorValue('Purple')}" font-size="3">Incorrect</ui-color-tile>
            <ui-button secondary x="35" y="85" width="30" height="5" click="backHome">Go back</ui-button>
        `;
    }
}