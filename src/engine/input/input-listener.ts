import type { LifeCycle } from "@interface/life-cycle";
import { ButtonState } from "./button-state";
import { Vector2 } from "@common/class/vector2";
import { Mouse } from "./mouse";
import { Keyboard } from "./keyboard";

export class InputListener implements LifeCycle {
    public keyboard: Map<Keyboard, ButtonState>;
    public mouse: Map<Mouse, ButtonState>;
    public lastClick: Vector2;
    public dragging: boolean;
    public mousePosition: Vector2;
    public dragStart: Vector2;
    public drag: Vector2;

    constructor() {
        this.keyboard = new Map();
        this.mouse = new Map();
        this.lastClick = Vector2.ZERO;
        this.mousePosition = Vector2.ZERO;
        this.dragStart = Vector2.ZERO;
        this.drag = Vector2.ZERO;
        this.dragging = false;
    }

    private handleMouseMove = (event: MouseEvent) => {
        event.preventDefault();
        if (this.dragging) {
            this.drag.set(event.clientX, event.clientY);
        } else {
            this.mousePosition.set(event.clientX, event.clientY);
        }
    }

    private handleMouseDown = (event: MouseEvent) => {
        event.preventDefault();
        this.mouse.set(event.button, ButtonState.Press);
        if (event.button === Mouse.LeftClick) {
            this.dragging = true;
            this.dragStart.set(event.clientX, event.clientY);
            this.lastClick.set(event.clientX, event.clientY);
        }
    }

    private handleMouseUp = (event: MouseEvent) => {
        event.preventDefault();
        this.mouse.set(event.button, ButtonState.Release);
        if (event.button === Mouse.LeftClick) {
            this.dragging = false;
            this.lastClick = Vector2.ZERO;
        }
    }

    private handleKeyDown = (event: KeyboardEvent) => {
        event.preventDefault();
        if (Object.values(Keyboard).includes(event.code as Keyboard)) {
            this.keyboard.set(event.code as Keyboard, ButtonState.Press);
        }
    }

    private handleKeyUp = (event: KeyboardEvent) => {
        event.preventDefault();
        if (Object.values(Keyboard).includes(event.code as Keyboard)) {
            this.keyboard.set(event.code as Keyboard, ButtonState.Release);
        }
    }

    public onEnter(): void {
        window.addEventListener("mousemove", this.handleMouseMove);
        window.addEventListener("mousedown", this.handleMouseDown);
        window.addEventListener("mouseup", this.handleMouseUp);
        window.addEventListener("keydown", this.handleKeyDown);
        window.addEventListener("keyup", this.handleKeyUp);
    }

    public onEnable(): void { }

    public onUpdate(): void {
        this.keyboard.forEach((state, code, map) => {
            if (state === ButtonState.Press) {
                map.set(code, ButtonState.Hold);
            } else if (state === ButtonState.Release) {
                map.set(code, ButtonState.Inactive);
            }
        });

        this.mouse.forEach((state, button, map) => {
            if (state === ButtonState.Press) {
                map.set(button, ButtonState.Hold);
            } else if (state === ButtonState.Release) {
                map.set(button, ButtonState.Inactive);
            }
        });
    }

    public onDisable(): void { }

    public onExit(): void {
        window.removeEventListener("mousemove", this.handleMouseMove);
        window.removeEventListener("mousedown", this.handleMouseDown);
        window.removeEventListener("mouseup", this.handleMouseUp);
        window.removeEventListener("keydown", this.handleKeyDown);
        window.removeEventListener("keyup", this.handleKeyUp);
    }
}