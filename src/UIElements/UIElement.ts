import { Bus } from "../Bus";

export abstract class UIElement extends HTMLElement {
    public static get observedAttributes() {
        return ['x', 'y', 'height', 'width'];
    }
    constructor() {
        super();
        if (this.hasAttribute('click')) {
            const clickName = this.getAttribute('click')!;
            Bus.hook(this, 'click', clickName);
        }
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        switch (name) {
            case 'x':
                this.style.left = `${newValue}vw`;
                break;
            case 'y':
                this.style.top = `${newValue}vh`;
                break;
            case 'height':
                this.style.height = `${newValue}vh`;
                break;
            case 'width':
                this.style.width = `${newValue}vw`;
                break;
        }
    }
}
