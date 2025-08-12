export class Vector2 {
    public x: number;
    public y: number;

    public static get UP(): Readonly<Vector2> {
        return new Vector2(0, 1);
    }

    public static get DOWN(): Readonly<Vector2> {
        return new Vector2(0, -1);
    }

    public static get LEFT(): Readonly<Vector2> {
        return new Vector2(-1, 0);
    }

    public static get RIGHT(): Readonly<Vector2> {
        return new Vector2(1, 0);
    }

    public static get ZERO(): Readonly<Vector2> {
        return new Vector2(0, 0);
    }

    public static get ONE(): Readonly<Vector2> {
        return new Vector2(1, 1);
    }

    public static get NEGATIVE_INFINITY(): Readonly<Vector2> {
        return new Vector2(-Infinity, -Infinity);
    }

    public static get POSITIVE_INFINITY(): Readonly<Vector2> {
        return new Vector2(Infinity, Infinity);
    }

    public get sqrMagnitude(): number {
        return this.x ** 2 + this.y ** 2
    }

    public get magnitude(): number {
        return Math.sqrt(this.sqrMagnitude);
    }

    public get normalized(): Vector2 {
        const mgt = this.magnitude;
        return mgt === 0 ? Vector2.ZERO : new Vector2(this.x / mgt, this.y / mgt);
    }

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public static angle(from: Vector2, to: Vector2): number {
        return Math.atan2(to.y - from.y, to.x - from.x);
    }

    public static approximately(a: Vector2, b: Vector2): boolean {
        return Math.abs(b.x - a.x) <= Number.EPSILON && Math.abs(b.y - a.y) <= Number.EPSILON;
    }

    public static clamp(vector: Vector2, maxLength: number): Vector2 {
        const mag = vector.magnitude;
        if (mag > maxLength && mag !== 0) {
            const ratio = maxLength / mag;
            return new Vector2(vector.x * ratio, vector.y * ratio);
        }
        return new Vector2(vector.x, vector.y);
    }

    public static cross(a: Vector2, b: Vector2): number {
        return a.x * b.y - a.y * b.x;
    }

    public static distance(a: Vector2, b: Vector2): number {
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        return Math.sqrt(dx ** 2 + dy ** 2);
    }

    public static dot(a: Vector2, b: Vector2): number {
        return a.x * b.x + a.y * b.y;
    }

    public static lerp(a: Vector2, b: Vector2, t: number): Vector2 {
        t = Math.max(0, Math.min(1, t));
        switch (t) {
            case 0:
                return new Vector2(a.x, a.y);
            case 1:
                return new Vector2(b.x, b.y);
            default:
                return new Vector2(
                    a.x + (b.x - a.x) * t,
                    a.y + (b.y - a.y) * t
                );
        }
    }

    public static max(a: Vector2, b: Vector2) {
        return new Vector2(Math.max(a.x, b.x), Math.max(a.y, b.y));
    }

    public static min(a: Vector2, b: Vector2) {
        return new Vector2(Math.min(a.x, b.x), Math.min(a.y, b.y));
    }

    public static moveTowards(current: Vector2, target: Vector2, maxDistanceDelta: number) {

        const to = new Vector2(target.x - current.x, target.y - current.y);
        const dist = to.magnitude;
        if (dist <= maxDistanceDelta || dist === 0) {
            return new Vector2(target.x, target.y);
        }
        const ratio = maxDistanceDelta / dist;
        return new Vector2(current.x + to.x * ratio, current.y + to.y * ratio);
    }

    public static perpendicular(vector: Vector2, direction: "clockwise" | "counterclockwise" = "clockwise") {
        switch (direction) {
            case "clockwise":
                return new Vector2(vector.y, -vector.x);
            case "counterclockwise":
                return new Vector2(-vector.y, vector.x);
        }
    }
    public static project(direction: Vector2, normal: Vector2): Vector2 {
        const normalNormalized = normal.normalized;
        const dot = Vector2.dot(direction, normalNormalized);
        return new Vector2(normalNormalized.x * dot, normalNormalized.y * dot);
    }

    public static rotate(v: Vector2, radians: number): Vector2 {
        const cos = Math.cos(radians);
        const sin = Math.sin(radians);
        return new Vector2(v.x * cos - v.y * sin, v.x * sin + v.y * cos);
    }

    public static scale(a: Vector2, b: Vector2) {
        return new Vector2(a.x * b.x, a.y * b.y);
    }

    public copy(): Vector2 {
        return new Vector2(this.x, this.y);
    }

    public equals(vector: Vector2): boolean {
        return this.x === vector.x && this.y === vector.y;
    }

    public normalize(): void {
        const mag = this.magnitude;
        if (mag !== 0) {
            this.x /= mag;
            this.y /= mag;
        }
    }

    public set(x: number, y: number): this {
        this.x = x;
        this.y = y;
        return this;
    }

    public toString(): string {
        return `Vector2 (X: ${this.x}, Y: ${this.y})`;
    }

    public tuple(): [number, number] {
        return [this.x, this.y];
    }
}