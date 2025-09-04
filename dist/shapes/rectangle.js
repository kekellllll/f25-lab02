export class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    getArea() {
        return this.height * this.width;
    }
    getHeight() {
        return this.height;
    }
    getWidth() {
        return this.width;
    }
}
export function newRectangle(height, width) {
    return new Rectangle(height, width);
}
//# sourceMappingURL=rectangle.js.map