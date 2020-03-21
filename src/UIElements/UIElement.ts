import { Bus } from "../Bus";

export abstract class UIElement extends HTMLElement {
    constructor() {
        super();
        if (this.hasAttribute('x')) {
            this.style.left = `${this.getAttribute('x')}vw`;
        }
        if (this.hasAttribute('y')) {
            this.style.top = `${this.getAttribute('y')}vh`;
        }
        if (this.hasAttribute('click')) {
            const clickName = this.getAttribute('click')!;
            Bus.hook(this, 'click', clickName);
        }
    }
}
