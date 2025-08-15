import type { System } from "./system";

export type SystemConstructor = new (...args: any[]) => System;