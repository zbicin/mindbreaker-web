import { UIElement } from './UIElement';
export class UIColorTile extends UIElement {
    public static TagName: string = 'ui-color-tile';
    public static get observedAttributes() {
        return super.observedAttributes.concat(['color', 'font-size']);
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        super.attributeChangedCallback(name, oldValue, newValue);
        switch (name) {
            case 'color':
                this.style.backgroundColor = newValue;
                break;
            case 'height':
                this.style.lineHeight = `${newValue}vh`;
                break;
            case 'font-size':
                this.style.fontSize = `${newValue}vh`;
                break;
        }
    }
}