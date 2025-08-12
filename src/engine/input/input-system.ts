import type { LifeCycle } from "@interface/life-cycle";
import { InputListener } from "./input-listener";
import { ControllerListener } from "./controller-listener";

export class InputSystem implements LifeCycle {
    private listener: InputListener;
    private controllerListeners: ControllerListener[];

    constructor() {
        this.listener = new InputListener();
        this.controllerListeners = [
            new ControllerListener(0),
            new ControllerListener(1),
            new ControllerListener(2),
            new ControllerListener(3)
        ];
    }

    public onEnter(): void {
        this.listener.onEnter();
        this.controllerListeners.forEach((listener) => listener.onEnter());
    }

    public onEnable(): void {
        this.listener.onEnable();
        this.controllerListeners.forEach((listener) => listener.onEnable());
    }

    public onUpdate(): void {
        this.listener.onUpdate();
        this.controllerListeners.forEach((listener) => listener.onUpdate());
    }

    public onDisable(): void {
        this.listener.onDisable();
        this.controllerListeners.forEach((listener) => listener.onDisable());
    }

    public onExit(): void {
        this.listener.onExit();
        this.controllerListeners.forEach((listener) => listener.onExit());
    }
}