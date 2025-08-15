import type { Component } from "./component";
import { type UUID, randomUUID } from "crypto";
import type { ComponentConstructor } from "./component-constructor";
import type { ScriptConstructor } from "./script-constructor";
import { Script } from "./script";

export class Entity {
    private readonly _id: UUID = randomUUID();
    private components: Map<ComponentConstructor, Set<Component>> = new Map();
    private scripts: Map<ScriptConstructor, Set<Script>> = new Map();

    public get id(): Readonly<UUID> {
        return this._id;
    }

    public registerComponent(component: Component) {
        if (component instanceof Script) {
            throw new Error("Register the entity's scripts using the Entity.registerScript() method.");
        }

        const _constructor = component.constructor as ComponentConstructor;
        if (!this.components.has(_constructor)) {
            this.components.set(_constructor, new Set());
        }

        this.components.get(_constructor)!.add(component);
    }

    public getAllComponentsOfType(type: ComponentConstructor) {
        return this.components.get(type) ?? new Set();
    }

    public removeComponent(component: Component) {
        const type = component.constructor as ComponentConstructor;
        this.components.get(type)?.delete(component);
    }

    public registerScript(script: Script) {
        const _constructor = script.constructor as ScriptConstructor;
        if (!this.scripts.has(_constructor)) {
            this.scripts.set(_constructor, new Set());
        }

        this.scripts.get(_constructor)!.add(script);
    }

    public getAllScriptsOfType(type: ScriptConstructor) {
        return this.scripts.get(type) ?? new Set();
    }

    public removeScript(script: Script) {
        const type = script.constructor as ScriptConstructor;
        this.scripts.get(type)?.delete(script);
    }

}