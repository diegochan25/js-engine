import { Delegate } from "./delegate";

export class Action<T extends any[] = any[]> extends Delegate<T, void> {
    constructor() {
        super();
    }
}
