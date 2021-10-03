export class Vector2 {
  public x: number;
  public y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  get list() {
    return [this.x, this.y];
  }

  public distanceTo(other: Vector2) {
    return Math.hypot(this.x - other.x, this.y - other.y);
  }
}
