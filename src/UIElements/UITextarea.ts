import { UIElement } from "./UIElement";

export class UITextarea extends UIElement {
    public static TagName: string = 'ui-textarea';
    public static get observedAttributes(): string[] {
        return super.observedAttributes.concat(['font-size']);
    }

    constructor() {
        super();
    }
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void {
        super.attributeChangedCallback(name, oldValue, newValue);
        switch (name) {
            case 'font-size':
                this.style.fontSize = `${newValue}vh`;
                break;
        }
    }
}