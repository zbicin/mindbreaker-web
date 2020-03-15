import { UIElement } from './UIElement';
export class UIButton extends UIElement {
    public static TagName: string = 'ui-button';
    constructor() {
        super();
        if (this.hasAttribute('height')) {
            const height: string = this.getAttribute('height')!;
            this.style.height = `${height}vh`;
            this.style.fontSize = `${parseInt(height, 10) * 0.75}vh`;
            this.style.lineHeight = this.style.height;
        }
        if (this.hasAttribute('width')) {
            this.style.width = `${this.getAttribute('width')!}vw`;
        }
    }
}
