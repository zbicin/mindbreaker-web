type ColorName = 'White' | 'Blue' | 'Green' | 'Red' | 'Yellow' | 'Purple' | 'Pink' | 'Orange';
const computedStyle: CSSStyleDeclaration = window.getComputedStyle(document.documentElement);
export function getColorValue(name: ColorName): string {
    return computedStyle.getPropertyValue(`--tiles-${name.toLowerCase()}`);
}
const colorNames: ColorName[] = ['White', 'Blue', 'Green', 'Red', 'Yellow', 'Purple', 'Pink', 'Orange'];
export const Colors: Color[] = colorNames.map((name) => {
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