import type { Controller } from "./controller";
import type { Keyboard } from "./keyboard";
import type { Mouse } from "./mouse";


export interface InputBindingArgs {
    keyboard?: Keyboard;
    mouse?: Mouse;
    controller?: Controller;
}
