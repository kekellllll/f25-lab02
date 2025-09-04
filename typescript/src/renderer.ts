import type { Shape } from "./shapes/shape.js"; // 使用 type-only 导入
import { newRectangle, Rectangle } from "./shapes/rectangle.js";

export class Renderer {
    private shape: Shape;

    constructor(shape: Shape) {
        this.shape = shape;
    }

    draw(): void {
        console.log("Shape drawn");
        console.log(`Its area is ${this.shape.getArea()}`);
    }
}

export function newRenderer(shape: Shape): Renderer {
    return new Renderer(shape);
}