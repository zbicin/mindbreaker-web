import { GameScreen } from "./GameScreen";
import { Bus } from "../Bus";
import { GameScreenType } from "../GameScreenType";

export class GameScreenGame extends GameScreen {
    private static CounterStartValue: number = 3;
    private counter: number = GameScreenGame.CounterStartValue;
    private counterIntervalHandle: number | null = null;
    private counterSpan: HTMLElement | null = null;

    constructor() {
        super();
        Bus.on('click.cancelGame', (e) => {
            if (confirm('Are you sure?')) {
                Bus.emit('goToScreen', GameScreenType.Home);
            }
        });
    }

    public onActivate(element: HTMLElement) {
        super.onActivate(element);
        this.counterSpan = element.querySelector('ui-span');
        if (!this.counterSpan) {
            throw new Error(`Cannot find counter span`);
        }
        this.counter = GameScreenGame.CounterStartValue;
        this.counterSpan.innerHTML = this.counter.toFixed(1);
        this.counterIntervalHandle = setInterval(() => {
            if (this.counter === 0) {
                Bus.emit('goToScreen', GameScreenType.Home);
                return;
            }
            this.counter = Math.max(this.counter - 0.1, 0);
            this.counterSpan!.innerHTML = this.counter.toFixed(1);
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
        <ui-header x="50" y="10" anchor="center center">Hello from game screen game <ui-span>0.0</ui-span></ui-header>
        <ui-button x="50" y="25" anchor="center center" click="cancelGame">Go back</ui-button>
        `;
    }
}