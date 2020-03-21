const computedStyle: CSSStyleDeclaration = window.getComputedStyle(document.documentElement);
function getColorValue(name: string): string {
    return computedStyle.getPropertyValue(`--tiles-${name.toLowerCase()}`);
}
export const Colors: Color[] = ['White', 'Blue', 'Green', 'Red', 'Yellow', 'Purple', 'Pink', 'Orange']
    .map((name) => {
        return {
            name: name,
            value: getColorValue(name)
        };
    });


export interface Color {
    name: string;
    value: string;
}

export function getRandomColor(): Color {
    const index: number = Math.floor(Math.random() * Colors.length);
    return Colors[index];
}