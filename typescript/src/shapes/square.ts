import type { Shape } from "./shape.js"; // 使用 type-only 导入

export class Square implements Shape {
    private readonly sideLen: number; // 将字段设为 private 和 readonly

    constructor(sideLen: number) {
        this.sideLen = sideLen;
    }

    getArea(): number {
        return this.sideLen * this.sideLen;
    }

    /**
     * Returns the side length of the square.
     *
     * @return the side length of the square
     */
    getSideLen(): number {
        return this.sideLen;
    }
}
