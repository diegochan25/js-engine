import type { Script } from "./script";

export type ScriptConstructor<T extends Script = Script> = new(...args: any[]) => T;