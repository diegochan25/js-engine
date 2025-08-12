import type { LifeCycle } from "@interface/life-cycle";
import { ButtonState } from "./button-state";
import { Controller } from "./controller";
import { Vector2 } from "@class/vector2";
import { clamp } from "@function/clamp";

export class ControllerListener implements LifeCycle {
    public buttons: Map<Controller, ButtonState>;
    public triggerL: number;
    public triggerR: number;
    public joystickL: Vector2;
    public joystickR: Vector2;
    private gamepad?: Gamepad;
    public index: number;

    constructor(index: number) {
        this.buttons = new Map();
        this.triggerL = 0;
        this.triggerR = 0;
        this.joystickL = Vector2.ZERO;
        this.joystickR = Vector2.ZERO;
        this.index = index;
    }

    private handleGamepadConnected = (event: GamepadEvent) => {
        if (event.gamepad.index === this.index) {
            this.gamepad = event.gamepad;
        }
    };

    private handleGamepadDisconnected = (event: GamepadEvent) => {
        if (event.gamepad.index === this.index) {
            this.gamepad = undefined;
        }
    }

    public onEnter(): void {
        window.addEventListener("gamepadconnected", this.handleGamepadConnected);
        window.addEventListener("gamepaddisconnected", this.handleGamepadDisconnected);
    }

    public onEnable(): void { }

    public onUpdate(): void {
        if (!this.gamepad) return;

        this.gamepad.buttons.forEach((button, i) => {
            if (button.pressed) {
                this.buttons.set(i as Controller, ButtonState.Press);
            } else {
                this.buttons.set(i as Controller, ButtonState.Release);
            }
        });

        this.buttons.forEach((state, button, map) => {
            if (state === ButtonState.Press) {
                map.set(button, ButtonState.Hold);
            } else if (state === ButtonState.Release) {
                map.set(button, ButtonState.Inactive);
            }
        });

        this.triggerL = clamp(this.gamepad.buttons[6]!.value ?? 0, 0 , 1);
        this.triggerR = clamp(this.gamepad.buttons[7]!.value ?? 0, 0, 1);
        this.joystickL.set(this.gamepad.axes[0] ?? 0, -(this.gamepad.axes[1] ?? 0));
        this.joystickR.set(this.gamepad.axes[2] ?? 0, -(this.gamepad.axes[3] ?? 0));
    }

    public onDisable(): void { }

    public onExit(): void {
        window.removeEventListener("gamepadconnected", this.handleGamepadConnected);
        window.removeEventListener("gamepaddisconnected", this.handleGamepadDisconnected);
    }
}