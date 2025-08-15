import type { Controller } from "./controller";
import type { InputBindingArgs } from "./input-binding-args";
import type { Keyboard } from "./keyboard";
import type { Mouse } from "./mouse";

export class InputBinding {
    public keyboard?: Keyboard;
    public mouse?: Mouse;
    public controller?: Controller;

    constructor({
        keyboard,
        mouse,
        controller
    }: InputBindingArgs) {
        this.keyboard = keyboard;
        this.mouse = mouse;
        this.controller = controller;
    }
}