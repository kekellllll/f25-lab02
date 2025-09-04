package edu.cmu.cs.cs214.lab02.shapes;

/**
 * Represents a rectangle shape that implements the Shape interface.
 */
public class Rectangle implements Shape {
    private final double height; // 将字段设为 private 和 final
    private final double width;  // 将字段设为 private 和 final

    /**
     * Constructs a Rectangle with the specified height and width.
     *
     * @param height the height of the rectangle
     * @param width the width of the rectangle
     */
    public Rectangle(double height, double width) {
        this.height = height;
        this.width = width;
    }

    /**
     * Returns the area of the rectangle.
     *
     * @return the area of the rectangle
     */
    @Override
    public double getArea() {
        return height * width;
    }

    /**
     * Returns the height of the rectangle.
     *
     * @return the height of the rectangle
     */
    public double getHeight() {
        return height;
    }

    /**
     * Returns the width of the rectangle.
     *
     * @return the width of the rectangle
     */
    public double getWidth() {
        return width;
    }
}
