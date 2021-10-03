import { Shape } from "./shape";

export class Plane {
  private shapes: Shape[];

  constructor() {
    this.shapes = [];
  }

  public add(shape: Shape) {
    this.shapes.push(shape);
  }
}
