import type { Shape } from "./shape.js"; // 使用 type-only 导入

export class Circle implements Shape {
    private readonly radius: number; // 将字段设为 private 和 readonly

    constructor(radius: number) {
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    /**
     * Returns the radius of the circle.
     *
     * @return the radius of the circle
     */
    getRadius(): number {
        return this.radius;
    }
}
