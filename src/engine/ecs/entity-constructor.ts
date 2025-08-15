import type { Entity } from "./entity";

export type EntityConstructor = new(...args: any) => Entity;