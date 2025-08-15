import type { Component } from "./component";

export type ComponentConstructor<T extends Component = Component> = new(...args: any) => T;