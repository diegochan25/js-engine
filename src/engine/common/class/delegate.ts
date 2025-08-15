export class Delegate<T extends any[] = any[], U extends any = any> {
    protected callstack: Set<(...args: T) => U>;

    constructor() {
        this.callstack = new Set();
    }

    public subscribe(callbackfn: (...args: T) => U): void {
        this.callstack.add(callbackfn);
    }

    public unsubscribe(callbackfn: (...args: T) => U): void {
        this.callstack.delete(callbackfn);
    }

    public invoke(...args: T): U[] {
        const uarray: U[] = [];
        this.callstack.forEach((callbackfn) => uarray.push(callbackfn(...args)));
        return uarray;
    }
}


