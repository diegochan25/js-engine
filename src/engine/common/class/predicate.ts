import { Delegate } from "./delegate";

export class Predicate<T extends any = any> extends Delegate<[T], boolean> {
    constructor() {
        super();
    }
}
