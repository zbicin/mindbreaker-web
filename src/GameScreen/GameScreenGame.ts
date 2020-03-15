import { GameScreen } from "./GameScreen";
import { Bus } from "../Bus";
import { GameScreenType } from "../GameScreenType";
import { getRandomColor, Color } from "./Colors";
import { tossACoin } from "../Utils";


export class GameScreenGame extends GameScreen {
    private static CounterStartValue: number = 3;
    private get counter() { return this._counter; }
    private set counter(c: number) {
        this._counter = c;
        this.getElementByName('counter').innerHTML = c.toFixed(1);
    };
    private _counter: number = GameScreenGame.CounterStartValue;
    private get score() { return this._score; }
    private set score(s: number) {
        this._score = s;
        this.getElementByName('score').innerHTML = s.toString();
    }
    private _score: number = 0;
    private counterIntervalHandle: number | null = null;
    private correctColor: Color | null = null;
    private incorrectColor: Color | null = null;
    private leftColor: Color | null = null;
    private rightColor: Color | null = null;

    constructor() {
        super();
        Bus.on('click.cancelGame', (e) => {
            if (confirm('Are you sure?')) {
                Bus.emit('goToScreen', GameScreenType.Home);
            }
        });

        Bus.on('click.leftColor', () => {
            this.correctColor === this.leftColor ? this.correctAnswer() : this.incorrectAnswer();
        });
        Bus.on('click.rightColor', () => {
            this.correctColor === this.rightColor ? this.correctAnswer() : this.incorrectAnswer();
        });
    }

    public onActivate(element: HTMLElement) {
        super.onActivate(element);
        this.shuffleColors();
        this.counter = GameScreenGame.CounterStartValue;
        this.score = 0;
        this.counterIntervalHandle = setInterval(() => {
            if (this.counter === 0) {
                alert(`Time is up! Your result is ${this.score}`);
                Bus.emit('goToScreen', GameScreenType.Home);
                return;
            }
            this.counter = Math.max(this.counter - 0.1, 0);
        }, 100);
    }

    public onDeactivate() {
        if (this.counterIntervalHandle) {
            clearInterval(this.counterIntervalHandle);
            this.counterIntervalHandle = null;
        }
    }

    protected getHTML(): string {
        return `
        <ui-header x="50" y="10" height="10" anchor="center center" name="colorName"></ui-header>
        <ui-header x="50" y="20" height="5" anchor="center center" name="counter">0.0</ui-header>
        <ui-header x="50" y="25" height="5" anchor="center center" name="score">0</ui-header>
        <ui-color-tile x="45" y="30" width="40" height="50" anchor="right top" click="leftColor" name="leftColor"></ui-color-tile>
        <ui-color-tile x="55" y="30" width="40" height="50" anchor="left top" click="rightColor" name="rightColor"></ui-color-tile>
        <ui-button x="50" y="85" width="80" height="5" anchor="center top" click="cancelGame">Go back</ui-button>
        `;
    }

    private correctAnswer(): void {
        this.score += 1;
        this.counter += 1;
        this.shuffleColors();
    }

    private incorrectAnswer(): void {
        alert(`Gotcha! Your result is ${this.score}`);
        Bus.emit('goToScreen', GameScreenType.Home);
    }

    private shuffleColors(): void {
        this.leftColor = getRandomColor();
        do {
            this.rightColor = getRandomColor();
        } while (this.rightColor === this.leftColor);
        this.getElementByName('leftColor').setAttribute('color', this.leftColor.value);
        this.getElementByName('rightColor').setAttribute('color', this.rightColor.value);
        if (tossACoin(0.5)) {
            this.correctColor = this.leftColor;
            this.incorrectColor = this.rightColor;
        } else {
            this.correctColor = this.rightColor;
            this.incorrectColor = this.leftColor;
        }
        const colorNameElement: HTMLElement = this.getElementByName('colorName');
        colorNameElement.innerHTML = this.correctColor.name;
        colorNameElement.setAttribute('color', tossACoin(0.25) ? this.correctColor.value : this.incorrectColor.value);
    }
}