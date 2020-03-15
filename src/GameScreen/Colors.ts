export const Colors: Color[] = [
    { name: 'Blue', value: '#0000FF' },
    { name: 'Yellow', value: '#FFFF00' },
    { name: 'Green', value: '#00FF00' },
    { name: 'Red', value: '#FF0000' }
];

export interface Color {
    name: string;
    value: string;
}

export function getRandomColor(): Color {
    const index: number = Math.floor(Math.random() * Colors.length);
    return Colors[index];
}