import { Vector2 } from "./vector2";

export abstract class Shape {
  protected line_thickness: number = 1;
  abstract area: number;
  abstract containsPoint(point: Vector2): boolean;
}
