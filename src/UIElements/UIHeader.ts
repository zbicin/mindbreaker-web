import { UIElement } from './UIElement';
export class UIHeader extends UIElement {
    public static TagName: string = 'ui-header';
    public static get observedAttributes() {
        return super.observedAttributes.concat(['color']);
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        super.attributeChangedCallback(name, oldValue, newValue);
        switch (name) {
            case 'color':
                this.style.color = newValue;
                break;
            case 'height':
                this.style.fontSize = `${parseFloat(newValue) * 0.75}vh`;
                break;
        }
    }
}