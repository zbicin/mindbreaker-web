import { UIElement } from './UIElement';
export class UIColorTile extends UIElement {
    public static TagName: string = 'ui-color-tile';
    public static get observedAttributes() {
        return ['color', 'height', 'width'];
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        switch (name) {
            case 'color':
                this.style.backgroundColor = newValue;
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