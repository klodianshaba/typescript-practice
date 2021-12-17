console.log('Hello from TypeScript');

export interface IUser{
    id: number;
    name: string;
}

export class User implements IUser{
    id: number = 1;
    name: string = '';
    constructor(config: Partial<IUser>) {
        Object.assign(this, config);
    }
}

const user = new User( { id: 2 });

console.log(user);
