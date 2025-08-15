import type { LifeCycle } from "@interface/life-cycle";
import { InputListener } from "./input-listener";
import { ControllerListener } from "./controller-listener";
import { System } from "@ecs/system";
import { InputMap } from "./input-map";

export class InputSystem extends System implements LifeCycle {
    private listener: InputListener;
    private controllerListeners: ControllerListener[];

    constructor() {
        super(new Set([
            InputMap
        ]));
        this.listener = new InputListener();
        this.controllerListeners = [
            new ControllerListener(0),
            new ControllerListener(1),
            new ControllerListener(2),
            new ControllerListener(3)
        ];
    }

    public override onEnter(): void {
        this.listener.onEnter();
        this.controllerListeners.forEach((listener) => listener.onEnter());
    }

    public override onEnable(): void {
        this.listener.onEnable();
        this.controllerListeners.forEach((listener) => listener.onEnable());
    }

    public override onUpdate(): void {
        this.listener.onUpdate();
        this.controllerListeners.forEach((listener) => listener.onUpdate());
    }

    public override onDisable(): void {
        this.listener.onDisable();
        this.controllerListeners.forEach((listener) => listener.onDisable());
    }

    public override onExit(): void {
        this.listener.onExit();
        this.controllerListeners.forEach((listener) => listener.onExit());
    }
}