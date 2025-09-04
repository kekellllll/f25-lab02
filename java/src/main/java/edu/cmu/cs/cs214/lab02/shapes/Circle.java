package edu.cmu.cs.cs214.lab02.shapes;

/**
 * Represents a circle shape that implements the Shape interface.
 */
public class Circle implements Shape {
    private final double radius; // 将字段设为 private 和 final

    /**
     * Constructs a Circle with the specified radius.
     *
     * @param radius the radius of the circle
     */
    public Circle(double radius) {
        this.radius = radius;
    }

    /**
     * Returns the area of the circle.
     *
     * @return the area of the circle
     */
    @Override
    public double getArea() {
        return Math.PI * radius * radius;
    }
}
