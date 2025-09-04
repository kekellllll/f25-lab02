export class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
export function newRectangle(width, height) {
    return new Rectangle(width, height);
}
//# sourceMappingURL=rectangle.js.map