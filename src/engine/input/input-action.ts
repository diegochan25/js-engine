import { Action } from "@class/action";
import type { InputBinding } from "./input-binding";
import type { Keyboard } from "./keyboard";
import type { Mouse } from "./mouse";
import type { Controller } from "./controller";

export class InputAction {
    public name: string;
    public binding: InputBinding;
    public onPress: Action = new Action();
    public onHold: Action = new Action();
    public onRelease: Action = new Action();

    constructor(name: string, binding: InputBinding) {
        this.name = name;
        this.binding = binding;
    }

    public setKeyboardBinding(binding: Keyboard): void {
        this.binding.keyboard = binding;
    }

    public setMouseBinding(binding: Mouse): void {
        this.binding.mouse = binding;
    }

    public setControllerBinding(binding: Controller): void {
        this.binding.controller = binding;
    }
}