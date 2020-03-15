import { GameState } from "./GameState";
import { Renderer } from "./Renderer";

const rootElement = document.querySelector('#root') as HTMLElement | null;
if (!rootElement) {
    alert('Cannot find root element');
    throw new Error('Cannot find root element');
}
const state = new GameState();
const renderer = new Renderer(rootElement);
renderer.render(state);