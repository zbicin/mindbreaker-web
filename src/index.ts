import './UIElements/index';
import { GameState } from "./GameState";
import { Renderer } from "./Renderer";
import { GameScreenType } from './GameScreenType';
import { Bus } from './Bus';

const rootElement = document.querySelector('#root') as HTMLElement | null;
if (!rootElement) {
    alert('Cannot find root element');
    throw new Error('Cannot find root element');
}
const state = new GameState();
const renderer = new Renderer(rootElement);
renderer.render(state);

state.onScreenUpdated(() => {
    renderer.render(state);
});

Bus.on('click.cancelGame', (e) => {
    if (confirm('Are you sure?')) {
        state.setScreen(GameScreenType.Home);
    }
});

Bus.on('click.start', () => {
    state.setScreen(GameScreenType.Game);
});