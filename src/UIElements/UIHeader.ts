import { UIElement } from './UIElement';
export class UIHeader extends UIElement {
    public static TagName: string = 'ui-header';
    public static get observedAttributes() {
        return ['color', 'height'];
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        switch (name) {
            case 'color':
                this.style.color = newValue;
                break;
            case 'height':
                this.style.fontSize = `${newValue}vh`;
                break;
        }
    }
}