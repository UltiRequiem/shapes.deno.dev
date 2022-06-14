import { randomNumber } from "https://deno.land/x/random_number@0.1.1/mod.ts";

/**
 * A circle is a closed 2D shape made up of a curved line with no corners or edges.
 *
 * Some real-life examples of the circle are coins, wheels, and pizzas.
 */
export class Circle {
  /**
   * The distance from the center of the circle to the boundary of
   * the circle.
   */
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  /**
   * @returns The length of the boundary of the circle.
   */
  circumference() {
    return Math.PI * 2 * this.radius;
  }

  /**
   * @returns A straight line that runs from one side of a figure and passes through the center.
   */
  diameter() {
    return this.radius * 2;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }

  static random() {
    return new this(randomNumber());
  }
}

/**
 * A triangle is a 2D shape with three sides and three vertices (corners).
 *
 * Some real-life examples of a triangle are traffic signs, pyramids, and nachos.
 */
export interface Triangle {
  type: "triangle";
  sides: { one: number; two: number; three: number };
  vertices: { one: number; two: number; three: number };
  angles: { one: number; two: number; three: number };
}

/**
 * A square is a 2D shape with four equal sides and each angle is equal to 90˚.
 *
 * Some of the real-life examples of a square are: a loaf of bread and
 * a chessboard.
 */
export interface Square {
  type: "square";
  sides: number;
}

/**
 * A rectangle is a 2D shape with four sides in which the opposite sides are
 * equal and parallel, and all the four angles measure 90 ̊.
 *
 * Some of the real-life examples of a rectangle are table tops,
 * blackboards, cardboard, etc.
 */
export interface Rectangle {
  type: "rectangle";
  sides: {
    vertical: number;
    horizontal: number;
  };
}

export type Shape = Circle | Triangle | Square | Rectangle;
