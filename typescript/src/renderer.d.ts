import type { Shape } from "./shapes/shape.js";
export declare class Renderer {
    private shape;
    constructor(shape: Shape);
    draw(): void;
}
export declare function newRenderer(shape: Shape): Renderer;
//# sourceMappingURL=renderer.d.ts.map