const welcome = 'world';

export function hello(world: string = welcome): string {
    return `Hello ${world}! `;
}