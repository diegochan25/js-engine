import { Component } from "@ecs/component";
import type { InputAction } from "./input-action";

export class InputMap extends Component {
    private actions: Map<string, InputAction>;

    constructor() {
        super();
        this.actions = new Map();
    }

    public registerAction(action: InputAction): void {
        this.actions.set(action.name, action);
    }

    public getAction(name: string): InputAction | undefined {
        return this.actions.get(name);
    }
}