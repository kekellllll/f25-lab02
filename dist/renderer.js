export class Renderer {
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