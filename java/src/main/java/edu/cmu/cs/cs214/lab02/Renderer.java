package edu.cmu.cs.cs214.lab02;

import edu.cmu.cs.cs214.lab02.shapes.Shape;

/**
 * A renderer that draws shapes and displays their area.
 */
public class Renderer {
    private final Shape shape;

    /**
     * Constructs a Renderer with the specified shape.
     *
     * @param shape the shape to be rendered
     */
    public Renderer(Shape shape) {
        this.shape = shape;
    }

    /**
     * Draws the shape and displays its area.
     */
    public void draw() {
        System.out.println("Shape drawn");
        System.out.println("Its area is " + shape.getArea());
    }
}
