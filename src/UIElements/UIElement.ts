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
        if (this.hasAttribute('anchor')) {
            const [horizontalAnchor, verticalAnchor] = this.getAttribute('anchor')!.split(' ');
            let translateX = this.anchorToTranslateX(horizontalAnchor);
            let translateY = this.anchorToTranslateY(verticalAnchor);
            this.style.transform = `translate(${translateX}%, ${translateY}%)`;
        }
        if (this.hasAttribute('click')) {
            const clickName = this.getAttribute('click')!;
            Bus.hook(this, 'click', clickName);
        }
    }

    private anchorToTranslateX(anchor: string): number {
        switch (anchor) {
            case 'right':
                return -100;
            case 'center':
                return -50;
            case 'left':
            default:
                return 0;
        }
    }

    private anchorToTranslateY(anchor: string): number {
        switch (anchor) {
            case 'bottom':
                return -100;
            case 'center':
                return -50;
            case 'top':
            default:
                return 0;
        }
    }
}
