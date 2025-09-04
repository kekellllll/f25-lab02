import { newRectangle, Rectangle } from "./shapes/rectangle.js";
export class Renderer {
    shape;
    constructor(shape) {
        this.shape = shape;
    }
    draw() {
        console.log("Shape drawn");
        console.log(`Its area is ${this.shape.getArea()}`);
    }
}
export function newRenderer(shape) {
    return new Renderer(shape);
}
//# sourceMappingURL=renderer.js.map