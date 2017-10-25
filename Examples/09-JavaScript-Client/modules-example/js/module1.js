export function square(x) {
    return x * x;
}

export function double(x) {
    return x * 2;
}

export class Student {
    constructor(firstname, lastname) {
        this.firstName = firstname;
        this.lastName = lastname;
    }

    get name() {
        return `${this.firstName} ${this.lastName}`;
    }
}