import type { LifeCycle } from "@common/interface/life-cycle";
import type { ComponentConstructor } from "./component-constructor";
import type { Entity } from "./entity";

export abstract class System implements LifeCycle {
    private entities: Set<Entity> = new Set();
    private _requiredComponents: Set<ComponentConstructor> = new Set();
    private get requiredComponents() {
        return Array.from(this._requiredComponents);
    }

    constructor(requiredComponents: Set<ComponentConstructor>) {
        this._requiredComponents = requiredComponents;
    }

    public actsOn(entity: Entity): boolean {
        return this.requiredComponents.every((req) => entity.getAllComponentsOfType(req).size > 0);
    }

    public registerEntity(entity: Entity) {
        if (this.actsOn(entity)) {
            this.entities.add(entity);
        }
    }

    public unregisterEntity(entity: Entity) {
        this.entities.delete(entity);
    }

    public onEnter(): void { }

    public onEnable(): void { }

    public onUpdate(): void { }

    public onDisable(): void { }

    public onExit(): void { }
}