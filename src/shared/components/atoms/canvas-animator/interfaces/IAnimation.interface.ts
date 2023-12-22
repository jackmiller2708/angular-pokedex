export interface IAnimation {
  draw(ctx: CanvasRenderingContext2D): void;
  animate(ctx: CanvasRenderingContext2D): void;
  update(): void;
}
