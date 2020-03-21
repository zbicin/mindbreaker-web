import { GameScreen } from "./GameScreen";
import { Bus } from "../Bus";
import { GameScreenType } from "../GameScreenType";

export class GameScreenHome extends GameScreen {
    private get vibrations(): boolean {
        return localStorage.getItem('vibrations') === 'true';
    }
    private set vibrations(v: boolean) {
        const value: boolean = v && navigator.vibrate && navigator.vibrate(200);
        localStorage.setItem('vibrations', value ? 'true' : 'false');
    }

    constructor() {
        super();

        Bus.on('click.howToPlay', () => {
            Bus.emit('goToScreen', GameScreenType.HowToPlay);
        });

        Bus.on('click.fullScreen', () => {
            if (document.fullscreenElement) {
                document.exitFullscreen();
            } else {
                document.body.requestFullscreen();
            }
        });

        Bus.on('click.vibrations', () => {
            this.vibrations = !this.vibrations;
            this.updateVibrationsState();
        });
    }

    protected getHTML(): string {
        return `
        <ui-header x="10" y="10" height="7" width="80">Mindbreaker</ui-header>

        <ui-button x="10" y="70" width="35" height="5" secondary click="vibrations" name="vibrations">&#128243;</ui-button>
        <ui-button x="55" y="70" width="35" height="5" secondary  click="fullScreen" name="fullScreen">⛶</ui-button>
        <ui-button x="10" y="80" width="80" height="10" click="howToPlay">Start</ui-button>
        `;
    }

    public onActivate(element: HTMLElement): void {
        super.onActivate(element);
        this.updateVibrationsState();
    }

    private updateVibrationsState(): void {
        if (this.vibrations) {
            this.getElementByName('vibrations').setAttribute('enabled', 'enabled');
        } else {
            this.getElementByName('vibrations').removeAttribute('enabled');
        }
    }
}