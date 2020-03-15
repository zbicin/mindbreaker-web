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
}