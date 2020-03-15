export function tossACoin(chance: number) {
    if (chance >= 1 || chance <= 0) {
        throw new Error('Chance must be <1 and >0')
    }
    return Math.random() < chance;
}