import { Shape } from "../shape";
import { Vector2 } from "../vector2";

export class Circle extends Shape {
  private center: Vector2;
  private radius: number;

  constructor(
    center_x: number = 0,
    center_y: number = 0,
    radius: number = 5,
    line_thickness: number = 1
  ) {
    super();
    this.center = new Vector2(center_x, center_y);
    this.radius = radius;
    this.line_thickness = line_thickness;
  }

  get area() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  public containsPoint(point: Vector2) {
    return (
      this.center.distanceTo(point) <= this.radius + this.line_thickness / 2 &&
      this.center.distanceTo(point) >= this.radius - this.line_thickness / 2
    );
  }
}
