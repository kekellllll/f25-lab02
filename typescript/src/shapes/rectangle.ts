import type { Shape } from "./shape.js";

export class Rectangle implements Shape {
    private readonly height: number; // 将字段设为 private 和 readonly
    private readonly width: number;  // 将字段设为 private 和 readonly

    constructor(height: number, width: number) {
        this.height = height;
        this.width = width;
    }

    getArea(): number {
        return this.height * this.width;
    }

    getHeight(): number {
        return this.height;
    }

    getWidth(): number {
        return this.width;
    }
}

export function newRectangle(height: number, width: number): Rectangle {
    return new Rectangle(height, width);
}
