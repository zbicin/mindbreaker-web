export abstract class GameScreen {
    protected abstract getHTML(): string;
    protected element: HTMLElement | null = null;

    public render(): void {
        if (!this.element) {
            throw new Error('No element set');
        }
        this.element.innerHTML = this.getHTML();
    }

    public onActivate(element: HTMLElement): void {
        this.element = element;
        this.render();
    }

    public onDeactivate(): void {
        ;
    }

    public getElementByName(name: string): HTMLElement {
        if (!this.element) {
            throw new Error('No root element for this game screen');
        }

        const result: HTMLElement | null = this.element.querySelector(`[name="${name}"]`);
        if (!result) {
            throw new Error('Element not found');
        }
        return result;
    }
}