export interface LifeCycle {
    onEnter?(): void;
    onEnable?(): void;
    onUpdate?(): void;
    onDisable?(): void;
    onExit?(): void;
}