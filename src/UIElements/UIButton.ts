import { UIElement } from './UIElement';
export class UIButton extends UIElement {
    public static TagName: string = 'ui-button';

    attributeChangedCallback(name: string, oldValue: string, newValue: string): void {
        super.attributeChangedCallback(name, oldValue, newValue);
        switch (name) {
            case 'height':
                this.style.lineHeight = this.style.height;
                this.style.fontSize = `${parseFloat(newValue) * 0.5}vh`;
                break;
        }
    }
}
