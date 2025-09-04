package edu.cmu.cs.cs214.lab02.shapes;

/**
 * Represents a square shape that implements the Shape interface.
 */
public class Square implements Shape {
    private final double sideLen; // 将字段设为 private 和 final

    /**
     * Constructs a Square with the specified side length.
     *
     * @param sideLen the length of the square's side
     */
    public Square(double sideLen) {
        this.sideLen = sideLen;
    }

    /**
     * Returns the area of the square.
     *
     * @return the area of the square
     */
    @Override
    public double getArea() {
        return sideLen * sideLen;
    }
}
